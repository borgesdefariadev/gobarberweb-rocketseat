import React from 'react';
import './config/ReactotronConfig';
import GlobalStyle from './styles/global';
import Routes from './routes/routes';

function App() {
  return (
    <>
      <Routes />
      <GlobalStyle />
    </>
  );
}

export default App;
