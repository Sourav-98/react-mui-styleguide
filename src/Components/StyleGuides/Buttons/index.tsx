import { Button, Typography, Grid } from '@mui/material';
// import { useTranslation } from 'react-i18next';

const ButtonStyleGuide: React.FC = (): JSX.Element => {
  // const { t } = useTranslation();

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
        <Button variant='outlined' fullWidth>
          Primary
        </Button>
      </Grid>
      <Grid item xs={6} sm={4} md={3} lg={2} xl={1}>
        <Button variant='outlined' color='secondary' fullWidth>
          Secondary
        </Button>
      </Grid>
      <Grid item xs={6} sm={4} md={3} lg={2} xl={1}>
        <Button variant='outlined' color='error' fullWidth>
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
