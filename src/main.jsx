import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { AuthContextProvider } from './context/AuthContext'
import { UserAuthContextProvider } from './context/UserAuthContext'
import './index.css'
import { ThemeProvider } from "./context/ThemeContext";
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
      <UserAuthContextProvider>
          <ThemeProvider>
        <App />
        </ThemeProvider>
      </UserAuthContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
)
