import { Autocomplete, Box, TextField, Typography } from "@mui/material"
import { useEffect } from "react";


const AutoCompleteStyleGuide: React.FC = (): JSX.Element => {

  useEffect(() => {
    console.log('AutoCompleteStyleGuide rendered - Onetime useEffect......');
  }, []);

  useEffect(() => {
    console.log('AutoCompleteStyleGuide rendered - All Time useEffect......');
  });

  return (
    <Box display='flex' flexDirection={'column'}>
      <Typography variant="h6">Size: Medium</Typography>
      <Box display={'flex'} flexDirection={'row'}>
        <Autocomplete
          sx={{ m: 1, width: 200 }}
          options={[]}
          renderInput={(props) => (<TextField {...props} placeholder="Outlined Autocomplete" />)}
        />
        <Autocomplete
          sx={{ m: 1, width: 200 }}
          options={[]}
          renderInput={(props) => (<TextField variant="filled" {...props} placeholder="Filled Autocomplete" />)}
        />
        <Autocomplete
          sx={{ m: 1, width: 200 }}
          options={[]}
          renderInput={(props) => (<TextField variant="standard" {...props} placeholder="Standard Autocomplete" />)}
        />
      </Box>
      <Typography variant="h6">Size: Small</Typography>
      <Box display={'flex'} flexDirection={'row'}>
        <Autocomplete
          size="small"
          sx={{ m: 1, width: 200 }}
          options={[]}
          renderInput={(props) => (<TextField {...props} placeholder="Outlined Autocomplete" />)}
        />
        <Autocomplete
          size="small"
          sx={{ m: 1, width: 200 }}
          options={[]}
          renderInput={(props) => (<TextField variant="filled" {...props} placeholder="Filled Autocomplete" />)}
        />
        <Autocomplete
          size="small"
          sx={{ m: 1, width: 200 }}
          options={[]}
          renderInput={(props) => (<TextField variant="standard" {...props} placeholder="Standard Autocomplete" />)}
        />
      </Box>
    </Box>

  )
}

export default AutoCompleteStyleGuide;