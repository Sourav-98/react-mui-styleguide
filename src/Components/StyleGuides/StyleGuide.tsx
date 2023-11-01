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
  SwitchProps,
  Toolbar,
  Tooltip,
  Typography,
  styled,
} from '@mui/material';
import { Suspense, useContext, useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { ThemeContext } from 'Context/ThemeContext';

const ThemeToggleSwitch = styled((props: SwitchProps) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 56,
  height: 30,
  padding: 0,
  margin: 8,
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 26,
    height: 26
  },
  '& .MuiSwitch-track': {
    borderRadius: 15,
    background: `linear-gradient(305deg, rgba(227,103,1,1) 0%, rgba(244,135,46,1) 61%, rgba(255,207,112,1) 100%)`,
    opacity: 1,
    transition: theme.transitions.create(['background'], {
      duration: 200,
    }),
    '&:before, &:after': {
      content: '""',
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      width: 22,
      height: 22,
    },
    '&:before': {
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="22" width="22" viewBox="0 0 26 26"><path fill="${encodeURIComponent(
        '#FFFFFF'
      )}" d="M14,2c1.82,0,3.53,0.5,5,1.35C16.01,5.08,14,8.3,14,12s2.01,6.92,5,8.65C17.53,21.5,15.82,22,14,22C8.48,22,4,17.52,4,12 S8.48,2,14,2z"/></svg>')`,
      left: 5,
    },
    '&:after': {
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="22" width="22" viewBox="0 0 26 26"><path fill="${encodeURIComponent(
        '#FFFFFF'
      )}" d="M12,7c-2.76,0-5,2.24-5,5s2.24,5,5,5s5-2.24,5-5S14.76,7,12,7L12,7z M2,13l2,0c0.55,0,1-0.45,1-1s-0.45-1-1-1l-2,0 c-0.55,0-1,0.45-1,1S1.45,13,2,13z M20,13l2,0c0.55,0,1-0.45,1-1s-0.45-1-1-1l-2,0c-0.55,0-1,0.45-1,1S19.45,13,20,13z M11,2v2 c0,0.55,0.45,1,1,1s1-0.45,1-1V2c0-0.55-0.45-1-1-1S11,1.45,11,2z M11,20v2c0,0.55,0.45,1,1,1s1-0.45,1-1v-2c0-0.55-0.45-1-1-1 C11.45,19,11,19.45,11,20z M5.99,4.58c-0.39-0.39-1.03-0.39-1.41,0c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06 c0.39,0.39,1.03,0.39,1.41,0s0.39-1.03,0-1.41L5.99,4.58z M18.36,16.95c-0.39-0.39-1.03-0.39-1.41,0c-0.39,0.39-0.39,1.03,0,1.41 l1.06,1.06c0.39,0.39,1.03,0.39,1.41,0c0.39-0.39,0.39-1.03,0-1.41L18.36,16.95z M19.42,5.99c0.39-0.39,0.39-1.03,0-1.41 c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06c-0.39,0.39-0.39,1.03,0,1.41s1.03,0.39,1.41,0L19.42,5.99z M7.05,18.36 c0.39-0.39,0.39-1.03,0-1.41c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06c-0.39,0.39-0.39,1.03,0,1.41s1.03,0.39,1.41,0L7.05,18.36z" /></svg>')`,
      right: 4,
    },
  },
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '200ms',
    '&.Mui-checked': {
      transform: 'translateX(26px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        background: `linear-gradient(45deg, rgba(25,45,82,1) 0%, rgba(65,150,241,1) 100%)`,
        opacity: 1,
        border: 0,
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: theme.palette.primary.main,
      border: '6px solid #fff',
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color:
        theme.palette.mode === 'light'
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
    },
  },
}));

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
            <Tooltip title={`Switch to ${themeContext.darkMode ? 'Light' : 'Dark'} Mode`}>
              <ThemeToggleSwitch aria-label='Toggle Preview Mode' checked={themeContext.darkMode} onClick={themeContext.toggleDarkMode} />
            </Tooltip>
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
          <ListItem sx={{ marginTop: 'auto', color: 'inherit' }} component={Link} to='/test'>
            <ListItemText sx={{ color: 'inherit' }}>Test Area</ListItemText>
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
