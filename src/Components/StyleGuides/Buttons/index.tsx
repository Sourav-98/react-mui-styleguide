import { Button, Typography, Grid } from '@mui/material';
import AlertStackContext from 'Context/AlertStackContext';
import { useContext } from 'react';
// import { useTranslation } from 'react-i18next';

const ButtonStyleGuide: React.FC = (): JSX.Element => {
  // const { t } = useTranslation();
  const alertContext = useContext(AlertStackContext);

  return (
    <Grid container spacing={2} p={2}>
      <Grid item xs={12}>
        <Typography variant='h5'>{`Variant: Outlined`}</Typography>
      </Grid>
      <Grid item xs={6} sm={4} md={3} lg={2} xl={1}>
        <Button disabled variant='outlined' fullWidth>
          Disabled
        </Button>
      </Grid>
      <Grid item xs={6} sm={4} md={3} lg={2} xl={1}>
        <Button variant='outlined' fullWidth onClick={() => {
          alertContext.pushAlert({
            message: 'Hello world 1',
            // autoClose: false
          });
          alertContext.pushAlert({
            message: 'Hello world 2',
            // autoClose: false
          });
          alertContext.pushAlert({
            message: 'Hello world 3',
            // autoClose: false
          });
          alertContext.pushAlert({
            message: 'Hello world 4',
            // autoClose: false
          });
          alertContext.pushAlert({
            message: 'Hello world 5',
            // autoClose: false
          });
          alertContext.pushAlert({
            message: 'Hello world 6',
            // autoClose: false
          });
          alertContext.pushAlert({
            message: 'Hello world 7',
            // autoClose: false
          });
          alertContext.pushAlert({
            message: 'Hello world 8',
            // autoClose: false
          });
          alertContext.pushAlert({
            message: 'Hello world 9',
            // autoClose: false
          });
          alertContext.pushAlert({
            message: 'Hello world 10',
            // autoClose: false
          });
          alertContext.pushAlert({
            message: 'Hello world 11',
            // autoClose: false
          });
          alertContext.pushAlert({
            message: 'Hello world 12',
            // autoClose: false
          });
          alertContext.pushAlert({
            message: 'Hello world 13',
            // autoClose: false
          });
          alertContext.pushAlert({
            message: 'Hello world 14',
            // autoClose: false
          });
          alertContext.pushAlert({
            message: 'Hello world 15',
            // autoClose: false
          });
          alertContext.pushAlert({
            message: 'Hello world 16',
            // autoClose: false
          });
          alertContext.pushAlert({
            message: 'Hello world 17',
            // autoClose: false
          });
        }}>
          Primary
        </Button>
      </Grid>
      <Grid item xs={6} sm={4} md={3} lg={2} xl={1}>
        <Button variant='outlined' color='secondary' fullWidth>
          Secondary
        </Button>
      </Grid>
      <Grid item xs={6} sm={4} md={3} lg={2} xl={1}>
        <Button variant='outlined' color='error' fullWidth onClick={() => alertContext.pushAlert({
          message: 'Hello world Long Text Lorem Ipsum',
          severity: 'error'
        })}>
          Error
        </Button>
      </Grid>
      <Grid item xs={6} sm={4} md={3} lg={2} xl={1}>
        <Button variant='outlined' color='success' fullWidth>
          Success
        </Button>
      </Grid>
      <Grid item xs={6} sm={4} md={3} lg={2} xl={1}>
        <Button variant='outlined' color='warning' fullWidth>
          Warning
        </Button>
      </Grid>
      <Grid item xs={6} sm={4} md={3} lg={2} xl={1}>
        <Button variant='outlined' color='info' fullWidth>
          Info
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Typography variant='h5'>{`Variant: Contained`}</Typography>
      </Grid>
      <Grid item xs={6} sm={4} md={3} lg={2} xl={1}>
        <Button disabled variant='contained' fullWidth>
          Disabled
        </Button>
      </Grid>
      <Grid item xs={6} sm={4} md={3} lg={2} xl={1}>
        <Button variant='contained' fullWidth>
          Primary
        </Button>
      </Grid>
      <Grid item xs={6} sm={4} md={3} lg={2} xl={1}>
        <Button variant='contained' color='secondary' fullWidth>
          Secondary
        </Button>
      </Grid>
      <Grid item xs={6} sm={4} md={3} lg={2} xl={1}>
        <Button variant='contained' color='error' fullWidth>
          Error
        </Button>
      </Grid>
      <Grid item xs={6} sm={4} md={3} lg={2} xl={1}>
        <Button variant='contained' color='success' fullWidth>
          Success
        </Button>
      </Grid>
      <Grid item xs={6} sm={4} md={3} lg={2} xl={1}>
        <Button variant='contained' color='warning' fullWidth>
          Warning
        </Button>
      </Grid>
      <Grid item xs={6} sm={4} md={3} lg={2} xl={1}>
        <Button variant='contained' color='info' fullWidth>
          Info
        </Button>
      </Grid>
    </Grid>
  );
};

export default ButtonStyleGuide;
