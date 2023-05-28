import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './components/App';

ReactDOM.render(
  //no usar strict mode


   <App />, // Renderiza directamente el componente App
  document.getElementById('root')
);

serviceWorkerRegistration.unregister();
reportWebVitals();
