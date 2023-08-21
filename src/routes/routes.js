import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" caseSensitive={false} element={<SignIn />} />
        <Route path="/register" caseSensitive={false} element={<SignUp />} />

        <Route
          path="/dashboard"
          caseSensitive={false}
          element={<Dashboard />}
          isPrivate
        />
        <Route path="/profile" caseSensitive={false} element={<Profile />} />
      </Routes>
    </Router>
  );
}
