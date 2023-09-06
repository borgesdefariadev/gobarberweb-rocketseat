/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-console */
import React from 'react';
import ReactDOM from 'react-dom/client';
import PropTypes from 'prop-types';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from 'react-router-dom';

// paginas de rotas
import App from './App';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';

// layouts
import AuthLayout from './pages/_layouts/auth';
import DefaultLayout from './pages/_layouts/default';

// redux
import store from './store';

// Simulate authentication status
const { signed } = store.getState().auth;

function PrivateRoute({ component: Component, isPrivate, ...rest }) {
  if (isPrivate && !signed) {
    return <Navigate to="/" />;
  }

  if (!isPrivate && signed) {
    return <Navigate to="/dashboard" />;
  }

  const Layout = signed ? DefaultLayout : AuthLayout;

  return (
    <Layout>
      <Component {...rest} />
    </Layout>
  );
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    caseSensitive: false,
    children: [
      {
        path: '/',
        element: <PrivateRoute component={SignIn} isPrivate={false} />,
      },
      {
        path: '/dashboard',
        element: <PrivateRoute component={Dashboard} isPrivate />,
        caseSensitive: false,
      },
      {
        path: '/register',
        element: <PrivateRoute component={SignUp} isPrivate={false} />,
        caseSensitive: false,
      },
      {
        path: 'profile',
        element: <PrivateRoute component={Profile} isPrivate />,
        caseSensitive: false,
      },
    ],
  },
]);

PrivateRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.element])
    .isRequired,
  isPrivate: PropTypes.bool,
};

PrivateRoute.defaultProps = {
  isPrivate: true,
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <Outlet />
    </RouterProvider>
  </React.StrictMode>
);
