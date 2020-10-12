import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Loader from './components/loader/loader.component';

import { Provider, useSelector } from 'react-redux';
import { ReactReduxFirebaseProvider, isLoaded } from 'react-redux-firebase';

import store from './redux/store';
import { rrfProps } from './redux/store';

import theme from './utils/theme';
import GlobalStyles from './utils/global';

function AuthIsLoaded({ children }) {
  const auth = useSelector((state) => state.firebase.auth);
  if (!isLoaded(auth)) return <Loader />;
  return children;
}

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <>
            <AuthIsLoaded>
              <App />
              <GlobalStyles />
            </AuthIsLoaded>
          </>
        </ThemeProvider>
      </BrowserRouter>
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root'),
);
