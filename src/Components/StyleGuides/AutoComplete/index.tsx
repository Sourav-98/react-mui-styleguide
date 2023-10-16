import { Autocomplete, Box, TextField, Typography } from '@mui/material'
import { StationTypeAhead } from 'Shared/StationTypeAhead';


const AutoCompleteStyleGuide: React.FC = (): JSX.Element => {

  return (
    <Box display='flex' flexDirection={'column'} p={2}>
      <Typography variant='h6'>Size: Medium</Typography>
      <Box display={'flex'} flexDirection={'row'}>
        <Autocomplete
          sx={{ m: 1, width: 200 }}
          options={[]}
          renderInput={(props) => (<TextField {...props} placeholder='Outlined Autocomplete' />)}
        />
        <Autocomplete
          sx={{ m: 1, width: 200 }}
          options={[]}
          renderInput={(props) => (<TextField variant='filled' {...props} placeholder='Filled Autocomplete' />)}
        />
        <Autocomplete
          sx={{ m: 1, width: 200 }}
          options={[]}
          renderInput={(props) => (<TextField variant='standard' {...props} placeholder='Standard Autocomplete' />)}
        />
      </Box>
      <Typography variant='h6'>Size: Small</Typography>
      <Box display={'flex'} flexDirection={'row'}>
        <Autocomplete
          size='small'
          sx={{ m: 1, width: 200 }}
          options={[]}
          renderInput={(props) => (<TextField {...props} placeholder='Outlined Autocomplete' />)}
        />
        <Autocomplete
          size='small'
          sx={{ m: 1, width: 200 }}
          options={[]}
          renderInput={(props) => (<TextField variant='filled' {...props} placeholder='Filled Autocomplete' />)}
        />
        <Autocomplete
          size='small'
          sx={{ m: 1, width: 200 }}
          options={[]}
          renderInput={(props) => (<TextField variant='standard' {...props} placeholder='Standard Autocomplete' />)}
        />
      </Box>
      <Typography variant='h6'>Station Type Ahead - Size : Medium</Typography>
      <Box display={'flex'} flexDirection={'row'}>
        <StationTypeAhead sx={{ m: 1, width: 200 }} placeholder='Station'/>
        <StationTypeAhead sx={{ m: 1, width: 200 }} color='secondary' placeholder='Station'/>
        <StationTypeAhead sx={{ m: 1, width: 200 }} color='success' placeholder='Station'/>
        <StationTypeAhead sx={{ m: 1, width: 200 }} color='error' placeholder='Station'/>
        <StationTypeAhead sx={{ m: 1, width: 200 }} color='warning' placeholder='Station'/>
        <StationTypeAhead sx={{ m: 1, width: 200 }} color='info' placeholder='Station'/>
      </Box>
      <Typography variant='h6'>Station Type Ahead - Size : Small</Typography>
      <Box display={'flex'} flexDirection={'row'}>
        <StationTypeAhead sx={{ m: 1, width: 200 }} size='small' placeholder='Station'/>
        <StationTypeAhead sx={{ m: 1, width: 200 }} size='small' color='secondary' placeholder='Station'/>
        <StationTypeAhead sx={{ m: 1, width: 200 }} size='small' color='success' placeholder='Station'/>
        <StationTypeAhead sx={{ m: 1, width: 200 }} size='small' color='error' placeholder='Station'/>
        <StationTypeAhead sx={{ m: 1, width: 200 }} size='small' color='warning' placeholder='Station'/>
        <StationTypeAhead sx={{ m: 1, width: 200 }} size='small' color='info' placeholder='Station'/>
      </Box>
    </Box>
  )
}

export default AutoCompleteStyleGuide;