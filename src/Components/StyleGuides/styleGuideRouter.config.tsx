import { Navigate, RouteObject } from "react-router-dom";
import { lazy } from "react";

const TextFieldStyleGuide = lazy(() => import('./TextFields'));
const AutoCompleteStyleGuide = lazy(() => import('./AutoComplete'));
const SelectFieldsStyleGuide = lazy(() => import('./SelectFields'));

export const styleGuidesRouterConfig: RouteObject[] = [
    {
        path: 'textfield',
        element: <TextFieldStyleGuide/>
    },
    {
        path: 'autocomplete',
        element: <AutoCompleteStyleGuide/>
    },
    {
        path: 'select',
        element: <SelectFieldsStyleGuide/>
    },
    {
        path: '',
        element: <Navigate to='textfield'/>
    }
]
