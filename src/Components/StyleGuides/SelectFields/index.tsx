import { Box, MenuItem, Select } from "@mui/material"
import { useEffect } from "react";

const SelectFieldsStyleGuide: React.FC = (): JSX.Element => {

  useEffect(() => {
    console.log('SelectFieldsStyleGuide rendered - Onetime useEffect......');
  }, []);

  useEffect(() => {
    console.log('SelectFieldsStyleGuide rendered - All Time useEffect......');
  }, []);

  return (
    <Box>
      <Select
        sx={{ m: 1, width: 200 }}
        value={1}
      >
        <MenuItem value={1}>Outlined Select</MenuItem>
      </Select>
      <Select
        sx={{ m: 1, width: 200 }}
        variant="filled"
        value={1}
      >
        <MenuItem value={1}>Filled Select</MenuItem>
      </Select>
      <Select
        sx={{ m: 1, width: 200 }}
        variant="standard"
        value={1}
      >
        <MenuItem value={1}>Standard Select</MenuItem>
      </Select>
    </Box>
  )
}

export default SelectFieldsStyleGuide;
