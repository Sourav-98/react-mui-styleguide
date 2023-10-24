import { Autocomplete, Box, Grid, TextField, Typography } from '@mui/material';
import { StationTypeAhead } from 'Shared/StationTypeAhead';

const AutoCompleteStyleGuide: React.FC = (): JSX.Element => {
  return (
    <Grid container spacing={2} p={2}>
      <Grid item xs={12}>
        <Typography variant='h5'>Outlined Autocomplete - Color Schemes</Typography>
      </Grid>
      <Grid item xs={6}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3}>
            <Box display={'flex'} flexDirection={'column'}>
              <Typography variant='subtitle1' fontSize={13} sx={(theme) => ({
                color: theme.palette.grey[600]
              })}>Disabled</Typography>
              <Autocomplete
                disabled
                options={[]}
                renderInput={(props) => <TextField {...props} placeholder='Disabled' />}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box display={'flex'} flexDirection={'column'}>
              <Typography variant='subtitle1' fontSize={13}>{`Primary`}</Typography>
              <Autocomplete
                options={[]}
                renderInput={(props) => <TextField {...props} placeholder='Primary' />}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box display={'flex'} flexDirection={'column'}>
              <Typography variant='subtitle1' fontSize={13}>{`Field Error`}</Typography>
              <Autocomplete
                options={[]}
                renderInput={(props) => <TextField error {...props} placeholder='Primary' />}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box display={'flex'} flexDirection={'column'}>
              <Typography variant='subtitle1' fontSize={13}>{`Secondary`}</Typography>
              <Autocomplete
                options={[]}
                renderInput={(props) => <TextField color='secondary' {...props} placeholder='Secondary' />}
              />
            </Box>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={6}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3}>
            <Box display={'flex'} flexDirection={'column'}>
              <Typography variant='subtitle1' fontSize={13}>{`Success`}</Typography>
              <Autocomplete
                options={[]}
                renderInput={(props) => <TextField color='success' {...props} placeholder='Success' />}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box display={'flex'} flexDirection={'column'}>
              <Typography variant='subtitle1' fontSize={13}>{`Error`}</Typography>
              <Autocomplete
                options={[]}
                renderInput={(props) => <TextField color='error' {...props} placeholder='Error' />}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box display={'flex'} flexDirection={'column'}>
              <Typography variant='subtitle1' fontSize={13}>{`Warning`}</Typography>
              <Autocomplete
                options={[]}
                renderInput={(props) => <TextField color='warning' {...props} placeholder='Warning' />}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box display={'flex'} flexDirection={'column'}>
              <Typography variant='subtitle1' fontSize={13}>{`Info`}</Typography>
              <Autocomplete
                options={[]}
                renderInput={(props) => <TextField color='info' {...props} placeholder='Info' />}
              />
            </Box>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Typography variant='h5'>Variants and Sizes</Typography>
      </Grid>
      <Grid item xs={12} mb={2}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant='h6'>Size Medium</Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Box display={'flex'} flexDirection={'column'}>
                  <Typography variant='subtitle1' fontSize={13}>{`Outlined`}</Typography>
                  <Autocomplete
                    options={[]}
                    renderInput={(props) => <TextField {...props} placeholder='Outlined' />}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Box display={'flex'} flexDirection={'column'}>
                  <Typography variant='subtitle1' fontSize={13}>{`Filled`}</Typography>
                  <Autocomplete
                    options={[]}
                    renderInput={(props) => <TextField variant='filled' {...props} placeholder='Filled' />}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Box display={'flex'} flexDirection={'column'}>
                  <Typography variant='subtitle1' fontSize={13}>{`Standard`}</Typography>
                  <Autocomplete
                    options={[]}
                    renderInput={(props) => <TextField variant='standard' {...props} placeholder='Standard' />}
                  />
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant='h6'>Size Small</Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Box display={'flex'} flexDirection={'column'}>
                  <Typography variant='subtitle1' fontSize={13}>{`Outlined`}</Typography>
                  <Autocomplete
                    size='small'
                    options={[]}
                    renderInput={(props) => <TextField {...props} placeholder='Outlined' />}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Box display={'flex'} flexDirection={'column'}>
                  <Typography variant='subtitle1' fontSize={13}>{`Filled`}</Typography>
                  <Autocomplete
                    size='small'
                    options={[]}
                    renderInput={(props) => <TextField variant='filled' {...props} placeholder='Filled' />}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Box display={'flex'} flexDirection={'column'}>
                  <Typography variant='subtitle1' fontSize={13}>{`Standard`}</Typography>
                  <Autocomplete
                    size='small'
                    options={[]}
                    renderInput={(props) => <TextField variant='standard' {...props} placeholder='Standard' />}
                  />
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Typography variant='h5'>Station Search - Variants, Sizes and Color</Typography>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant='h6'>Size Medium</Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Typography variant='subtitle1' fontSize={13}>Outlined Disabled</Typography>
                <StationTypeAhead disabled fullWidth placeholder='Station' />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Typography variant='subtitle1' fontSize={13}>Outlined Primary</Typography>
                <StationTypeAhead fullWidth placeholder='Station' />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Typography variant='subtitle1' fontSize={13}>Filled Info</Typography>
                <StationTypeAhead variant='filled' color='info' fullWidth placeholder='Station' />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Typography variant='subtitle1' fontSize={13}>Standard Warning</Typography>
                <StationTypeAhead variant='standard' color='warning' fullWidth placeholder='Station' />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant='h6'>Size Small</Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Typography variant='subtitle1' fontSize={13}>Outlined Disabled</Typography>
                <StationTypeAhead size='small' disabled fullWidth placeholder='Station' />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Typography variant='subtitle1' fontSize={13}>Outlined Primary</Typography>
                <StationTypeAhead size='small' fullWidth placeholder='Station' />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Typography variant='subtitle1' fontSize={13}>Filled Info</Typography>
                <StationTypeAhead size='small' variant='filled' color='info' fullWidth placeholder='Station' />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Typography variant='subtitle1' fontSize={13}>Standard Warning</Typography>
                <StationTypeAhead size='small' variant='standard' color='warning' fullWidth placeholder='Station' />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AutoCompleteStyleGuide;
