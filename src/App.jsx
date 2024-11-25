import React, { useContext } from 'react'
import { HashRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify';
import Login from './pages/Login'
import Admin from './pages/Admin'

import "react-toastify/dist/ReactToastify.css";

const App = () => {

  return (
      <>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="admin" element={<Admin />} />
            <Route path="/*" element={<Navigate to='/' />} />
          </Routes>
        </Router>
        <ToastContainer autoClose={2000} />
      </>
  )
}

export default App