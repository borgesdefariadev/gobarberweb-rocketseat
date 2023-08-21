import React from 'react';
import ReactDOM from 'react-dom/client';
import PropTypes from 'prop-types';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Route,
  Navigate,
} from 'react-router-dom';

import App from './App';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';

// Simulate authentication status
const signed = false;

function PrivateRoute({ component: Component, isPrivate, ...rest }) {
  if (isPrivate && !signed) {
    return <Navigate to="/" />;
  }

  if (!isPrivate && signed) {
    return <Navigate to="/dashboard" />;
  }

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Route {...rest} element={<Component />} />;
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    caseSensitive: false,
    children: [
      {
        path: '/',
        element: <SignIn />,
      },
      {
        path: '/dashboard',
        element: <Dashboard isPrivate />,
        caseSensitive: false,
      },
      {
        path: '/register',
        element: <SignUp />,
        caseSensitive: false,
      },
      {
        path: 'profile',
        element: <Profile isPrivate />,
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
