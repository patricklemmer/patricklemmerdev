//Imports
// React imports
import React from 'react'
import ReactDOM from 'react-dom/client'

//Component imports
import App from './App'

//Stylesheet imports
import './index.css'

// Utility imports
import { ThemeProvider } from './utilities/themeContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
)
