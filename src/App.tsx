import './App.css';
import { RouterProvider } from 'react-router-dom';
import { mainRouterConfig } from './router.config';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { Suspense, useContext } from 'react';
import { ThemeContext } from 'Context/ThemeContext';
import AppThemeOptions from 'Theme/AppTheme';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';

function App() {
  const themeContext = useContext(ThemeContext);

  const appTheme = createTheme(AppThemeOptions(themeContext.darkMode ? 'dark' : 'light'));

  return (
    <Suspense fallback="...Loading...">
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <ThemeProvider theme={appTheme}>
          <CssBaseline />
          <RouterProvider router={mainRouterConfig}></RouterProvider>
        </ThemeProvider>
      </LocalizationProvider>
    </Suspense>
  );
}

export default App;
