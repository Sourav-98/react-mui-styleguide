import { Box, TextField } from "@mui/material";
import { useEffect } from "react";

const TextFieldStyleGuide: React.FC = (): JSX.Element => {

  useEffect(() => {
    console.log('TextFieldStyleGuide rendered - Onetime useEffect......');
  }, []);

  useEffect(() => {
    console.log('TextFieldStyleGuide rendered - All Time useEffect......');
  }, []);

  return (
    <Box display={'flex'} flexDirection={'column'} sx={{ p: 2 }}>
      <Box display={'flex'} flexDirection={'row'}>
        <TextField disabled sx={{ m: 1, width: 200 }} placeholder='Outlined Disabled'></TextField>
        <TextField sx={{ m: 1, width: 200 }} placeholder='Outlined Primary'></TextField>
        <TextField error sx={{ m: 1, width: 200 }} placeholder='Outlined Primary Error'></TextField>
        <TextField color="secondary" sx={{ m: 1, width: 200 }} placeholder='Outlined Secondary'></TextField>
        <TextField color="error" sx={{ m: 1, width: 200 }} placeholder='Outlined Error'></TextField>
        <TextField color="success" sx={{ m: 1, width: 200 }} placeholder='Outlined Success'></TextField>
        <TextField color="warning" sx={{ m: 1, width: 200 }} placeholder='Outlined Warning'></TextField>
        <TextField color="info" sx={{ m: 1, width: 200 }} placeholder='Outlined Info'></TextField>
      </Box>
      <Box display={'flex'} flexDirection={'row'}>
        <TextField variant="filled" disabled sx={{ m: 1, width: 200 }} placeholder='Filled Disabled'></TextField>
        <TextField variant="filled" sx={{ m: 1, width: 200 }} placeholder='Filled Primary'></TextField>
        <TextField variant="filled" error sx={{ m: 1, width: 200 }} placeholder='Filled Primary Error'></TextField>
        <TextField variant="filled" color="secondary" sx={{ m: 1, width: 200 }} placeholder='Filled Secondary'></TextField>
        <TextField variant="filled" color="error" sx={{ m: 1, width: 200 }} placeholder='Filled Error'></TextField>
        <TextField variant="filled" color="success" sx={{ m: 1, width: 200 }} placeholder='Filled Success'></TextField>
        <TextField variant="filled" color="warning" sx={{ m: 1, width: 200 }} placeholder='Filled Warning'></TextField>
        <TextField variant="filled" color="info" sx={{ m: 1, width: 200 }} placeholder='Filled Info'></TextField>
      </Box>
      <Box display={'flex'} flexDirection={'row'}>
        <TextField variant="standard" disabled sx={{ m: 1, width: 200 }} placeholder='Standard Disabled'></TextField>
        <TextField variant="standard" sx={{ m: 1, width: 200 }} placeholder='Standard Primary'></TextField>
        <TextField variant="standard" error sx={{ m: 1, width: 200 }} placeholder='Standard Primary Error'></TextField>
        <TextField variant="standard" color="secondary" sx={{ m: 1, width: 200 }} placeholder='Standard Secondary'></TextField>
        <TextField variant="standard" color="error" sx={{ m: 1, width: 200 }} placeholder='Standard Error'></TextField>
        <TextField variant="standard" color="success" sx={{ m: 1, width: 200 }} placeholder='Standard Success'></TextField>
        <TextField variant="standard" color="warning" sx={{ m: 1, width: 200 }} placeholder='Standard Warning'></TextField>
        <TextField variant="standard" color="info" sx={{ m: 1, width: 200 }} placeholder='Standard Info'></TextField>
      </Box>
    </Box>
  )
}

export default TextFieldStyleGuide;
