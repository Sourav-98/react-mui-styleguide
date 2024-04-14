import { InputFieldProps } from '../InputField/InputField';

export type FormInputFieldProps = Partial<Omit<InputFieldProps, 'name'>> & {
  /**
   * The input field name within the `Formik` form usage. `name` is a mandatory field, as it is required by `Formik` to define its context variables.
   */
  name: string;
};
