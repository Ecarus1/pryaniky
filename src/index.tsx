import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app';
import {BrowserRouter} from "react-router-dom";
// import ServicesProvider from './provider';
// import Services from './services';
// import config from './config';
import store from './storeRedux/store';
import {Provider} from "react-redux";

// Менеджер сервисов
// const services = new Services(config);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <ServicesProvider services={services}> */}
        <BrowserRouter>
          <App/>
        </BrowserRouter>
      {/* </ServicesProvider> */}
    </Provider>
  </React.StrictMode>
);
