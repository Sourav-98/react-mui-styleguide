
import React, { MutableRefObject, useEffect, useRef, useState } from 'react';
import { v4 as uuid } from 'uuid';
import { AlertContextProps, AlertMessage } from './AlertStackContext';
import { Alert, Box, Collapse, Grow, alertClasses } from '@mui/material';

let AlertsContextDefault = {
  maxAlerts: 6,
  pushAlert: (_: Omit<AlertMessage, 'id' | 'in'>): void => { },
  removeAlert: (_: string): void => { }
}

const AlertStackContext: React.Context<AlertContextProps> = React.createContext<AlertContextProps>(AlertsContextDefault);

export const AlertStackContextProvider: React.FC<{ maxAlerts: number, children: React.ReactNode }> = ({ maxAlerts, ...props }): JSX.Element => {

  const [alertQueue, setAlertQueue] = useState<Array<Omit<AlertMessage, 'id' | 'in'>>>([]);
  const [alertList, setAlertList] = useState<Array<AlertMessage>>([]);
  const [isNewAlertDispatched, setNewAlertDispatched] = useState<boolean>(false);
  /**
 * This will keep a record of alert message ids with their respective timeouts
 */
  const alertAutoCloseTimeoutRegister: MutableRefObject<Record<string, NodeJS.Timeout>> = useRef({
    '_': setTimeout(() => { }, 0)
  });

  useEffect(() => {
    if (alertQueue.length && !isNewAlertDispatched) {
      setNewAlertDispatched(true);
      // if the alert queue contains a message, then push the last message in the queue to the alertList for display (with a delay of 151ms).
      // remove that item from alert queue
      setTimeout(() => {
        setAlertList(prevAlertsList => [
          {
            id: uuid(),
            in: false,
            message: alertQueue[alertQueue.length - 1].message,
            variant: alertQueue[alertQueue.length - 1].variant,
            severity: alertQueue[alertQueue.length - 1].severity,
            autoClose: alertQueue[alertQueue.length - 1].autoClose,
            autoCloseDuration: alertQueue[alertQueue.length - 1].autoCloseDuration
          }, ...prevAlertsList
        ]);
        setNewAlertDispatched(false);
        setAlertQueue(prevAlertQueue => prevAlertQueue.slice(0, prevAlertQueue.length - 1));
      }, 150);
    }
  }, [alertQueue, isNewAlertDispatched]);

  useEffect(() => {
    if (alertList.length && isNewAlertDispatched) {
      if (alertList.length <= maxAlerts) {
        if (alertList[0].autoClose && !alertAutoCloseTimeoutRegister.current[alertList[0].id]) {
          alertAutoCloseTimeoutRegister.current[alertList[0].id] = setTimeout(() => removeAlert(alertList[0].id), alertList[0].autoCloseDuration);
        }
        if (!alertList[0].in) {
          setTimeout(() => {
            setAlertList((prevAlertList) => {
              let tempAlerts = [...prevAlertList];
              tempAlerts[0].in = true;
              return tempAlerts;
            });
            setNewAlertDispatched(false);
          }, 300);
        }
      } else {
        setTimeout(() => {
          setAlertList((prevAlertList) => {
            delete alertAutoCloseTimeoutRegister.current[prevAlertList[prevAlertList.length - 1].id];
            return prevAlertList.slice(0, prevAlertList.length - 1);
          });
        }, 50);
      }
    }
  }, [alertList, isNewAlertDispatched]);  // eslint-disable-line react-hooks/exhaustive-deps

  const pushAlert = ({ message = '', variant = 'filled', severity = 'info', autoClose = true, autoCloseDuration = 16500 }: Omit<AlertMessage, 'id' | 'in'>): void => {
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
    setAlertList((prevAlertList) => prevAlertList.map((alertElement) => ({
      ...alertElement,
      in: alertElement.id === id ? false : true
    })));
    setTimeout(() => {
      delete alertAutoCloseTimeoutRegister.current[id];
      setAlertList(prevAlertList => prevAlertList.filter(alert => alert.id !== id));
    }, 100);
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
            <Collapse sx={{
              alignContent: 'flex-end'
            }} key={alertElement.id} in={alertElement.in} timeout={{
              enter: 150,
              exit: 150
            }}>
              <Box maxWidth={310} display={'flex'} flexDirection={'column'} justifySelf={'flex-end'}>
                <Grow in={alertElement.in} timeout={{
                  enter: 300,
                  exit: 100
                }}>
                  <Alert
                    component={'div'}
                    variant={alertElement.variant}
                    severity={alertElement.severity}
                    sx={{
                      mb: 1,
                      [`& > .${alertClasses.message}`]: {
                        wordWrap: 'break-word'
                      }
                    }}
                    onClose={() => removeAlert(alertElement.id)}
                  >{alertElement.message}</Alert>
                </Grow>
              </Box>
            </Collapse>
          ))
        }
      </Box>
    </AlertStackContext.Provider>
  );
};

export default AlertStackContext;