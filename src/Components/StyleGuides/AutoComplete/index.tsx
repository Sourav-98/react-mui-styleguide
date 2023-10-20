import { Autocomplete, Box, Grid, TextField, Typography } from '@mui/material';
import { StationTypeAhead } from 'Shared/StationTypeAhead';

const AutoCompleteStyleGuide: React.FC = (): JSX.Element => {
  return (
    <>
      <Grid container spacing={2} p={2}>
        <Grid item xs={12}>
          <Typography variant='h6'>Outlined Autocomplete - Color Schemes</Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
          <Box display={'flex'} flexDirection={'column'}>
            <Typography variant='subtitle1' sx={(theme) => ({
              color: theme.palette.grey[600]
            })}>Disabled</Typography>
            <Autocomplete
              disabled
              options={[]}
              renderInput={(props) => <TextField {...props} placeholder='Disabled' />}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
          <Box display={'flex'} flexDirection={'column'}>
            <Typography variant='subtitle1'>{`Primary`}</Typography>
            <Autocomplete
              options={[]}
              renderInput={(props) => <TextField {...props} placeholder='Primary' />}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
          <Box display={'flex'} flexDirection={'column'}>
            <Typography variant='subtitle1'>{`Primary (with Error)`}</Typography>
            <Autocomplete
              options={[]}
              renderInput={(props) => <TextField error {...props} placeholder='Primary' />}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
          <Box display={'flex'} flexDirection={'column'}>
            <Typography variant='subtitle1'>{`Secondary`}</Typography>
            <Autocomplete
              options={[]}
              renderInput={(props) => <TextField color='secondary' {...props} placeholder='Secondary' />}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
          <Box display={'flex'} flexDirection={'column'}>
            <Typography variant='subtitle1'>{`Success`}</Typography>
            <Autocomplete
              options={[]}
              renderInput={(props) => <TextField color='success' {...props} placeholder='Success' />}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
          <Box display={'flex'} flexDirection={'column'}>
            <Typography variant='subtitle1'>{`Error`}</Typography>
            <Autocomplete
              options={[]}
              renderInput={(props) => <TextField color='error' {...props} placeholder='Error' />}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
          <Box display={'flex'} flexDirection={'column'}>
            <Typography variant='subtitle1'>{`Warning`}</Typography>
            <Autocomplete
              options={[]}
              renderInput={(props) => <TextField color='warning' {...props} placeholder='Warning' />}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
          <Box display={'flex'} flexDirection={'column'}>
            <Typography variant='subtitle1'>{`Info`}</Typography>
            <Autocomplete
              options={[]}
              renderInput={(props) => <TextField color='info' {...props} placeholder='Info' />}
            />
          </Box>
        </Grid>

      </Grid>
      <Box display='flex' flexDirection={'column'} p={2}>
        <Typography variant='h6'>Size: Medium</Typography>
        <Box display={'flex'} flexDirection={'row'}>
          <Autocomplete
            sx={{ m: 1, width: 200 }}
            options={[]}
            renderInput={(props) => <TextField {...props} placeholder='Outlined Autocomplete' />}
          />
          <Autocomplete
            sx={{ m: 1, width: 200 }}
            options={[]}
            renderInput={(props) => <TextField variant='filled' {...props} placeholder='Filled Autocomplete' />}
          />
          <Autocomplete
            sx={{ m: 1, width: 200 }}
            options={[]}
            renderInput={(props) => <TextField variant='standard' {...props} placeholder='Standard Autocomplete' />}
          />
        </Box>
        <Typography variant='h6'>Size: Small</Typography>
        <Box display={'flex'} flexDirection={'row'}>
          <Autocomplete
            size='small'
            sx={{ m: 1, width: 200 }}
            options={[]}
            renderInput={(props) => <TextField {...props} placeholder='Outlined Autocomplete' />}
          />
          <Autocomplete
            size='small'
            sx={{ m: 1, width: 200 }}
            options={[]}
            renderInput={(props) => <TextField variant='filled' {...props} placeholder='Filled Autocomplete' />}
          />
          <Autocomplete
            size='small'
            sx={{ m: 1, width: 200 }}
            options={[]}
            renderInput={(props) => <TextField variant='standard' {...props} placeholder='Standard Autocomplete' />}
          />
        </Box>
        <Typography variant='h6'>Station Type Ahead - Size : Medium</Typography>
        <Box display={'flex'} flexDirection={'row'} alignItems={'flex-end'}>
          <Box display={'flex'} flexDirection={'column'} m={1} width={150}>
            <Typography variant='subtitle2' fontSize={13}>
              Station Search Disabled
            </Typography>
            <StationTypeAhead disabled fullWidth placeholder='Station' />
          </Box>
          <Box display={'flex'} flexDirection={'column'} m={1} width={150}>
            <Typography variant='subtitle2' fontSize={13}>
              Station Search Primary
            </Typography>
            <StationTypeAhead fullWidth placeholder='Station' />
          </Box>
          <Box display={'flex'} flexDirection={'column'} m={1} width={150}>
            <Typography variant='subtitle2' fontSize={13}>{`Station Search Primary (Error)`}</Typography>
            <StationTypeAhead error fullWidth placeholder='Station' />
          </Box>
          <Box display={'flex'} flexDirection={'column'} m={1} width={150}>
            <Typography variant='subtitle2' fontSize={13}>
              Station Search Secondary
            </Typography>
            <StationTypeAhead color='secondary' fullWidth placeholder='Station' />
          </Box>
          <Box display={'flex'} flexDirection={'column'} m={1} width={150}>
            <Typography variant='subtitle2' fontSize={13}>
              Station Search Success
            </Typography>
            <StationTypeAhead color='success' fullWidth placeholder='Station' />
          </Box>
          <Box display={'flex'} flexDirection={'column'} m={1} width={150}>
            <Typography variant='subtitle2' fontSize={13}>
              Station Search Error
            </Typography>
            <StationTypeAhead color='error' fullWidth placeholder='Station' />
          </Box>
          <Box display={'flex'} flexDirection={'column'} m={1} width={150}>
            <Typography variant='subtitle2' fontSize={13}>
              Station Search Warning - Filled
            </Typography>
            <StationTypeAhead variant='filled' color='warning' fullWidth placeholder='Station' />
          </Box>
          <Box display={'flex'} flexDirection={'column'} m={1} width={150}>
            <Typography variant='subtitle2' fontSize={13}>
              Station Search Info - Standard
            </Typography>
            <StationTypeAhead variant='standard' color='info' fullWidth placeholder='Station' />
          </Box>
        </Box>
        <Typography variant='h6'>Station Type Ahead - Size : Small</Typography>
        <Box display={'flex'} flexDirection={'row'} alignItems={'flex-end'}>
          <Box display={'flex'} flexDirection={'column'} m={1} width={150}>
            <Typography variant='subtitle2' fontSize={13}>
              Station Search Disabled
            </Typography>
            <StationTypeAhead size='small' disabled fullWidth placeholder='Station' />
          </Box>
          <Box display={'flex'} flexDirection={'column'} m={1} width={150}>
            <Typography variant='subtitle2' fontSize={13}>
              Station Search Primary
            </Typography>
            <StationTypeAhead size='small' fullWidth placeholder='Station' />
          </Box>
          <Box display={'flex'} flexDirection={'column'} m={1} width={150}>
            <Typography variant='subtitle2' fontSize={13}>{`Station Search Primary (Error)`}</Typography>
            <StationTypeAhead size='small' error fullWidth placeholder='Station' />
          </Box>
          <Box display={'flex'} flexDirection={'column'} m={1} width={150}>
            <Typography variant='subtitle2' fontSize={13}>
              Station Search Secondary
            </Typography>
            <StationTypeAhead size='small' color='secondary' fullWidth placeholder='Station' />
          </Box>
          <Box display={'flex'} flexDirection={'column'} m={1} width={150}>
            <Typography variant='subtitle2' fontSize={13}>
              Station Search Success
            </Typography>
            <StationTypeAhead size='small' color='success' fullWidth placeholder='Station' />
          </Box>
          <Box display={'flex'} flexDirection={'column'} m={1} width={150}>
            <Typography variant='subtitle2' fontSize={13}>
              Station Search Error
            </Typography>
            <StationTypeAhead size='small' color='error' fullWidth placeholder='Station' />
          </Box>
          <Box display={'flex'} flexDirection={'column'} m={1} width={150}>
            <Typography variant='subtitle2' fontSize={13}>
              Station Search Warning - Filled
            </Typography>
            <StationTypeAhead variant='filled' size='small' color='warning' fullWidth placeholder='Station' />
          </Box>
          <Box display={'flex'} flexDirection={'column'} m={1} width={150}>
            <Typography variant='subtitle2' fontSize={13}>
              Station Search Info - Standard
            </Typography>
            <StationTypeAhead variant='standard' size='small' color='info' fullWidth placeholder='Station' />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default AutoCompleteStyleGuide;
