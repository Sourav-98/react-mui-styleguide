
import React, { useEffect, useRef, useState } from 'react';
import { v4 as uuid } from 'uuid';
import { AlertContextProps, AlertMessage } from './AlertStackContext';
import { Alert, Box, Collapse, Grow, alertClasses } from '@mui/material';

let AlertsContextDefault = {
  maxAlerts: 6,
  pushAlert: (_: Omit<AlertMessage, 'id' | 'in'>): void => { },
  removeAlert: (_: string): void => { }
}

const AlertStackContext: React.Context<AlertContextProps> = React.createContext<AlertContextProps>(AlertsContextDefault);

const AlertElement: React.FC<AlertMessage & { closeFunc: () => void }> = ({ closeFunc, message, variant, severity, autoClose, autoCloseDuration }): JSX.Element => {

  const [open, setOpen] = useState<boolean>(false);
  const delayCloseTimer = useRef(setTimeout(() => { }, 0));

  const noDelayClose = () => {
    if (delayCloseTimer) {
      clearTimeout(delayCloseTimer.current);
    }
    setOpen(false);
    setTimeout(() => closeFunc(), 100);
  }

  useEffect(() => {
    setTimeout(() => setOpen(true), 50);
  }, []);   // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (autoClose) {
      delayCloseTimer.current = setTimeout(noDelayClose, autoCloseDuration);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Collapse sx={{
      alignContent: 'flex-end'
    }} in={open} timeout={{
      enter: 100,
      exit: 100
    }}>
      <Box maxWidth={310} display={'flex'} flexDirection={'column'} justifySelf={'flex-end'}>
        <Grow in={open} timeout={{
          enter: 300,
          exit: 100
        }}>
          <Alert
            component={'div'}
            variant={variant}
            severity={severity}
            sx={{
              mb: 1,
              [`& > .${alertClasses.message}`]: {
                wordWrap: 'break-word'
              }
            }}
            onClose={() => noDelayClose()}
          >{message}</Alert>
        </Grow>
      </Box>
    </Collapse>
  )
}

export const AlertStackContextProvider: React.FC<{ maxAlerts: number, children: React.ReactNode }> = ({ maxAlerts, ...props }): JSX.Element => {

  const [alertQueue, setAlertQueue] = useState<Array<Omit<AlertMessage, 'id' | 'in'>>>([]);
  const [alertList, setAlertList] = useState<Array<AlertMessage>>([]);
  /**
   * This is used to queued dispatch of alert messages
   */
  const [isNewAlertDispatched, setNewAlertDispatched] = useState<boolean>(false);

  useEffect(() => {
    if (alertQueue.length && !isNewAlertDispatched) {
      setNewAlertDispatched(true);
      // if the alert queue contains a message, then push the last message in the queue to the alertList for display (with a delay of 151ms).
      // remove that item from alert queue
      setTimeout(() => {
        setAlertList(prevAlertsList => [
          {
            id: uuid(),
            message: alertQueue[alertQueue.length - 1].message,
            variant: alertQueue[alertQueue.length - 1].variant,
            severity: alertQueue[alertQueue.length - 1].severity,
            autoClose: alertQueue[alertQueue.length - 1].autoClose,
            autoCloseDuration: alertQueue[alertQueue.length - 1].autoCloseDuration
          }, ...prevAlertsList
        ]);
        setNewAlertDispatched(false);
        setAlertQueue(prevAlertQueue => prevAlertQueue.slice(0, prevAlertQueue.length - 1));
      }, 200);
    }
  }, [alertQueue, isNewAlertDispatched]);

  useEffect(() => {
    if (alertList.length) {
      if (alertList.length === maxAlerts + 1) {
        setAlertList((prevAlertList) => prevAlertList.slice(0, prevAlertList.length - 1));
      }
    }
  }, [alertList]);  // eslint-disable-line react-hooks/exhaustive-deps

  const pushAlert = ({ message = '', variant = 'filled', severity = 'info', autoClose = true, autoCloseDuration = 5500 }: Omit<AlertMessage, 'id' | 'in'>): void => {
    setAlertQueue(prevAlertQueue => [
      {
        message,
        variant,
        severity,
        autoClose,
        autoCloseDuration
      }, ...prevAlertQueue
    ]);
  }

  const removeAlert = (id: string): void => {
    setAlertList(prevAlertList => prevAlertList.filter(alert => alert.id !== id));
  }

  return (
    <AlertStackContext.Provider value={{
      maxAlerts,
      pushAlert,
      removeAlert
    }}>
      {props.children}
      <Box zIndex={1200} position={'fixed'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} alignItems={'flex-end'} top={8} right={8} role={'presentation'}>
        {
          alertList.map((alertElement) => (
            <AlertElement key={alertElement.id} closeFunc={() => removeAlert(alertElement.id)} {...alertElement} />
          ))
        }
      </Box>
    </AlertStackContext.Provider>
  );
};

export default AlertStackContext;