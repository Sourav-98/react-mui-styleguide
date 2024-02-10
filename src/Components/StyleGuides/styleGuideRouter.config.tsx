import { Navigate, RouteObject } from 'react-router-dom';
import { lazy } from 'react';
import AlertStack from './AlertStack';

const TextFieldStyleGuide = lazy(() => import('./TextFields'));
const AutoCompleteStyleGuide = lazy(() => import('./AutoComplete'));
const SelectFieldsStyleGuide = lazy(() => import('./SelectFields'));
const DatePickerStyleGuide = lazy(() => import('./DatePicker'));
const ButtonStyleGuide = lazy(() => import('./Buttons'));
const FormikStyleGuide = lazy(() => import('./Formik'));

export const styleGuidesRouterConfig: RouteObject[] = [
  {
    path: 'textfield',
    element: <TextFieldStyleGuide />,
  },
  {
    path: 'autocomplete',
    element: <AutoCompleteStyleGuide />,
  },
  {
    path: 'select',
    element: <SelectFieldsStyleGuide />,
  },
  {
    path: 'button',
    element: <ButtonStyleGuide />,
  },
  {
    path: 'datepicker',
    element: <DatePickerStyleGuide />,
  },
  {
    path: 'formik',
    element: <FormikStyleGuide />,
  },
  {
    path: 'alert-stack',
    element: <AlertStack/>
  },
  {
    path: '',
    element: <Navigate to='autocomplete' />,
  },
];
