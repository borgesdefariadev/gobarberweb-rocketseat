import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import './config/ReactotronConfig';
import { Outlet } from 'react-router-dom';

import { store, persistor } from './store';
import GlobalStyle from './styles/global';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Outlet />
        <GlobalStyle />
      </PersistGate>
    </Provider>
  );
}

export default App;
