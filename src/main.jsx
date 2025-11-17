import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google'
import ContextShare from './contextAPI/ContextShare.jsx'
import AuthContext from './contextAPI/AuthContext.jsx'

const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <GoogleOAuthProvider clientId={clientId}><ContextShare>
      <AuthContext><App /></AuthContext>
      </ContextShare></GoogleOAuthProvider>
    </BrowserRouter>
  </StrictMode>,
)
