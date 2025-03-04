import { createRoot } from 'react-dom/client'
import React from 'react';
import { Provider } from 'react-redux';
import store from './app/store';
import App from './App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/select/lib/css/blueprint-select.css";

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <App />
</Provider>,
)
