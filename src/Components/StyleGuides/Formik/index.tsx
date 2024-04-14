import { Container, Divider, Grid, MenuItem, Paper } from '@mui/material';
import FormInputField from 'Elements/Input/FormInputField';
import SubmitButton from 'Elements/Input/SubmitButton';
import { FormStationTypeAhead } from 'Shared/StationTypeAhead';
import { Form, Formik, FormikProps } from 'formik';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';
import { LoginFormType } from './FormikTypes';
import XDatePicker from 'Elements/DatePickers/XDatePicker';
import FileUploadManager from 'Elements/FileUploadManager';
import FormXDatePicker from 'Elements/DatePickers/FormXDatePicker';
import moment from 'moment';



const loginFormInitValues: LoginFormType = {
  loginType: 'PWD',
  username: 'RC',
  password: '',
  passwordConfirm: '',
  station: 'ORD',
  loginDate1: '',
  loginDate2: '12MAX23',
};

const FormikStyleGuide: React.FC = (): JSX.Element => {
  const { t } = useTranslation(['formik']);

  const formValidationSchema = Yup.object().shape({
    username: Yup.string()
      .test('Username validity check', t('formik:feedback.usernameInvalid') || '', (value) => {
        if (!value) return true;
        return /^\w+$/.test(value);
      })
      .required('formik:feedback.usernameMandatory'),
    password: Yup.string().when('loginType', {
      is: (value: string) => value === 'PWD',
      then: Yup.string().required('formik:feedback.passwordMandatory'),
    }),
    passwordConfirm: Yup.string().when('loginType', {
      is: (value: string) => value === 'PWD',
      then: Yup.string()
        .when('password', {
          is: (value: string) => value && value.length,
          then: Yup.string().oneOf([Yup.ref('password'), undefined], 'formik:feedback.passwordConfirmMismatch')
        })
        .required('formik:feedback.passwordConfirmMandatory'),
    }),
    station: Yup.string().required('Station is mandatory'),
    loginDate2: Yup.string().required('Date is mandatory')
  });

  return (
    <Container maxWidth={'md'}>
      <Paper sx={{ display: 'flex', p: 3 }}>
        <Grid container spacing={2} p={2}>
          <Grid item xs={12}>
            <Formik
              initialValues={loginFormInitValues}
              onSubmit={async (values, helpers) => {
                console.log(values);
                await new Promise((resolve) => setTimeout(resolve, 1000));
                helpers.resetForm({
                  values: {
                    ...loginFormInitValues,
                    loginType: values.loginType
                  }
                })
              }}
              validationSchema={formValidationSchema}
              validateOnMount
              validateOnChange
            >
              {({
                values,
                errors,
                touched,
                isSubmitting,
                isValid,
                setFieldValue,
                resetForm
              }: FormikProps<LoginFormType>) => (
                <Form>
                  <Grid container spacing={2}>
                    <Grid item xs={2.2}>
                      <FormInputField
                        name='loginType'
                        select
                        required
                        label={t('formik:label.loginType', 'Login Mode')}
                        helperText={touched.loginType && !!errors.loginType ? t(errors.loginType || '') : null}
                        placeholder={t('formik:label.loginType', 'Username') || ''}
                        aria-label='login-mode'
                        inputProps={{
                          style: {
                            textAlign: 'right'
                          }
                        }}
                        title='Select your login mode.'
                        onChange={(e) => {
                          setFieldValue('loginType', e.target.value);
                          if (e.target.value === 'MFA') {
                            setTimeout(() => {
                              setFieldValue('loginDate1', '');
                            }, 0);
                          }
                        }}
                      >
                        <MenuItem value="PWD">Password</MenuItem>
                        <MenuItem value="MFA">MFA</MenuItem>
                      </FormInputField>
                    </Grid>
                    <Grid item xs={2.2}>
                      <FormInputField
                        name='username'
                        required
                        label={t('formik:label.username', 'Username')}
                        helperText={touched.username && !!errors.username ? t(errors.username || '') : null}
                        placeholder={t('formik:label.username', 'Username') || ''}
                        aria-label='username'
                      />
                    </Grid>
                    {
                      values.loginType === 'PWD' && (
                        <Grid item xs={2.2}>
                          <FormInputField
                            name='password'
                            required
                            label={t('formik:label.password', 'Password')}
                            helperText={touched.password && !!errors.password ? t(errors.password || '') : null}
                            placeholder={t('formik:label.password', 'Password') || ''}
                            aria-label='password'
                          />
                        </Grid>
                      )
                    }
                    {
                      values.loginType === 'PWD' && (
                        <Grid item xs={2.2}>
                          <FormInputField
                            name='passwordConfirm'
                            required
                            label={t('formik:passwordConfirm', 'Confirm Password')}
                            helperText={touched.passwordConfirm && !!errors.passwordConfirm ? t(errors.passwordConfirm || '') : null}
                            placeholder={t('formik:passwordConfirm', 'Confirm Password') || ''}
                            aria-label='password confirm'
                          />
                        </Grid>
                      )
                    }
                    {
                      values.loginType === 'MFA' && (
                        <Grid item xs={2.2}>
                          <FormInputField
                            name='mfaPin'
                            required
                            label={t('formik:label.mfaPin', 'MFA Pin')}
                            helperText={touched.mfaPin && !!errors.mfaPin ? t(errors.mfaPin || '') : null}
                            placeholder={t('formik:label.pin', 'PIN') || ''}
                            aria-label='mfa pin'
                          />
                        </Grid>
                      )
                    }
                    <Grid item xs={2.2}>
                      <FormStationTypeAhead
                        name='station'
                        label='Station'
                        helperText={touched.station && !!errors.station ? errors.station : null}
                        required
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <FormXDatePicker name='loginDate1'/>
                    </Grid>
                    <Grid item xs={12}>
                      <FormXDatePicker name='loginDate2' required/>
                    </Grid>
                    <Grid item xs={1}>
                      <SubmitButton sx={{ mt: 3.2}} type="submit" variant='contained' fullWidth color='primary' isSubmitting={isSubmitting} disabled={!isValid || isSubmitting}>
                        Submit
                      </SubmitButton>
                    </Grid>
                  </Grid>
                </Form>
              )}
            </Formik>
          </Grid>
          <Grid item xs={12}>
          <FileUploadManager files={[new File([''], 'helloworld.txt', {
          type: 'text/plain'
        }), new File([''], 'hellowkjasdkfjaklsdjfakljdflakjsorld.pdf', {
          type: 'application/pdf'
        })]} maxUploadSize={4} onChange={() => {}}/>
          </Grid>
        </Grid>
        
      </Paper>
    </Container>

  );
};

export default FormikStyleGuide;
