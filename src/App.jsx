import React from 'react'
import Home from './pages/Home'
import Footer from "./components/Footer";
import { ToastContainer } from 'react-toastify';
const App = () => {
  return (
    <div>
      <Home/>
      <ToastContainer/>
      <Footer/>
    </div>
  )
}

export default App
