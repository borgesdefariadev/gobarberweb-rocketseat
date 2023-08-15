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
        <Route exact path="/" caseSensitive={false} component={SignIn} />
        <Route path="/register" caseSensitive={false} component={SignUp} />

        <Route path="/dashboard" caseSensitive={false} component={Dashboard} />
        <Route path="/profile" caseSensitive={false} component={Profile} />
      </Routes>
    </Router>
  );
}
