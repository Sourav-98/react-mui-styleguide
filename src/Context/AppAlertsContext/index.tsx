import React, { useEffect, useState } from 'react';
import { AppAlertsContextProps } from "./AppAlertsContext";
import { AppAlert, fetchAppAlerts } from 'Services/alerts.service';
// import { v4 as uuid } from 'uuid';
import { useLocation } from 'react-router-dom';
import { Box, Collapse, Container, IconButton, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CloseIcon from '@mui/icons-material/Close';

let AppAlertsDefault: AppAlertsContextProps = {
  displayAlerts: () => { },
  fetchAlerts: async () => { },
  clearAlerts: () => { },
  loadAlerts: (_: Array<AppAlert>) => { }
}

const AppAlertsContext = React.createContext<AppAlertsContextProps>(AppAlertsDefault);

export const AppAlertsContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }): JSX.Element => {

  const [_bannerAlerts, setBannerAlertsList] = useState<Array<AppAlert>>([]);
  const [_bannerCurrentIndex, setBannerCurrentIndex] = useState(0);
  const [_popupAlertsQueue, setPopupAlertsQueue] = useState<Array<AppAlert>>([]);
  // const [isLoading, setLoading] = useState<boolean>(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setBannerAlertsList([])
    const abortController = new AbortController();
    // setLoading(true);
    fetchAppAlerts({
      signal: abortController.signal
    }).then((alerts) => {
      console.log('Alerts Fetched...');
      setBannerAlertsList(alerts.filter((alert) => alert.type === 'banner'));
      setPopupAlertsQueue(alerts.filter((alert) => alert.type === 'popup'));
      // setAppAlertsList(alerts);
    }).catch((err) => {

    }).finally(() => {
      // setLoading(false);
    })

    return () => {
      abortController.abort();
      setBannerCurrentIndex(0);
    }
  }, [pathname])

  const displayAlerts = () => { };
  const fetchAlerts = async () => {
    // setLoading(true);
    await fetchAppAlerts({
      signal: new AbortController().signal
    });
    // setLoading(false);
  }

  const clearAlerts = () => {
    // setAppAlertsList([]);
    setPopupAlertsQueue([]);
  }

  const loadAlerts = (alerts: Array<AppAlert>) => {
    setBannerAlertsList(alerts.filter((alert) => alert.type === 'banner'));
    setPopupAlertsQueue(alerts.filter((alert) => alert.type === 'popup'));
  };

  useEffect(() => {
    console.log(_bannerAlerts);
    console.log(_bannerCurrentIndex);
    console.log(_popupAlertsQueue);
  }, [_bannerAlerts, _bannerCurrentIndex, _popupAlertsQueue]);

  return (
    <AppAlertsContext.Provider value={{
      displayAlerts,
      fetchAlerts,
      clearAlerts,
      loadAlerts
    }}>
      <Collapse in={!!_bannerAlerts.length}>
        <Box display={'flex'} alignItems={'center'} sx={(theme) => ({
          backgroundColor: theme.palette.warning.main
        })}>
          <Box>
            <IconButton onClick={() => setBannerCurrentIndex(prev => prev - 1)} disabled={_bannerCurrentIndex === 0}>
              <ArrowBackIcon />
            </IconButton>
          </Box>
          <Box flexGrow={1} display={'flex'}>
            <Container maxWidth='md'>
            <Typography component={'div'} variant='subtitle2' fontWeight={700}>
              {`Alerts (${_bannerCurrentIndex + 1} of ${_bannerAlerts.length})`}
            </Typography>
            <Typography component={'div'} variant='body2' sx={{ minHeight: 70}}>
              {_bannerAlerts[_bannerCurrentIndex]?.content}
            </Typography>
            </Container>
          </Box>
          <Box>
            {
              _bannerCurrentIndex === _bannerAlerts.length - 1 ? (
                <IconButton onClick={() => setBannerAlertsList([])}>
                  <CloseIcon/>
                </IconButton>
              ) : (
                <IconButton onClick={() => setBannerCurrentIndex(prev => prev + 1)} disabled={_bannerCurrentIndex === _bannerAlerts.length - 1}>
                  <ArrowForwardIcon />
                </IconButton>
              )
            }
          </Box>
        </Box>
      </Collapse>
      {children}
    </AppAlertsContext.Provider>
  )
}

export default AppAlertsContext;
