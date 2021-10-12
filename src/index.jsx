import './index.css';
import reportWebVitals from './reportWebVitals';
import React from "react";
import ReactDOM from "react-dom";
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";
import App from "./App";

// Sentry.init({
//   dsn: process.env.REACT_APP_DNS_URL,
//   integrations: [new Integrations.BrowserTracing()],

//   tracesSampleRate: 1.0,
// });


  
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
