import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import SimpleLayout from './layouts/simple';
//
import BlogPage from './pages/BlogPage';
import UserPage from './pages/UserPage';
import LoginPage from './pages/LoginPage';
import Page404 from './pages/Page404';
import ProductsPage from './pages/ProductsPage';
import DashboardAppPage from './pages/DashboardAppPage';
import { auth } from './firebase/firebase';
import NewPostPage from './pages/NewPostPage';
import ProfilePage from './pages/ProfilePage';
import HelpAlerts from './pages/HelpAlerts';


// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
   {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        // { element: <Navigate to="/dashboard/app" />, index: true },
        // { path: 'app', element: <DashboardAppPage /> },
        { element: <Navigate to="/dashboard/user" />, index: true },
        { path: 'user', element: <UserPage /> },
        // { path: 'products', element: <ProductsPage /> },
        { path: 'blog', element: <BlogPage /> },
        { path: 'newpost', element: <NewPostPage /> },
        { path: 'profile', element: <ProfilePage /> },
        { path: 'helpAlerts', element: <HelpAlerts /> },
      ],
    },
    {
      path: 'login',
      element: <LoginPage />,
    },
    {
      element: <SimpleLayout />,
      children: [
        { element: <Navigate to="login" />, index: true },
        { path: '404', element: <Page404 /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
