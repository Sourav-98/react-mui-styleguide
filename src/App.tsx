import './App.css';
import { RouterProvider } from 'react-router-dom';
import { mainRouterConfig } from './router.config';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { useContext } from 'react';
import { ThemeContext } from 'Context/ThemeContext';
import AppThemeOptions from 'Theme/AppTheme';

function App() {

  const themeContext = useContext(ThemeContext);

  const appTheme = createTheme(AppThemeOptions(themeContext.darkMode ? 'dark' : 'light'));

  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline />
      <RouterProvider router={mainRouterConfig}></RouterProvider>
    </ThemeProvider>
  )
}

export default App;
