import { Box, Button, Typography } from '@mui/material';

const ButtonStyleGuide: React.FC = (): JSX.Element => {
  return (
    <Box display={'flex'} flexDirection={'column'} p={2}>
      <Typography variant='h6'>{`Variant: Outlined`}</Typography>
      <Box display={'flex'} flexDirection={'row'}>
        <Button disabled variant='outlined' sx={{ m: 1, width: 150 }}>
          Disabled
        </Button>
        <Button variant='outlined' sx={{ m: 1, width: 150 }}>
          Primary
        </Button>
        <Button variant='outlined' color='secondary' sx={{ m: 1, width: 150 }}>
          Secondary
        </Button>
        <Button variant='outlined' color='error' sx={{ m: 1, width: 150 }}>
          Error
        </Button>
        <Button variant='outlined' color='success' sx={{ m: 1, width: 150 }}>
          Success
        </Button>
        <Button variant='outlined' color='warning' sx={{ m: 1, width: 150 }}>
          Warning
        </Button>
        <Button variant='outlined' color='info' sx={{ m: 1, width: 150 }}>
          Info
        </Button>
      </Box>
      <Typography variant='h6'>{`Variant: Contained`}</Typography>
      <Box display={'flex'} flexDirection={'row'}>
        <Button disabled variant='contained' sx={{ m: 1, width: 150 }}>
          Disabled
        </Button>
        <Button variant='contained' sx={{ m: 1, width: 150 }}>
          Primary
        </Button>
        <Button variant='contained' color='secondary' sx={{ m: 1, width: 150 }}>
          Secondary
        </Button>
        <Button variant='contained' color='error' sx={{ m: 1, width: 150 }}>
          Error
        </Button>
        <Button variant='contained' color='success' sx={{ m: 1, width: 150 }}>
          Success
        </Button>
        <Button variant='contained' color='warning' sx={{ m: 1, width: 150 }}>
          Warning
        </Button>
        <Button variant='contained' color='info' sx={{ m: 1, width: 150 }}>
          Info
        </Button>
      </Box>
    </Box>
  );
};

export default ButtonStyleGuide;
