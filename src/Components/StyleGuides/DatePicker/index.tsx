import { Box, FormHelperText, Typography } from '@mui/material';
import TextFieldDatePicker from 'Elements/DatePickers/TextFieldDatePicker';

const DatePickerStyleGuide: React.FC = (): JSX.Element => {
  return (
    <Box display={'flex'} flexDirection={'column'}>
      <Box display={'flex'} flexDirection={'row'}>
        <Box display={'flex'} flexDirection={'column'} m={1} width={170}>
          <Typography variant='subtitle2' fontSize={13}>
            DatePicker Outlined
          </Typography>
          <TextFieldDatePicker />
        </Box>
        <Box display={'flex'} flexDirection={'column'} m={1} width={170}>
          <Typography variant='subtitle2' fontSize={13}>
            DatePicker Filled
          </Typography>
          <TextFieldDatePicker variant='filled' />
        </Box>
        <Box display={'flex'} flexDirection={'column'} m={1} width={170}>
          <Typography variant='subtitle2' fontSize={13}>
            DatePicker Standard
          </Typography>
          <TextFieldDatePicker variant='standard' />
        </Box>
      </Box>
    </Box>
  );
};

export default DatePickerStyleGuide;
