import { Container, Grid, InputAdornment, Paper, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import InputField from 'Elements/Input/InputField';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import LanguageIcon from '@mui/icons-material/Language';
import { ChargeCodeMask } from 'Utils/MaskedInputs';

const TextFieldStyleGuide: React.FC = (): JSX.Element => {

  const { t } = useTranslation(['common', 'textField']);

  return (
    <Container maxWidth={'md'}>
      <Paper sx={{ display: 'flex', p: 2 }}>
        <Grid container spacing={2} p={2}>
          <Grid item xs={12}>
            <Typography variant='h6'>{`Variants and Sizes`}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={6} md={4}>
                <InputField
                  label={`Outlined (Default)`}
                  placeholder='Outlined'
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <InputField
                  variant='filled'
                  label={`Filled`}
                  placeholder='Filled'
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <InputField
                  variant='standard'
                  label={`Standard`}
                  placeholder='Standard'
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={6} md={4}>
                <InputField
                  size='small'
                  label={`Outlined (Default) - Small`}
                  placeholder='Outlined'
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <InputField
                  size='small'
                  variant='filled'
                  label={`Filled - Small`}
                  placeholder='Filled'
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <InputField
                  size='small'
                  variant='standard'
                  label={`Standard - Small`}
                  placeholder='Standard'
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Typography variant='h6'>{`Text Field Props: Disabled, Required, Validation and HelperText`}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={6} md={4}>
                <InputField
                  label={t('label.textField:disabled')}
                  disabled placeholder='Outlined Disabled'
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <InputField
                  label={t('label.textField:required')}
                  required
                  placeholder='Outlined Primary'
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <InputField
                  label={`Helper Text`}
                  placeholder='No clue?'
                  helperText={`I'm here to help you out!`}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <InputField
                  error
                  label={t('label.textField:requiredWithError')}
                  required
                  placeholder='Outlined Primary'
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <InputField
                  required
                  error
                  label={`Error with Helper Text`}
                  placeholder='No clue?'
                  helperText={`I'm here to help you out!`}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={6} md={4}>
                <InputField
                  variant='filled'
                  label={t('label.textField:disabled')}
                  disabled placeholder='Outlined Disabled'
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <InputField
                  variant='filled'
                  label={t('label.textField:required')}
                  required
                  placeholder='Outlined Primary'
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <InputField
                  variant='filled'
                  label={`Helper Text`}
                  placeholder='No clue?'
                  helperText={`I'm here to help you out!`}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <InputField
                  variant='filled'
                  error
                  label={t('label.textField:requiredWithError')}
                  required
                  placeholder='Outlined Primary'
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <InputField
                  variant='filled'
                  required
                  error
                  label={`Error with Helper Text`}
                  placeholder='No clue?'
                  helperText={`I'm here to help you out!`}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={6} md={4}>
                <InputField
                  variant='standard'
                  label={t('label.textField:disabled')}
                  disabled placeholder='Outlined Disabled'
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <InputField
                  variant='standard'
                  label={t('label.textField:required')}
                  required
                  placeholder='Outlined Primary'
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <InputField
                  variant='standard'
                  label={`Helper Text`}
                  placeholder='No clue?'
                  helperText={`I'm here to help you out!`}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <InputField
                  variant='standard'
                  error
                  label={t('label.textField:requiredWithError')}
                  required
                  placeholder='Outlined Primary'
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <InputField
                  variant='standard'
                  required
                  error
                  label={`Error with Helper Text`}
                  placeholder='No clue?'
                  helperText={`I'm here to help you out!`}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Typography variant='h6'>Adornments</Typography>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={4}>
                <InputField
                  label="Text Adornment - Start"
                  placeholder='Outlined'
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position='end'>$</InputAdornment>
                    )
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <InputField
                  label="Text Adornment - End"
                  placeholder='Outlined'
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position='start'>kg</InputAdornment>
                    )
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <InputField
                  placeholder='Attach a file'
                  label="Icon Start Adornment"
                  required
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position='end'>
                        <AttachFileIcon />
                      </InputAdornment>
                    )
                  }} />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <InputField
                  placeholder='Type your language'
                  label="Icon End Adornment"
                  required
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position='start'>
                        <LanguageIcon />
                      </InputAdornment>
                    )
                  }} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={6} md={4}>
                <InputField
                  variant='filled'
                  label="Text Adornment - Start"
                  placeholder='Outlined'
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position='end'>$</InputAdornment>
                    )
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <InputField
                  variant='filled'
                  label="Text Adornment - End"
                  placeholder='Outlined'
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position='start'>kg</InputAdornment>
                    )
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <InputField
                  variant='filled'
                  placeholder='Start Adornment'
                  label="Icon Start Adornment"
                  required
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position='end'>
                        <AttachFileIcon />
                      </InputAdornment>
                    )
                  }} />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <InputField
                  variant='filled'
                  placeholder='End Adornment'
                  label="Icon End Adornment"
                  required
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position='start'>
                        <LanguageIcon />
                      </InputAdornment>
                    )
                  }} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={6} md={4}>
                <InputField
                  variant='standard'
                  label="Text Adornment - Start"
                  placeholder='Outlined'
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position='end'>$</InputAdornment>
                    )
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <InputField
                  variant='standard'
                  label="Text Adornment - End"
                  placeholder='Outlined'
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position='start'>kg</InputAdornment>
                    )
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <InputField
                  variant='standard'
                  placeholder='Outlined'
                  label="Icon Start Adornment"
                  required
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position='end'>
                        <AttachFileIcon />
                      </InputAdornment>
                    )
                  }} />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <InputField
                  variant='standard'
                  placeholder='Outlined'
                  label="Icon End Adornment"
                  required
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position='start'>
                        <LanguageIcon />
                      </InputAdornment>
                    )
                  }} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Typography variant='h6'>Adornments - Small TextFields</Typography>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={4}>
                <InputField
                  size="small"
                  label="Text Adornment - Start"
                  placeholder='Outlined'
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position='end'>$</InputAdornment>
                    )
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <InputField
                  size="small"
                  label="Text Adornment - End"
                  placeholder='Outlined'
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position='start'>kg</InputAdornment>
                    )
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <InputField
                  size="small"
                  placeholder='Attach a file'
                  label="Icon Start Adornment"
                  required
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position='end'>
                        <AttachFileIcon />
                      </InputAdornment>
                    )
                  }} />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <InputField
                  size="small"
                  placeholder='Type your language'
                  label="Icon End Adornment"
                  required
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position='start'>
                        <LanguageIcon />
                      </InputAdornment>
                    )
                  }} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={6} md={4}>
                <InputField
                  size="small"
                  variant='filled'
                  label="Text Adornment - Start"
                  placeholder='Outlined'
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position='end'>$</InputAdornment>
                    )
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <InputField
                  size="small"
                  variant='filled'
                  label="Text Adornment - End"
                  placeholder='Outlined'
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position='start'>kg</InputAdornment>
                    )
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <InputField
                  size="small"
                  variant='filled'
                  placeholder='Start Adornment'
                  label="Icon Start Adornment"
                  required
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position='end'>
                        <AttachFileIcon />
                      </InputAdornment>
                    )
                  }} />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <InputField
                  size="small"
                  variant='filled'
                  placeholder='End Adornment'
                  label="Icon End Adornment"
                  required
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position='start'>
                        <LanguageIcon />
                      </InputAdornment>
                    )
                  }} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={6} md={4}>
                <InputField
                  size="small"
                  variant='standard'
                  label="Text Adornment - Start"
                  placeholder='Outlined'
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position='end'>$</InputAdornment>
                    )
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <InputField
                  size="small"
                  variant='standard'
                  label="Text Adornment - End"
                  placeholder='Outlined'
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position='start'>kg</InputAdornment>
                    )
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <InputField
                  size="small"
                  variant='standard'
                  placeholder='Outlined'
                  label="Icon Start Adornment"
                  required
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position='end'>
                        <AttachFileIcon />
                      </InputAdornment>
                    )
                  }} />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <InputField
                  size="small"
                  variant='standard'
                  placeholder='Outlined'
                  label="Icon End Adornment"
                  required
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position='start'>
                        <LanguageIcon />
                      </InputAdornment>
                    )
                  }} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Typography variant='h6'>{`Masked Text`}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={1}>
              <Grid item xs={6} sm={4} md={3}>
                <InputField
                  label="Masking - Charge Codes"
                  placeholder='XX,YY,ZZ'
                  required
                  value="wwwwww"
                  InputProps={{
                    inputComponent: ChargeCodeMask as any,
                    endAdornment: (
                      <InputAdornment position='start'>
                        <LanguageIcon />
                      </InputAdornment>
                    )
                  }}
                  onChange={(e) => {
                    console.log(e.target.value);
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default TextFieldStyleGuide;
