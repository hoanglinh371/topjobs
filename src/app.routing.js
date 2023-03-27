import { createBrowserRouter } from 'react-router-dom';
import Admin from './components/admin/Admin';
import Auth from './components/auth/Auth';
import ForgotPassword from './components/auth/ForgotPassword';
import Login from './components/auth/Login';
import Register from './components/auth/Register';

import Home from './components/home/Home';
import JobDescription from './components/home/JobDescription';
import List from './components/home/List';
import ResetPw from './components/auth/ResetPassword';
import Header from './components/shared/Header';
import UserInfo from './components/home/UserInfo';
import UpdatePassword from './components/auth/UpdatePassword';

const AppRouter = createBrowserRouter([
  {
    path: '',
    element: (
      <>
        <Header />
        <Home />
      </>
    ),
    children: [
      {
        path: '',
        element: <List />,
      },
      {
        path: ':id',
        element: <JobDescription />,
      },
    ],
  },
  {
    path: 'admin',
    element: <Admin />,
  },
  {
    path: 'me',
    element: (
      <>
        <Header />
        <UserInfo />
      </>
    ),
  },
  {
    path: 'auth',
    element: <Auth />,
    children: [
      { path: 'login', element: <Login /> },
      { path: 'registration', element: <Register /> },
      { path: 'forgot-password', element: <ForgotPassword /> },
      { path: 'reset-password/:id', element: <ResetPw /> },
      {
        path: 'update-password',
        element: <UpdatePassword />,
      },
    ],
  },
]);

export default AppRouter;
