import React from 'react';
import './config/ReactotronConfig';
import { Outlet } from 'react-router-dom';
import GlobalStyle from './styles/global';

function App() {
  return (
    <div className="App">
      <p>Navbar</p>
      <Outlet />
      <GlobalStyle />
      <p>footer</p>
    </div>
  );
}

export default App;
