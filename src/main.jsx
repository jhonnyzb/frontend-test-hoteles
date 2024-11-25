import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import HotelsProvider from './context/HotelsProvider.jsx';
import NotificacionProvider from './context/NotificacionProvider.jsx';
import { ToastContainer } from 'react-toastify';
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.createRoot(document.getElementById('root')).render(

  // <React.StrictMode>
    <HotelsProvider>
      <NotificacionProvider>
        <App />
        <ToastContainer />
      </NotificacionProvider>
    </HotelsProvider>
  // </React.StrictMode>

  ,
)
