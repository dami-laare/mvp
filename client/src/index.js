import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './store';
import { transitions, positions, Provider as AlertProvider } from 'react-alert';
import { CookiesProvider } from "react-cookie";

// import AlertTemplate from 'react-alert-template-basic';
import AlertTemplate from 'react-alert-template-oldschool-dark';

const options = {
  timeout: 5000,
  transition: transitions.FADE,
  position: positions.BOTTOM_CENTER
}

ReactDOM.render(
  
  <React.StrictMode>
      <CookiesProvider>
        <AlertProvider template={AlertTemplate} {...options}>
          <Provider store={store}>
            <App />
          </Provider>
        </AlertProvider>
      </CookiesProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

