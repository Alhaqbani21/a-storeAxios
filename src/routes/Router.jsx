import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import SignUpPage from '../pages/SignUpPage';
import LoginPage from '../pages/LoginPage';
import Profile from '../pages/Profile';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '/Login',
    element: <LoginPage />,
  },
  {
    path: '/SignUp',
    element: <SignUpPage />,
  },
  {
    path: '/Profile',
    element: <Profile />,
  },
]);
function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
