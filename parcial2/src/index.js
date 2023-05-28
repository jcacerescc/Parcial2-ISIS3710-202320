import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './components/App';
import { IntlProvider } from 'react-intl';
import localeEsMessages from "./locales/es";

ReactDOM.render(

  <IntlProvider locale="en" messages={localeEsMessages}>

   <App />, 
  </IntlProvider>, document.getElementById("root")
);

serviceWorkerRegistration.unregister();
reportWebVitals();
