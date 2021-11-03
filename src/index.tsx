import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import reset from 'styled-reset';
import { ToastContainer } from 'react-toastify';
import { PersistGate } from 'redux-persist/integration/react';

import 'react-toastify/dist/ReactToastify.css';

import App from './components/App';
import { store, persistor } from './store';

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
  }

  body, input, textarea, button {
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
    color: #202124;
    line-height: 1.2;
  }
`;

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <ThemeProvider theme={{ fontFamily: 'Helvetica Neue' }}>
        <React.Fragment>
          <GlobalStyle />
          <App />
          <ToastContainer />
        </React.Fragment>
      </ThemeProvider>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
