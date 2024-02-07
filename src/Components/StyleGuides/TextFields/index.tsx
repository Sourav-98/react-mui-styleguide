import { Box, Grid, InputAdornment, TextField, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import InputField from 'Elements/Input/InputField';

const TextFieldStyleGuide: React.FC = (): JSX.Element => {

  const { t } = useTranslation(['common', 'textField']);

  return (
    <Grid container spacing={2} p={2}>
      <Grid item xs={12}>
        <Typography variant='h6'>{`${t('outlined')} ${t('textField:textField')} - ${t('textField:colorSchemes')}`}</Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} xl={1.5}>
        <Box display={'flex'} flexDirection={'column'}>
          <InputField
            label={t('textField:disabled')}
            disabled placeholder='Outlined Disabled'
          />
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} xl={1.5}>
        <Box display={'flex'} flexDirection={'column'}>
          <InputField
            label={t('textField:primary')}
            disabled placeholder='Outlined Primary'
          />
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} xl={1.5}>
        <Box display={'flex'} flexDirection={'column'}>
          <Typography variant='subtitle1'>{`Primary (with Error indicator)`}</Typography>
          <TextField error placeholder='Outlined Primary Error'/>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} xl={1.5}>
        <Box display={'flex'} flexDirection={'column'}>
          <Typography variant='subtitle1'>{`Secondary`}</Typography>
          <TextField color='secondary' placeholder='Outlined Secondary'/>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} xl={1.5}>
        <Box display={'flex'} flexDirection={'column'}>
          <Typography variant='subtitle1'>{`Success`}</Typography>
          <TextField color='success' placeholder='Outlined Success'/>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} xl={1.5}>
        <Box display={'flex'} flexDirection={'column'}>
          <Typography variant='subtitle1'>{`Error`}</Typography>
          <TextField color='error' placeholder='Outlined Error'/>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} xl={1.5}>
        <Box display={'flex'} flexDirection={'column'}>
          <Typography variant='subtitle1'>{`Warning`}</Typography>
          <TextField color='warning' placeholder='Outlined Warning'/>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} xl={1.5}>
        <Box display={'flex'} flexDirection={'column'}>
          <Typography variant='subtitle1'>{`Info`}</Typography>
          <TextField color='info' placeholder='Outlined Info'/>
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
          <TextField variant='filled' disabled placeholder='Filled Disabled'/>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} xl={1.5}>
        <Box display={'flex'} flexDirection={'column'}>
          <Typography variant='subtitle1'>{`Primary`}</Typography>
          <TextField variant='filled' placeholder='Filled Primary'/>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} xl={1.5}>
        <Box display={'flex'} flexDirection={'column'}>
          <Typography variant='subtitle1'>{`Primary (with Error indicator)`}</Typography>
          <TextField variant='filled' error placeholder='Filled Primary Error'/>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} xl={1.5}>
        <Box display={'flex'} flexDirection={'column'}>
          <Typography variant='subtitle1'>{`Secondary`}</Typography>
          <TextField variant='filled' color='secondary' placeholder='Filled Secondary'/>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} xl={1.5}>
        <Box display={'flex'} flexDirection={'column'}>
          <Typography variant='subtitle1'>{`Success`}</Typography>
          <TextField variant='filled' color='success' placeholder='Filled Success'/>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} xl={1.5}>
        <Box display={'flex'} flexDirection={'column'}>
          <Typography variant='subtitle1'>{`Error`}</Typography>
          <TextField variant='filled' color='error' placeholder='Filled Error'/>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} xl={1.5}>
        <Box display={'flex'} flexDirection={'column'}>
          <Typography variant='subtitle1'>{`Warning`}</Typography>
          <TextField variant='filled' color='warning' placeholder='Filled Warning'/>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} xl={1.5}>
        <Box display={'flex'} flexDirection={'column'}>
          <Typography variant='subtitle1'>{`Info`}</Typography>
          <TextField variant='filled' color='info' placeholder='Filled Info'/>
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
          <TextField variant='standard' disabled placeholder='Standard Disabled'/>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} xl={1.5}>
        <Box display={'flex'} flexDirection={'column'}>
          <Typography variant='subtitle1'>{`Primary`}</Typography>
          <TextField variant='standard' placeholder='Standard Primary'/>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} xl={1.5}>
        <Box display={'flex'} flexDirection={'column'}>
          <Typography variant='subtitle1'>{`Primary (with Error indicator)`}</Typography>
          <TextField variant='standard' error placeholder='Standard Primary Error'/>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} xl={1.5}>
        <Box display={'flex'} flexDirection={'column'}>
          <Typography variant='subtitle1'>{`Secondary`}</Typography>
          <TextField variant='standard' color='secondary' placeholder='Standard Secondary'/>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} xl={1.5}>
        <Box display={'flex'} flexDirection={'column'}>
          <Typography variant='subtitle1'>{`Success`}</Typography>
          <TextField variant='standard' color='success' placeholder='Standard Success'/>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} xl={1.5}>
        <Box display={'flex'} flexDirection={'column'}>
          <Typography variant='subtitle1'>{`Error`}</Typography>
          <TextField variant='standard' color='error' placeholder='Standard Error'/>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} xl={1.5}>
        <Box display={'flex'} flexDirection={'column'}>
          <Typography variant='subtitle1'>{`Warning`}</Typography>
          <TextField variant='standard' color='warning' placeholder='Standard Warning'/>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} xl={1.5}>
        <Box display={'flex'} flexDirection={'column'}>
          <Typography variant='subtitle1'>{`Info`}</Typography>
          <TextField variant='standard' color='info' placeholder='Standard Info'/>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Typography variant='h6'>Adornments</Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} xl={1.5}>
        <Box display={'flex'} flexDirection={'column'}>
          <Typography variant='subtitle1'>Text End Adornment</Typography>
          <TextField placeholder='Outlined' InputProps={{
            endAdornment: (
              <InputAdornment position='start'>$</InputAdornment>
            )
          }}/>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} xl={1.5}>
        <Box display={'flex'} flexDirection={'column'}>
          <Typography variant='subtitle1'>Icon End Adornment</Typography>
          <TextField placeholder='Outlined' InputProps={{
            endAdornment: (
              <InputAdornment position='start'>
                <AttachMoneyIcon/>
              </InputAdornment>
            )
          }}/>
        </Box>
      </Grid>
    </Grid>
  );
};

export default TextFieldStyleGuide;
