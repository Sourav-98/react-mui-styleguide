import { Box, MenuItem, Select, Typography } from '@mui/material';

const SelectFieldsStyleGuide: React.FC = (): JSX.Element => {

  return (
    <Box display='flex' flexDirection={'column'} p={2}>
      <Typography variant='h6'>Size: Medium</Typography>
      <Box display={'flex'} flexDirection={'row'}>
        <Select
          sx={{ m: 1, width: 200 }}
          value={1}
        >
          <MenuItem value={1}>Outlined Select</MenuItem>
        </Select>
        <Select
          sx={{ m: 1, width: 200 }}
          variant='filled'
          value={1}
        >
          <MenuItem value={1}>Filled Select</MenuItem>
        </Select>
        <Select
          sx={{ m: 1, width: 200 }}
          variant='standard'
          value={1}
        >
          <MenuItem value={1}>Standard Select</MenuItem>
        </Select>
      </Box>
      <Typography variant='h6'>Size: Small</Typography>
      <Box display={'flex'} flexDirection={'row'}>
        <Select
          size='small'
          sx={{ m: 1, width: 200 }}
          value={1}
        >
          <MenuItem value={1}>Outlined Select</MenuItem>
        </Select>
        <Select
          size='small'
          sx={{ m: 1, width: 200 }}
          variant='filled'
          value={1}
        >
          <MenuItem value={1}>Filled Select</MenuItem>
        </Select>
        <Select
          size='small'
          sx={{ m: 1, width: 200 }}
          variant='standard'
          value={1}
        >
          <MenuItem value={1}>Standard Select</MenuItem>
        </Select>
      </Box>
    </Box>
  )
}

export default SelectFieldsStyleGuide;
