import { Container, Grid, Paper } from '@mui/material';
// import TextFieldDatePicker from 'Elements/DatePickers/TextFieldDatePicker';
import FormInputField from 'Elements/Input/FormInputField';
import SubmitButton from 'Elements/Input/SubmitButton';
import { FormStationTypeAhead } from 'Shared/StationTypeAhead';
import { Form, Formik, FormikProps } from 'formik';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';
import { LoginFormType } from './FormikTypes';



const loginFormInitValues: LoginFormType = {
  username: 'RC',
  password: '',
  passwordConfirm: '',
  station: 'ORD',
  loginDate1: null,
};

const formValidationSchema = Yup.object().shape({
  username: Yup.string()
    .test('Username validity check', 'formik:feedback.usernameInvalid', (value) => {
      if (!value) return true;
      return /^\w+$/.test(value);
    })
    .required('formik:feedback.usernameMandatory'),
  password: Yup.string().required('formik:feedback.passwordMandatory'),
  passwordConfirm: Yup.string()
    .when('password', {
      is: (value: string) => value && value.length,
      then: Yup.string().oneOf([Yup.ref('password'), undefined], 'formik:feedback.passwordConfirmMismatch')
    })
    .required('formik:feedback.passwordConfirmMandatory'),
  station: Yup.string().required('Station is mandatory')
});

const FormikStyleGuide: React.FC = (): JSX.Element => {
  const { t } = useTranslation(['formik']);

  return (
    <Container maxWidth={'md'}>
      <Paper sx={{ display: 'flex', p: 3}}>
        <Grid container spacing={2} p={2}>
          <Grid item xs={12}>
            <Formik
              initialValues={loginFormInitValues}
              onSubmit={(values, helpers) => {
                console.log(values); helpers.resetForm({
                  values, touched: {
                    username: true,
                    password: true,
                    passwordConfirm: true,
                    station: true
                  }
                })
              }}
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
                <Form>
                  <Grid container spacing={2}>
                    <Grid item xs={2.5}>
                      <FormInputField
                        name='username'
                        required
                        label={t('formik:label.username', 'Username')}
                        helperText={touched.username && !!errors.username ? t(errors.username || '') : null}
                        placeholder={t('formik:label.username', 'Username') || ''}
                        aria-label='username'
                        inputProps={{
                          style: {
                            textAlign: 'right'
                          }
                        }}
                      />
                    </Grid>
                    <Grid item xs={2.5}>
                      <FormInputField
                        name='password'
                        required
                        label={t('formik:label.password', 'Password')}
                        helperText={touched.password && !!errors.password ? t(errors.password || '') : null}
                        placeholder={t('formik:label.password', 'Password') || ''}
                        aria-label='password'
                      />
                    </Grid>
                    <Grid item xs={2.5}>
                      <FormInputField
                        name='passwordConfirm'
                        required
                        label={t('formik:passwordConfirm', 'Confirm Password')}
                        helperText={touched.passwordConfirm && !!errors.passwordConfirm ? t(errors.passwordConfirm || '') : null}
                        placeholder={t('formik:passwordConfirm', 'Confirm Password') || ''}
                        aria-label='password confirm'
                      />
                    </Grid>
                    <Grid item xs={2.5}>
                      <FormStationTypeAhead
                        name='station'
                        label='Station'
                        helperText={touched.station && !!errors.station ? errors.station : null}
                        required
                        inputProps={{
                          style: {
                            textAlign: 'right'
                          }
                        }}
                      />
                    </Grid>
                    <Grid item xs={1}>
                      <SubmitButton type="submit" variant='contained' fullWidth color='primary' isSubmitting={isSubmitting} disabled={isSubmitting}>
                        Submit
                      </SubmitButton>
                    </Grid>
                  </Grid>
                </Form>
              )}
            </Formik>
          </Grid>
        </Grid>
      </Paper>
    </Container>

  );
};

export default FormikStyleGuide;
