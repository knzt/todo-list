import React from 'react'
import ReactDOM from 'react-dom/client'
import { GlobalStyles } from "./assets/js/globalStyles.js";
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>,
)
