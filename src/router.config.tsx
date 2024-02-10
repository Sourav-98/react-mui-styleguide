import { Navigate, createBrowserRouter } from 'react-router-dom';
import StyleGuide from './Components/StyleGuides/StyleGuide';
import { styleGuidesRouterConfig } from './Components/StyleGuides/styleGuideRouter.config';
export const mainRouterConfig = createBrowserRouter([
  {
    path: 'styleguide',
    element: <StyleGuide />,
    children: styleGuidesRouterConfig,
  },
  {
    path: '',
    element: <Navigate to='styleguide' />,
  },
], {
  basename: `${process.env.PUBLIC_URL}`,
});
