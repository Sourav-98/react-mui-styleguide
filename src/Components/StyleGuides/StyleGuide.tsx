import {
  AppBar,
  Box,
  CircularProgress,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Toolbar,
  Tooltip,
  Typography
} from '@mui/material';
import { Suspense, useContext, useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { ThemeContext } from 'Context/ThemeContext';
import { DarkModeSwitch } from 'Elements/Switch';
import { useTranslation } from 'react-i18next';

const StyleGuide: React.FC = (): JSX.Element => {
  const { t } = useTranslation();
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
            <Tooltip arrow title={`Switch to ${themeContext.darkMode ? 'Light' : 'Dark'} Mode`}>
              <Box>
                <DarkModeSwitch aria-label='Toggle Preview Mode' checked={themeContext.darkMode} onClick={themeContext.toggleDarkMode} />
              </Box>
            </Tooltip>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer anchor={'left'} open={drawerOpen} onClose={() => setDrawerOpen(() => false)}>
        <List>
          <ListItemButton sx={{ color: 'inherit' }} component={Link} to='./autocomplete' selected={pathname.includes('/autocomplete')}>
            <ListItemText sx={{ color: 'inherit' }}>{`AutoComplete ${t('styleGuide')}`}</ListItemText>
          </ListItemButton>
          <ListItemButton sx={{ color: 'inherit' }} component={Link} to='./textfield' selected={pathname.includes('/textfield')}>
            <ListItemText sx={{ color: 'inherit' }}>{`${t('textField')} ${t('styleGuide')}`}</ListItemText>
          </ListItemButton>
          <ListItemButton sx={{ color: 'inherit' }} component={Link} to='./select' selected={pathname.includes('/select')}>
            <ListItemText sx={{ color: 'inherit' }}>{`${t('select')} ${t('styleGuide')}`}</ListItemText>
          </ListItemButton>
          <ListItemButton sx={{ color: 'inherit' }} component={Link} to='./button' selected={pathname.includes('/button')}>
            <ListItemText sx={{ color: 'inherit' }}>{`${t('button')} ${t('styleGuide')}`}</ListItemText>
          </ListItemButton>
          <ListItemButton sx={{ color: 'inherit' }} component={Link} to='./datepicker' selected={pathname.includes('/datepicker')}>
            <ListItemText sx={{ color: 'inherit' }}>{`${t('datePicker')} ${t('styleGuide')}`}</ListItemText>
          </ListItemButton>
          <ListItemButton sx={{ color: 'inherit' }} component={Link} to='./formik' selected={pathname.includes('/formik')}>
            <ListItemText sx={{ color: 'inherit' }}>{`Formik ${t('styleGuide')}`}</ListItemText>
          </ListItemButton>
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
        <Box width={'100%'} p={1} display={'flex'} flexDirection={'column'}>
          <Outlet />
        </Box>
      </Suspense>
    </>
  );
};

export default StyleGuide;
