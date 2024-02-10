import {
  AppBar,
  Box,
  CircularProgress,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Menu,
  MenuItem,
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
import TranslateIcon from '@mui/icons-material/Translate';

const StyleGuide: React.FC = (): JSX.Element => {
  const { t, i18n } = useTranslation();
  const themeContext = useContext(ThemeContext);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

  const { pathname } = useLocation();

  useEffect(() => {
    setDrawerOpen(false);
  }, [pathname]);

  return (
    <>
      <AppBar position='sticky' sx={{ mb: 2 }}>
        <Toolbar sx={{ width: '100%', display: 'flex' }}>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ mr: 1 }}
            onClick={() => setDrawerOpen(() => true)}
          >
            <MenuIcon />
          </IconButton>
          <Box display={'flex'} flexGrow={1} justifyContent={'space-between'} alignItems={'center'}>
            <Typography variant='h6' component='div'>
              {pathname.includes('/textfield')
                ? 'TextField'
                : pathname.includes('/select')
                  ? 'Select'
                  : pathname.includes('/autocomplete')
                    ? 'Autocomplete'
                    : pathname.includes('/button')
                      ? 'Buttons'
                      : pathname.includes('/formik')
                        ? 'Formik'
                        : pathname.includes('/datepicker')
                          ? 'DatePicker'
                          : pathname.includes('/alert-stack')
                            ? 'Alert Stack'
                            : ''}
            </Typography>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Typography variant='body2'>
                {t('welcomeText', { name: 'Sourav', count: 10})}
              </Typography>
              <Tooltip arrow title={`Switch to ${themeContext.darkMode ? 'Light' : 'Dark'} Mode`}>
                <Box>
                  <DarkModeSwitch size='small' aria-label='Toggle Preview Mode' checked={themeContext.darkMode} onClick={themeContext.toggleDarkMode} />
                </Box>
              </Tooltip>
              <Box>
                <IconButton
                  sx={{
                    color: 'white',
                    textTransform: 'none'
                  }}
                  onClick={(event) => setAnchorEl(event.currentTarget)}
                ><TranslateIcon /></IconButton>
                <Menu
                  id="language-toggle"
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={() => setAnchorEl(null)}
                  MenuListProps={{
                    'aria-labelledby': 'basic-button',
                    sx: {
                      pt: 0,
                      pb: 0
                    }
                  }}
                >
                  <MenuItem selected={i18n.language === 'en_US'} onClick={() => {
                    i18n.changeLanguage('en_US');
                    setAnchorEl(null)
                  }}>en-US</MenuItem>
                  <MenuItem selected={i18n.language === 'de_DE'} onClick={() => {
                    i18n.changeLanguage('de_DE');
                    setAnchorEl(null)
                  }}>de-DE</MenuItem>
                  <MenuItem selected={i18n.language === 'es_ES'} onClick={() => {
                    i18n.changeLanguage('es_ES');
                    setAnchorEl(null);
                  }}>es-ES</MenuItem>
                  <MenuItem selected={i18n.language === 'fr_FR'} onClick={() => {
                    i18n.changeLanguage('fr_FR');
                    setAnchorEl(null);
                  }}>fr-FR</MenuItem>
                </Menu>
              </Box>
            </Box>
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
          <ListItemButton sx={{ color: 'inherit' }} component={Link} to='./alert-stack' selected={pathname.includes('/alert-stack')}>
            <ListItemText sx={{ color: 'inherit' }}>{`Alert Stack`}</ListItemText>
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
