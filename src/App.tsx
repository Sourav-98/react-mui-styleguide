import './App.css';
import { RouterProvider } from 'react-router-dom';
import { mainRouterConfig } from './router.config';

function App() {
  return (
    <RouterProvider router={mainRouterConfig}></RouterProvider>
  )
}

export default App;
