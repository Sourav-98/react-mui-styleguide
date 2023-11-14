import './App.css';
import 'i18n/i18n';
import { RouterProvider } from 'react-router-dom';
import { mainRouterConfig } from './router.config';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { useContext } from 'react';
import { ThemeContext } from 'Context/ThemeContext';
import AppThemeOptions from 'Theme/AppTheme';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';

function App() {
  const themeContext = useContext(ThemeContext);

  const appTheme = createTheme(AppThemeOptions(themeContext.darkMode ? 'dark' : 'light'));

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <ThemeProvider theme={appTheme}>
        <CssBaseline />
        <RouterProvider router={mainRouterConfig}></RouterProvider>
      </ThemeProvider>
    </LocalizationProvider>
  );
}

export default App;
