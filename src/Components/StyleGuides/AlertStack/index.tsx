import { Box, Button, Grid, Switch, TextField, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";
import AlertStackContext from "Context/AlertStackContext";
import { useContext, useState } from "react";

const AlertStack: React.FC = (): JSX.Element => {
  const alertContext = useContext(AlertStackContext);

  const [message, setMessage] = useState<string>('Hello Alert Stack!!!');
  const [autoDismiss, setAutoDismiss] = useState<boolean>(true);
  const [autoDismissDuration, setAutoDismissDuration] = useState<string>('6500');
  const [variant, setVariant] = useState<'filled' | 'outlined' | 'standard'>('filled');
  const [severity, setSeverity] = useState<'error' | 'success' | 'info' | 'warning'>('info');
  const [alertCount, setAlertCount] = useState<string>('1');

  const genAlert = () => {
    for(let i=0; i< parseInt(alertCount); i++) {
      alertContext.pushAlert({
        message,
        autoClose: autoDismiss,
        autoCloseDuration: parseInt(autoDismissDuration),
        variant,
        severity
      })
    }
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant='h5'>{`Variant: Outlined`}</Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Box display={'flex'} flexDirection={'row'}>
          <Box display={'flex'} flexDirection={'column'} flexGrow={1}>
            <Typography variant='subtitle1'>{`Alert Message`}</Typography>
            <TextField placeholder='Please type in your alert message' value={message} onChange={(e) => setMessage(e.target.value)} />
          </Box>
          <Box display={'flex'} flexDirection={'column'} width={100}>
            <Typography variant='subtitle1'>{`Alert Count`}</Typography>
            <TextField placeholder='No. of alerts to be triggered' value={alertCount} onChange={(e) => e.target.value !== '' ? !isNaN(parseInt(e.target.value)) ? setAlertCount(e.target.value) : setAlertCount('') : setAlertCount('')} />
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Box display={'flex'} flexDirection={'row'}>
          <Box display={'flex'} flexDirection={'column'} mr={2}>
            <Typography variant='subtitle1'>{`Auto Dismiss: ${autoDismiss.valueOf()}`}</Typography>
            <Switch checked={autoDismiss} onChange={() => setAutoDismiss(p => !p)}></Switch>
          </Box>
          <Box display={'flex'} flexDirection={'column'}>
            <Typography variant='subtitle1'>{`Auto Dismiss Duration (ms)`}</Typography>
            <TextField placeholder='Auto Dismiss Duration (in ms)' value={autoDismissDuration} onChange={(e) => e.target.value !== '' ? !isNaN(parseInt(e.target.value)) ? setAutoDismissDuration(e.target.value) : setAutoDismissDuration('') : setAutoDismissDuration('')} />
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Box display={'flex'} flexDirection={'column'}>
          <Box display={'flex'} flexDirection={'row'} alignItems={'center'} mb={2}>
            <Typography variant='subtitle1' sx={{ mr: 1 }}>Variant</Typography>
            <ToggleButtonGroup
              size="small"
              value={variant}
              exclusive
              onChange={(e, _variant) => setVariant(_variant)}
              aria-label="text alignment"
            >
              <ToggleButton value="filled" aria-label="left aligned">
                Filled
              </ToggleButton>
              <ToggleButton value="outlined" aria-label="centered">
                Outlined
              </ToggleButton>
              <ToggleButton value="standard" aria-label="right aligned">
                Standard
              </ToggleButton>
            </ToggleButtonGroup>
          </Box>
          <Box display={'flex'} flexDirection={'row'} alignItems={'center'}>
            <Typography variant='subtitle1' sx={{ mr: 1 }}>Severity</Typography>
            <ToggleButtonGroup
              size="small"
              value={severity}
              exclusive
              onChange={(e, _severity) => setSeverity(_severity)}
              aria-label="text alignment"
            >
              <ToggleButton value="success" aria-label="left aligned">
                Success
              </ToggleButton>
              <ToggleButton value="error" aria-label="centered">
                Error
              </ToggleButton>
              <ToggleButton value="warning" aria-label="right aligned">
                Warning
              </ToggleButton>
              <ToggleButton value="info" aria-label="right aligned">
                Info
              </ToggleButton>
            </ToggleButtonGroup>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" onClick={genAlert}>
          Push Alert
        </Button>
      </Grid>
      
    </Grid>
  )
}

export default AlertStack;