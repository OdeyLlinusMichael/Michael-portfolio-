import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ReactGA from "react-ga4";

ReactGA.initialize("G-B5VXSLMP78");

ReactGA.send({ hitType: "pageview", page: "/my-path", title: "Custom Title" });

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
