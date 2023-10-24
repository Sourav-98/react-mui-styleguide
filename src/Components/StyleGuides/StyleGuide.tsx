import {
  AppBar,
  Box,
  CircularProgress,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Switch,
  Toolbar,
  Typography,
} from '@mui/material';
import { Suspense, useContext, useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { ThemeContext } from 'Context/ThemeContext';

const StyleGuide: React.FC = (): JSX.Element => {
  const themeContext = useContext(ThemeContext);

  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

  const { pathname } = useLocation();

  useEffect(() => {
    console.log('StyleGuide rendered - Onetime useEffect...');
  }, []);

  useEffect(() => {
    console.log('StyleGuide rendered - All time useEffect...');
  });

  useEffect(() => {
    setDrawerOpen(false);
  }, [pathname]);

  return (
    <>
      <AppBar position='sticky' sx={{ mb: 2 }}>
        <Toolbar>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ mr: 2 }}
            onClick={() => setDrawerOpen(() => true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            {pathname.includes('/textfield')
              ? 'TextField Styles'
              : pathname.includes('/select')
              ? 'Select Styles'
              : pathname.includes('/autocomplete')
              ? 'Autocomplete Styles'
              : pathname.includes('/button')
              ? 'Buttons Styles'
              : pathname.includes('/formik')
              ? 'Formik Forms Styles'
              : pathname.includes('/datepicker')
              ? 'DatePicker Styles'
              : ''}
          </Typography>
          <Box
            sx={{
              marginLeft: 'auto',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Typography variant='subtitle2'>Light</Typography>
            <Switch checked={themeContext.darkMode} onClick={themeContext.toggleDarkMode} />
            <Typography variant='subtitle2'>Dark</Typography>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer anchor={'left'} open={drawerOpen} onClose={() => setDrawerOpen(() => false)}>
        <List>
          <ListItem sx={{ color: 'inherit' }} component={Link} to='./autocomplete'>
            <ListItemText sx={{ color: 'inherit' }}>AutoComplete StyleGuide</ListItemText>
          </ListItem>
          <ListItem sx={{ color: 'inherit' }} component={Link} to='./textfield'>
            <ListItemText sx={{ color: 'inherit' }}>TextFields StyleGuide</ListItemText>
          </ListItem>
          <ListItem sx={{ color: 'inherit' }} component={Link} to='./select'>
            <ListItemText sx={{ color: 'inherit' }}>Select StyleGuide</ListItemText>
          </ListItem>
          <ListItem sx={{ color: 'inherit' }} component={Link} to='./button'>
            <ListItemText sx={{ color: 'inherit' }}>Button StyleGuide</ListItemText>
          </ListItem>
          <ListItem sx={{ color: 'inherit' }} component={Link} to='./datepicker'>
            <ListItemText sx={{ color: 'inherit' }}>DatePicker StyleGuide</ListItemText>
          </ListItem>
          <ListItem sx={{ color: 'inherit' }} component={Link} to='./formik'>
            <ListItemText sx={{ color: 'inherit' }}>Formik StyleGuide</ListItemText>
          </ListItem>
        </List>
      </Drawer>
      <Suspense
        fallback={
          <Box
            sx={{
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <CircularProgress />
          </Box>
        }
      >
        <Outlet />
      </Suspense>
    </>
  );
};

export default StyleGuide;
