import { Grid, Paper, Typography } from '@mui/material';
// import TextFieldDatePicker from 'Elements/DatePickers/TextFieldDatePicker';
import FormInputField from 'Elements/Input/FormInputField';
import SubmitButton from 'Elements/Input/SubmitButton';
import { FormStationTypeAhead } from 'Shared/StationTypeAhead';
import { Form, Formik, FormikProps } from 'formik';
import { Moment } from 'moment';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';

type LoginFormType = {
  username: string;
  password: string;
  passwordConfirm: string;
  station: string;
  loginDate1: Moment | null;
};

const loginFormInitValues: LoginFormType = {
  username: 'SOURAV RC',
  password: '',
  passwordConfirm: '',
  station: 'ORD',
  loginDate1: null,
};

const formValidationSchema = Yup.object().shape({
  username: Yup.string()
    .test('Username validity check', 'formik:usernameInvalid', (value) => {
      if (!value) return true;
      return /^\w+$/.test(value);
    })
    .required('formik:usernameMandatory'),
  password: Yup.string().required('formik:passwordMandatory'),
  passwordConfirm: Yup.string()
    .when('password', {
      is: (value: string) => value && value.length,
      then: Yup.string().oneOf([Yup.ref('password'), undefined], 'formik:passwordConfirmMismatch')
    })
    .required('formik:passwordConfirmMandatory'),
  station: Yup.string().required('Station is mandatory')
});

const FormikStyleGuide: React.FC = (): JSX.Element => {
  const { t } = useTranslation(['formik']);
  

  return (
    <Grid container spacing={2} p={2}>
      <Grid item xs={12}>
        <Formik
          initialValues={loginFormInitValues}
          onSubmit={(values, helpers) => { console.log(values); helpers.resetForm({values, touched: {
            username: true,
            password: true,
            passwordConfirm: true,
            station: true
          }}) }}
          validationSchema={formValidationSchema}
          validateOnMount
          validateOnChange
        >
          {({
            errors,
            touched,
            isSubmitting,
            isValid,
          }: FormikProps<LoginFormType>) => (
            <Grid container spacing={1} justifyContent={'center'} alignItems={'center'} height={'100%'}>
              <Grid item xs={12} style={{ width: '90%', maxWidth: 1200 }}>
                <Paper elevation={3} sx={{ padding: 3, display: 'flex', flexDirection: 'column' }}>
                  <Typography variant='body1'>Formik Form Validations - Password Set/Reset</Typography>
                  <Form>
                    <Grid container spacing={2}>
                      <Grid item xs={2}>
                        <FormInputField
                          name='username'
                          required
                          label={t('formik:username', 'Username')}
                          helperText={touched.username && !!errors.username ? t(errors.username || ''): null}
                          placeholder={t('formik:username', 'Username') || ''}
                          aria-label='username'
                        />
                      </Grid>
                      <Grid item xs={2}>
                        <FormInputField
                          name='password'
                          required
                          label={t('formik:password', 'Password')}
                          helperText={touched.password && !!errors.password ? t(errors.password || '') : null}
                          placeholder={t('formik:password', 'Password') || ''}
                          aria-label='password'
                        />
                      </Grid>
                      <Grid item xs={2}>
                        <FormInputField
                          name='passwordConfirm'
                          required
                          label={t('formik:passwordConfirm', 'Confirm Password')}
                          helperText={touched.passwordConfirm && !!errors.passwordConfirm ? t(errors.passwordConfirm || '') : null}
                          placeholder={t('formik:passwordConfirm', 'Confirm Password') || ''}
                          aria-label='password confirm'
                        />
                      </Grid>
                      <Grid item xs={2}>
                        <FormStationTypeAhead
                          name='station'
                          label='Station'
                          helperText={touched.station && !!errors.station ? errors.station : null}
                          required
                        />
                      </Grid>
                      <Grid item xs={1}>
                        <SubmitButton type="submit" variant='contained' fullWidth color='primary' isSubmitting={isSubmitting} disabled={isSubmitting}>
                          Submit
                        </SubmitButton>
                      </Grid>
                    </Grid>
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
