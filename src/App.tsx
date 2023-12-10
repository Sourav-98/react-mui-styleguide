import { RouterProvider } from 'react-router-dom';
import { mainRouterConfig } from './router.config';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { Suspense, useContext, useEffect, useState } from 'react';
import { ThemeContext } from 'Context/ThemeContext';
import AppThemeOptions from 'Theme/AppTheme';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { useTranslation } from 'react-i18next';
import moment from 'moment';
import 'moment/locale/de';
import 'moment/locale/es'
// import 'moment/locale/en';

moment.locale('en', {
  // weekdaysMin : 'Di_Lu_Ma_Me_Je_Ve_Sa'.split('_'),
  // monthsShort: 'JAN_FEB_MAR_APR_MAY_JUN_JUL_AUG_SEPT_OCT_NOV_DEC'.split('_')
});

function App() {
  const themeContext = useContext(ThemeContext);
  const appTheme = createTheme(AppThemeOptions(themeContext.darkMode ? 'dark' : 'light'));
  const { i18n } = useTranslation();
  const [momentLocale, setMomentLocale] = useState<string>('en');

  useEffect(() => {
    switch(i18n.language) {
      case 'de_DE': moment.locale('de'); setMomentLocale('de'); break;
      case 'es_ES': moment.locale('es'); setMomentLocale('es'); break;
      case 'en_US': 
      default: moment.locale('en'); setMomentLocale('en'); break;
    }
  }, [i18n.language]);

  return (
    <Suspense fallback="...Loading...">
      <LocalizationProvider dateAdapter={AdapterMoment} adapterLocale={momentLocale}>
        <ThemeProvider theme={appTheme}>
          <CssBaseline />
          <RouterProvider router={mainRouterConfig}></RouterProvider>
        </ThemeProvider>
      </LocalizationProvider>
    </Suspense>
  );
}

export default App;
