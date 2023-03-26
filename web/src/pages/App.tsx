import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from './Home';

function AppRoutes() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export { AppRoutes };
