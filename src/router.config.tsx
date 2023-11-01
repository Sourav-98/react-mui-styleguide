import { Navigate, createBrowserRouter } from 'react-router-dom';
import StyleGuide from './Components/StyleGuides/StyleGuide';
import { styleGuidesRouterConfig } from './Components/StyleGuides/styleGuideRouter.config';
import MiniDrawer from 'Components/StyleGuides/Test';
export const mainRouterConfig = createBrowserRouter([
  {
    path: '/styleguide',
    element: <StyleGuide />,
    children: styleGuidesRouterConfig,
  },
  {
    path: '/test',
    element: <MiniDrawer />
  },
  {
    path: '/',
    element: <Navigate to='./styleguide' />,
  },
]);
