import { Autocomplete, Box, Grid, Paper, TextField, Typography } from '@mui/material';
import InputField from 'Elements/Input/InputField';
import { MultiSelectStationTypeAhead } from 'Shared/MultiSelectStationTypeAhead';
import { StationTypeAhead } from 'Shared/StationTypeAhead';
import { useTranslation } from 'react-i18next';

const AutoCompleteStyleGuide: React.FC = (): JSX.Element => {

  const { t } = useTranslation();

  return (
    <>
      <Paper sx={{
        display: 'flex'
      }}>
        <Grid container spacing={2} p={2}>
          <Grid item xs={12}>
            <Typography variant='h5'>{`${t('outlined')} AutoComplete - ${t('color')}`}</Typography>
          </Grid>
          <Grid item xs={6} sm={3} md={1.5}>
            <Autocomplete
              noOptionsText={`${t('noOptions')}`}
              disabled
              options={[]}
              renderInput={(props) => <InputField label="Disabled" {...props} placeholder='Disabled' />}
            />
          </Grid>
          <Grid item xs={6} sm={3} md={1.5}>
            <Autocomplete
              noOptionsText={`${t('noOptions')}`}
              options={[]}
              renderInput={(props) => <InputField label={t('primary')} required {...props} placeholder='Primary' />}
            />
          </Grid>
          <Grid item xs={6} sm={3} md={1.5}>
            <Autocomplete
              noOptionsText={`${t('noOptions')}`}
              options={[]}
              renderInput={(props) => <InputField label={'Field Error'} error {...props} placeholder='Primary' />}
            />
          </Grid>
          <Grid item xs={6} sm={3} md={1.5}>
            <Box display={'flex'} flexDirection={'column'}>
              <Typography variant='subtitle1' fontSize={13}>{`${t('secondary')}`}</Typography>
              <Autocomplete
                noOptionsText={`${t('noOptions')}`}
                options={[]}
                renderInput={(props) => <TextField color='secondary' {...props} placeholder='Secondary' />}
              />
            </Box>
          </Grid>
          <Grid item xs={6} sm={3} md={1.5}>
            <Box display={'flex'} flexDirection={'column'}>
              <Typography variant='subtitle1' fontSize={13}>{`${t('success')}`}</Typography>
              <Autocomplete
                noOptionsText={`${t('noOptions')}`}
                options={[]}
                renderInput={(props) => <TextField color='success' {...props} placeholder='Success' />}
              />
            </Box>
          </Grid>
          <Grid item xs={6} sm={3} md={1.5}>
            <Box display={'flex'} flexDirection={'column'}>
              <Typography variant='subtitle1' fontSize={13}>{`${t('error')}`}</Typography>
              <Autocomplete
                noOptionsText={`${t('noOptions')}`}
                options={[]}
                renderInput={(props) => <TextField color='error' {...props} placeholder='Error' />}
              />
            </Box>
          </Grid>
          <Grid item xs={6} sm={3} md={1.5}>
            <Box display={'flex'} flexDirection={'column'}>
              <Typography variant='subtitle1' fontSize={13}>{`${t('warning')}`}</Typography>
              <Autocomplete
                noOptionsText={`${t('noOptions')}`}
                options={[]}
                renderInput={(props) => <TextField color='warning' {...props} placeholder='Warning' />}
              />
            </Box>
          </Grid>
          <Grid item xs={6} sm={3} md={1.5}>
            <Box display={'flex'} flexDirection={'column'}>
              <Typography variant='subtitle1' fontSize={13}>{`${t('info')}`}</Typography>
              <Autocomplete
                noOptionsText={`${t('noOptions')}`}
                options={[]}
                renderInput={(props) => <TextField color='info' {...props} placeholder='Info' />}
              />
            </Box>
          </Grid>
        </Grid>
      </Paper>
      <Paper sx={(theme) => ({
        display: 'flex',
        mt: theme.spacing(2)
      })}>
        <Grid container spacing={2} p={2}>
          <Grid item xs={12}>
            <Typography variant='h5'>{`AutoComplete - ${t('variantsAndSizes')}`}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant='h6'>{`${t('size')} - ${t('medium')}`}</Typography>
          </Grid>
          <Grid item xs={6} sm={3} md={1.5}>
            <Box display={'flex'} flexDirection={'column'}>
              <Typography variant='subtitle1' fontSize={13}>{`${t('outlined')}`}</Typography>
              <Autocomplete
                noOptionsText={`${t('noOptions')}`}
                options={[]}
                renderInput={(props) => <TextField {...props} placeholder={`${t('outlined')}`} />}
              />
            </Box>
          </Grid>
          <Grid item xs={6} sm={3} md={1.5}>
            <Box display={'flex'} flexDirection={'column'}>
              <Typography variant='subtitle1' fontSize={13}>{`Filled`}</Typography>
              <Autocomplete
                noOptionsText={`${t('noOptions')}`}
                options={[]}
                renderInput={(props) => <TextField variant='filled' {...props} placeholder='Filled' />}
              />
            </Box>
          </Grid>
          <Grid item xs={6} sm={3} md={1.5}>
            <Box display={'flex'} flexDirection={'column'}>
              <Typography variant='subtitle1' fontSize={13}>{`Standard`}</Typography>
              <Autocomplete
                noOptionsText={`${t('noOptions')}`}
                options={[]}
                renderInput={(props) => <TextField variant='standard' {...props} placeholder='Standard' />}
              />
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Typography variant='h6'>{`${t('size')} - ${t('small')}`}</Typography>
          </Grid>
          <Grid item xs={6} sm={3} md={1.5}>
            <Box display={'flex'} flexDirection={'column'}>
              <Typography variant='subtitle1' fontSize={13}>{`Outlined`}</Typography>
              <Autocomplete
                noOptionsText={`${t('noOptions')}`}
                size='small'
                options={[]}
                renderInput={(props) => <TextField {...props} placeholder='Outlined' />}
              />
            </Box>
          </Grid>
          <Grid item xs={6} sm={3} md={1.5}>
            <Box display={'flex'} flexDirection={'column'}>
              <Typography variant='subtitle1' fontSize={13}>{`Filled`}</Typography>
              <Autocomplete
                noOptionsText={`${t('noOptions')}`}
                size='small'
                options={[]}
                renderInput={(props) => <TextField variant='filled' {...props} placeholder='Filled' />}
              />
            </Box>
          </Grid>
          <Grid item xs={6} sm={3} md={1.5}>
            <Box display={'flex'} flexDirection={'column'}>
              <Typography variant='subtitle1' fontSize={13}>{`Standard`}</Typography>
              <Autocomplete
                noOptionsText={`${t('noOptions')}`}
                size='small'
                options={[]}
                renderInput={(props) => <TextField variant='standard' {...props} placeholder='Standard' />}
              />
            </Box>
          </Grid>
        </Grid>
      </Paper>
      <Paper sx={(theme) => ({
        display: 'flex',
        mt: theme.spacing(2)
      })}>
        <Grid container spacing={2} p={2}>
          <Grid item xs={12}>
            <Typography variant='h5'>{`${t('stationSearch')} - ${t('variantsSizesAndColor')}`}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant='h6'>{`${t('size')} - ${t('medium')}`}m</Typography>
          </Grid>
          <Grid item xs={6} sm={3} md={1.5}>
            <Typography variant='subtitle1' fontSize={13}>Outlined Disabled</Typography>
            <StationTypeAhead name="1" disabled fullWidth placeholder='Station' />
          </Grid>
          <Grid item xs={6} sm={3} md={1.5}>
            <Typography variant='subtitle1' fontSize={13}>Outlined</Typography>
            <StationTypeAhead name="1" fullWidth placeholder='Station' />
          </Grid>
          <Grid item xs={6} sm={3} md={1.5}>
            <Typography variant='subtitle1' fontSize={13}>Filled</Typography>
            <StationTypeAhead name="1" variant='filled' fullWidth placeholder='Station' />
          </Grid>
          <Grid item xs={6} sm={3} md={1.5}>
            <Typography variant='subtitle1' fontSize={13}>Standard</Typography>
            <StationTypeAhead name="1" variant='standard' fullWidth placeholder='Station' />
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography variant='subtitle1' fontSize={13}>Standard</Typography>
            <MultiSelectStationTypeAhead values={['MSP', 'ORD']} name="1" variant='standard' fullWidth placeholder='Station' />
          </Grid>
          <Grid item xs={12}>
            <Typography variant='h6'>{`${t('size')} - ${t('small')}`}</Typography>
          </Grid>
          <Grid item xs={6} sm={3} md={1.5}>
            <Typography variant='subtitle1' fontSize={13}>Outlined Disabled</Typography>
            <StationTypeAhead name="1" size='small' disabled fullWidth placeholder='Station' />
          </Grid>
          <Grid item xs={6} sm={3} md={1.5}>
            <Typography variant='subtitle1' fontSize={13}>Outlined Primary</Typography>
            <StationTypeAhead name="1" size='small' fullWidth placeholder='Station' />
          </Grid>
          <Grid item xs={6} sm={3} md={1.5}>
            <Typography variant='subtitle1' fontSize={13}>Filled</Typography>
            <StationTypeAhead name="2" size='small' variant='filled' fullWidth placeholder='Station' />
          </Grid>
          <Grid item xs={6} sm={3} md={1.5}>
            <StationTypeAhead name="1" label="Standard" size='small' variant='standard' value='MSP' fullWidth placeholder='Station' />
          </Grid>
        </Grid>
      </Paper>
      <Paper sx={{
        display: 'flex'
      }}>

      </Paper>
    </>
  );
};

export default AutoCompleteStyleGuide;
