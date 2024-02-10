import { Box, Grid, Paper, TextField, Typography } from '@mui/material';
import TextFieldDatePicker from 'Elements/DatePickers/TextFieldDatePicker';
import InputField from 'Elements/Input/InputField';
import { StationTypeAhead } from 'Shared/StationTypeAhead';
import { Form, Formik, FormikProps } from 'formik';
import { Moment } from 'moment';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';

const formValidationSchema = Yup.object().shape({
  username: Yup.string()
    .test('Username validity check', 'formik:usernameInvalid', (value) => {
      if (!value) return true;
      return /^\w+$/.test(value);
    })
    .required('formik:usernameMandatory')
});

const FormikStyleGuide: React.FC = (): JSX.Element => {
  const { t } = useTranslation(['formik']);
  type LoginFormType = {
    username: string;
    textfield2: string;
    textfield3: string;
    station1: string;
    station2: string;
    station3: string;
    loginDate1: Moment | null;
    loginDate2: Moment | null;
    loginDate3: Moment | null;
  };

  const loginFormInitValues: LoginFormType = {
    username: '',
    textfield2: '',
    textfield3: '',
    station1: '',
    station2: '',
    station3: '',
    loginDate1: null,
    loginDate2: null,
    loginDate3: null,
  };

  return (
    <Grid container spacing={2} p={2}>
      <Grid item xs={12}>
        
      </Grid>
      <Grid item xs={12}>
        <Formik
          initialValues={loginFormInitValues}
          onSubmit={(values, helpers) => { }}
          validationSchema={formValidationSchema}
          validateOnChange
        >
          {({
            values,
            errors,
            touched,
            isSubmitting,
            isValid,
            setFieldValue,
            setFieldTouched,
          }: FormikProps<LoginFormType>) => (
            <Grid container spacing={0} justifyContent={'center'} alignItems={'center'} height={'100%'}>
              <Grid item xs={12} style={{ width: '90%', maxWidth: 400 }}>
                <Paper elevation={3} sx={{ padding: 3, display: 'flex', flexDirection: 'column' }}>
                  <Typography variant='body1'>Formik Form Validations</Typography>
                  <Form>
                    <Box display={'flex'} flexDirection={'column'}>
                      <InputField
                        sx={{ mt: 1, mb: 1 }}
                        error={touched.username && !!errors.username}
                        helperText={touched.username ? t(errors.username || '') : null}
                        touched={touched.username ? 'true' : 'false'}
                        name='username'
                        placeholder='Username'
                        label={t('formik:username', 'Username')}
                        value={values.username}
                        aria-label='username'
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                          setFieldValue('username', event.target.value);
                        }}
                        onBlur={() => setFieldTouched('username', true, true)}
                        required
                      />
                      <TextField
                        sx={{ mt: 1, mb: 1 }}
                        error={touched.textfield2 && !!errors.textfield2}
                        helperText={touched.textfield2 ? errors.textfield2 : null}
                        touched={touched.textfield2 ? 'true' : 'false'}
                        name='textfield2'
                        placeholder='Filled Info'
                        variant='filled'
                        color='info'
                        value={values.textfield2}
                        aria-label='textfield2'
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                          setFieldValue('textfield2', event.target.value);
                        }}
                        onBlur={() => setFieldTouched('textfield2', true, true)}
                      />
                      <TextField
                        sx={{ mt: 1, mb: 1 }}
                        variant='standard'
                        error={touched.textfield3 && !!errors.textfield3}
                        helperText={touched.textfield3 ? errors.textfield3 : null}
                        touched={touched.textfield3 ? 'true' : 'false'}
                        name='textfield3'
                        placeholder='Standard Success'
                        value={values.textfield3}
                        color='success'
                        aria-label='textfield3'
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                          setFieldValue('textfield3', event.target.value);
                        }}
                        onBlur={() => setFieldTouched('textfield3', true, true)}
                      />
                      <Typography variant='subtitle2'>Station Search Outlined Primary</Typography>
                      <StationTypeAhead
                        name='station1'
                        value={values.station1}
                        sx={{ mt: 1, mb: 1 }}
                        error={touched.station1 && !!errors.station1}
                        helperText={touched.station1 ? errors.station1 : null}
                        touched={touched.station1 ? 'true' : 'false'}
                        placeholder='Station'
                        onStationChange={(selectedStation) => {
                          setFieldValue('station1', selectedStation);
                        }}
                        onBlur={() => setFieldTouched('station1', true, true)}
                      />
                      <Typography variant='subtitle2'>Station Search Filled</Typography>
                      <StationTypeAhead
                        name='station2'
                        value={values.station2}
                        sx={{ mt: 1, mb: 1 }}
                        variant='filled'
                        error={touched.station2 && !!errors.station2}
                        helperText={touched.station2 ? errors.station2 : null}
                        touched={touched.station2 ? 'true' : 'false'}
                        placeholder='Station'
                        onStationChange={(selectedStation) => {
                          setFieldValue('station2', selectedStation);
                        }}
                        onBlur={() => setFieldTouched('station2', true, true)}
                      />
                      <Typography variant='subtitle2'>Station Search Standard</Typography>
                      <StationTypeAhead
                        name='station3'
                        value={values.station3}
                        sx={{ mt: 1, mb: 1 }}
                        variant='standard'
                        error={touched.station3 && !!errors.station3}
                        helperText={touched.station3 ? errors.station3 : null}
                        touched={touched.station3 ? 'true' : 'false'}
                        placeholder='Station'
                        onStationChange={(selectedStation) => {
                          setFieldValue('station3', selectedStation);
                        }}
                        onBlur={() => setFieldTouched('station3', true, true)}
                      />
                      <Typography variant='subtitle2'>Typable Datepicker Outlined Primary</Typography>
                      <TextFieldDatePicker
                        sx={{ mt: 1, mb: 1 }}
                        aria-label='loginDate1'
                        name='loginDate'
                        label='Login Date'
                        value={values.loginDate1}
                        error={touched.loginDate1 && !!errors.loginDate1}
                        helperText={touched.loginDate1 ? errors.loginDate1 : null}
                        touched={touched.loginDate1 ? 'true' : 'false'}
                        onDateChange={(date) => setFieldValue('loginDate1', date)}
                        onBlur={() => setFieldTouched('loginDate1', true, true)}
                        datePickerActions={['today']}
                      />
                      <Typography variant='subtitle2'>Typable Datepicker Filled Info</Typography>
                      <TextFieldDatePicker
                        sx={{ mt: 1, mb: 1 }}
                        aria-label='loginDate2'
                        name='loginDate'
                        value={values.loginDate2}
                        error={touched.loginDate2 && !!errors.loginDate2}
                        helperText={touched.loginDate2 ? errors.loginDate2 : null}
                        touched={touched.loginDate2 ? 'true' : 'false'}
                        variant='filled'
                        color='info'
                        onDateChange={(date) => {
                          setFieldValue('loginDate2', date);
                        }}
                        onBlur={() => setFieldTouched('loginDate2', true, true)}
                      />
                      <Typography variant='subtitle2'>Typable Datepicker Standard Success</Typography>
                      <TextFieldDatePicker
                        sx={{ mt: 1, mb: 1 }}
                        aria-label='loginDate3'
                        name='loginDate'
                        value={values.loginDate3}
                        error={touched.loginDate3 && !!errors.loginDate3}
                        helperText={touched.loginDate3 ? errors.loginDate3 : null}
                        variant='standard'
                        color='success'
                        touched={touched.loginDate3 ? 'true' : 'false'}
                        onDateChange={(date) => {
                          setFieldValue('loginDate3', date);
                        }}
                        onBlur={() => setFieldTouched('loginDate3', true, true)}
                      />
                    </Box>
                  </Form>
                </Paper>
              </Grid>
            </Grid>
          )}
        </Formik>
      </Grid>
    </Grid>
  );
};

export default FormikStyleGuide;
