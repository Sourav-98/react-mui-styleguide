import { Box, Typography } from '@mui/material';
import XDatePicker from 'Elements/DatePickers/XDatePicker';
import moment from 'moment';

const DatePickerStyleGuide: React.FC = (): JSX.Element => {
  return (
    <Box display={'flex'} flexDirection={'column'}>
      <Box display={'flex'} flexDirection={'row'}>
        <Box display={'flex'} flexDirection={'column'} m={1} width={170}>
          <Typography variant='subtitle2' fontSize={13}>
            DatePicker Outlined
          </Typography>
          <XDatePicker disabled value=''/>
        </Box>
        <Box display={'flex'} flexDirection={'column'} m={1} width={170}>
          <Typography variant='subtitle2' fontSize={13}>
            DatePicker Outlined
          </Typography>
          <XDatePicker value={'2343'} />
        </Box>
        <Box display={'flex'} flexDirection={'column'} m={1} width={170}>
          <Typography variant='subtitle2' fontSize={13}>
            DatePicker Filled
          </Typography>
          <XDatePicker variant='filled' value=''/>
        </Box>
        <Box display={'flex'} flexDirection={'column'} m={1} width={170}>
          <Typography variant='subtitle2' fontSize={13}>
            DatePicker Standard
          </Typography>
          <XDatePicker variant='standard' value=''/>
        </Box>
      </Box>
    </Box>
  );
};

export default DatePickerStyleGuide;
