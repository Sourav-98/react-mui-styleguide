import { AppBar, CircularProgress, Drawer, IconButton, List, ListItem, ListItemText, Toolbar, Typography } from "@mui/material";
import { Suspense, useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";

const StyleGuide: React.FC = (): JSX.Element => {

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
      <AppBar position="sticky" sx={{ mb: 2 }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => setDrawerOpen(() => true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {
              pathname.includes('/textfield') ? 'TextField Styles' : pathname.includes('/select') ? 'Select Styles' : pathname.includes('/autocomplete') ? 'Autocomplete Styles' : ''
            }
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor={'left'}
        open={drawerOpen}
        onClose={() => setDrawerOpen(() => false)}
      >
        <List>
          <ListItem component={Link} to='./autocomplete'>
            <ListItemText>AutoComplete StyleGuide</ListItemText>
          </ListItem>
          <ListItem component={Link} to='./textfield'>
            <ListItemText>TextFields StyleGuide</ListItemText>
          </ListItem>
          <ListItem component={Link} to='./select'>
            <ListItemText>Select StyleGuide</ListItemText>
          </ListItem>
        </List>
      </Drawer>
      <Suspense fallback={<CircularProgress />}>
        <Outlet />
      </Suspense>
    </>
  )
}

export default StyleGuide;