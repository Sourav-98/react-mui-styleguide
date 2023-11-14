import { Box, Grid, TextField, Typography } from '@mui/material';

const TextFieldStyleGuide: React.FC = (): JSX.Element => {
  return (
    <Grid container spacing={2} p={2}>
      <Grid item xs={12}>
        <Typography variant='h6'>Outlined Textbox - Color Schemes</Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} xl={1.5}>
        <Box display={'flex'} flexDirection={'column'}>
          <Typography variant='subtitle1' sx={(theme) => ({
            color: theme.palette.grey[600]
          })}>Disabled</Typography>
          <TextField disabled placeholder='Outlined Disabled'></TextField>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} xl={1.5}>
        <Box display={'flex'} flexDirection={'column'}>
          <Typography variant='subtitle1'>{`Primary`}</Typography>
          <TextField placeholder='Outlined Primary'></TextField>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} xl={1.5}>
        <Box display={'flex'} flexDirection={'column'}>
          <Typography variant='subtitle1'>{`Primary (with Error indicator)`}</Typography>
          <TextField error placeholder='Outlined Primary Error'></TextField>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} xl={1.5}>
        <Box display={'flex'} flexDirection={'column'}>
          <Typography variant='subtitle1'>{`Secondary`}</Typography>
          <TextField color='secondary' placeholder='Outlined Secondary'></TextField>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} xl={1.5}>
        <Box display={'flex'} flexDirection={'column'}>
          <Typography variant='subtitle1'>{`Success`}</Typography>
          <TextField color='success' placeholder='Outlined Success'></TextField>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} xl={1.5}>
        <Box display={'flex'} flexDirection={'column'}>
          <Typography variant='subtitle1'>{`Error`}</Typography>
          <TextField color='error' placeholder='Outlined Error'></TextField>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} xl={1.5}>
        <Box display={'flex'} flexDirection={'column'}>
          <Typography variant='subtitle1'>{`Warning`}</Typography>
          <TextField color='warning' placeholder='Outlined Warning'></TextField>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} xl={1.5}>
        <Box display={'flex'} flexDirection={'column'}>
          <Typography variant='subtitle1'>{`Info`}</Typography>
          <TextField color='info' placeholder='Outlined Info'></TextField>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Typography variant='h6'>Filled Textbox - Color Schemes</Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} xl={1.5}>
        <Box display={'flex'} flexDirection={'column'}>
          <Typography variant='subtitle1' sx={(theme) => ({
            color: theme.palette.grey[600]
          })}>Disabled</Typography>
          <TextField variant='filled' disabled placeholder='Filled Disabled'></TextField>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} xl={1.5}>
        <Box display={'flex'} flexDirection={'column'}>
          <Typography variant='subtitle1'>{`Primary`}</Typography>
          <TextField variant='filled' placeholder='Filled Primary'></TextField>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} xl={1.5}>
        <Box display={'flex'} flexDirection={'column'}>
          <Typography variant='subtitle1'>{`Primary (with Error indicator)`}</Typography>
          <TextField variant='filled' error placeholder='Filled Primary Error'></TextField>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} xl={1.5}>
        <Box display={'flex'} flexDirection={'column'}>
          <Typography variant='subtitle1'>{`Secondary`}</Typography>
          <TextField variant='filled' color='secondary' placeholder='Filled Secondary'></TextField>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} xl={1.5}>
        <Box display={'flex'} flexDirection={'column'}>
          <Typography variant='subtitle1'>{`Success`}</Typography>
          <TextField variant='filled' color='success' placeholder='Filled Success'></TextField>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} xl={1.5}>
        <Box display={'flex'} flexDirection={'column'}>
          <Typography variant='subtitle1'>{`Error`}</Typography>
          <TextField variant='filled' color='error' placeholder='Filled Error'></TextField>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} xl={1.5}>
        <Box display={'flex'} flexDirection={'column'}>
          <Typography variant='subtitle1'>{`Warning`}</Typography>
          <TextField variant='filled' color='warning' placeholder='Filled Warning'></TextField>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} xl={1.5}>
        <Box display={'flex'} flexDirection={'column'}>
          <Typography variant='subtitle1'>{`Info`}</Typography>
          <TextField variant='filled' color='info' placeholder='Filled Info'></TextField>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Typography variant='h6'>Standard Textbox - Color Schemes</Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} xl={1.5}>
        <Box display={'flex'} flexDirection={'column'}>
          <Typography variant='subtitle1' sx={(theme) => ({
            color: theme.palette.grey[600]
          })}>Disabled</Typography>
          <TextField variant='standard' disabled placeholder='Standard Disabled'></TextField>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} xl={1.5}>
        <Box display={'flex'} flexDirection={'column'}>
          <Typography variant='subtitle1'>{`Primary`}</Typography>
          <TextField variant='standard' placeholder='Standard Primary'></TextField>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} xl={1.5}>
        <Box display={'flex'} flexDirection={'column'}>
          <Typography variant='subtitle1'>{`Primary (with Error indicator)`}</Typography>
          <TextField variant='standard' error placeholder='Standard Primary Error'></TextField>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} xl={1.5}>
        <Box display={'flex'} flexDirection={'column'}>
          <Typography variant='subtitle1'>{`Secondary`}</Typography>
          <TextField variant='standard' color='secondary' placeholder='Standard Secondary'></TextField>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} xl={1.5}>
        <Box display={'flex'} flexDirection={'column'}>
          <Typography variant='subtitle1'>{`Success`}</Typography>
          <TextField variant='standard' color='success' placeholder='Standard Success'></TextField>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} xl={1.5}>
        <Box display={'flex'} flexDirection={'column'}>
          <Typography variant='subtitle1'>{`Error`}</Typography>
          <TextField variant='standard' color='error' placeholder='Standard Error'></TextField>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} xl={1.5}>
        <Box display={'flex'} flexDirection={'column'}>
          <Typography variant='subtitle1'>{`Warning`}</Typography>
          <TextField variant='standard' color='warning' placeholder='Standard Warning'></TextField>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} xl={1.5}>
        <Box display={'flex'} flexDirection={'column'}>
          <Typography variant='subtitle1'>{`Info`}</Typography>
          <TextField variant='standard' color='info' placeholder='Standard Info'></TextField>
        </Box>
      </Grid>
    </Grid>
  );
};

export default TextFieldStyleGuide;
