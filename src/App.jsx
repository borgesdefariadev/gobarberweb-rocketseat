import React from 'react';
import { Provider } from 'react-redux';
import './config/ReactotronConfig';
import { Outlet } from 'react-router-dom';

import store from './store';
import GlobalStyle from './styles/global';

function App() {
  return (
    <Provider store={store}>
      <Outlet />
      <GlobalStyle />
    </Provider>
  );
}

export default App;
