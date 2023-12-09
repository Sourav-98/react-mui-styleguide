
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

  const [alertList, setAlertList] = useState<Array<AlertMessage>>([]);

  useEffect(() => {
    /** To restrict the number of alerts displated to the max limit set */
    if(alertList.length === maxAlerts+1){
      removeAlert(alertList[maxAlerts].id);
    }
}, [alertList, maxAlerts])

  /**
   * This will keep a record of alert message ids with their respective timeouts
   */
  const alertAutoCloseTimeoutRegister: MutableRefObject<Record<string, NodeJS.Timeout>> = useRef({
    '_': setTimeout(() => {}, 0)
  });

  const pushAlert = ({ message = '', variant = 'filled', severity = 'info', autoClose = true, autoCloseDuration = 6500 }: Omit<AlertMessage, 'id' | 'in'>): void => {
    let id: string = uuid();
    setAlertList(prevAlertsList => [
      {
        id: id,
        message: message,
        variant: variant,
        severity: severity,
        autoClose: autoClose,
        autoCloseDuration: autoCloseDuration
      }, ...prevAlertsList
    ]);
    setTimeout(() => {
      setAlertList((prevAlertList) => {
        let tempAlerts = [...prevAlertList];
        tempAlerts[0].in = true;
        return tempAlerts;
      });
      if(autoClose) {
        alertAutoCloseTimeoutRegister.current[id] = setTimeout(() => removeAlert(id), autoCloseDuration);
      }
    }, 50);
  }

  const removeAlert = (id: string): void => {
    setAlertList((prevAlertList) => prevAlertList.map((alertElement) => ({
      ...alertElement,
      in: alertElement.id === id ? false : true
    })));
    setTimeout(() => {
      delete alertAutoCloseTimeoutRegister.current[id];
      setAlertList(prevAlertList => prevAlertList.filter(alert => alert.id !== id));
    }, 150);
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