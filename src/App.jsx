// App.jsx
import React, { useState } from 'react'
import Home from './Components/Home.jsx'
import Repair from './Components/Repair.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SpaSalon from './Components/SpaSalon.jsx'
import Login from './Components/Login.jsx'
import RequestForm from './Components/RequestForm.jsx'
import ElectricalRepair from './Components/ElectricRepair.jsx'
import Footer from './Components/Footer.jsx'
import Header from './Components/Header.jsx'
import AboutUs from './Components/AboutUs.jsx'
import Review from './Components/Review.jsx';
import Help from './Components/Help.jsx'
import ShopDashboard from './Components/ShopDashboard.jsx'
import AddShop from './Components/AddShop.jsx'
import PrivateRoute from './Components/PrivateRoute.jsx'

const App = () => {
  const [mode, setMode] = useState('light'); // whether dark mode is enabled or not

  const toggleMode =() =>
    {
      if(mode === 'light'){
        setMode('dark');
        document.body.style.backgroundColor = '#042743';
        document.body.style.color = '#bcdffb';
      
      }
      else{
        setMode('light');
        document.body.style.backgroundColor = '#acd5f6';
        document.body.style.color = '#042743';
      
      }
    }
  
  return (
    <Router>
      <Header mode={mode} toggleMode={toggleMode} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/repair" element={<Repair />} />
        <Route path="/spasalon" element={<SpaSalon />} />
        <Route path="/login" element={<Login mode={mode}/>} />
        <Route path="/electricalrepair" element={<ElectricalRepair />} />
        <Route path="/requestform" element={<RequestForm />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
        <Route path="/about" element={<AboutUs mode={mode}/>} />
        <Route path="/review" element={<Review mode={mode}/>} />
        <Route path="/help" element={<Help mode={mode}/>} />
        <Route path="/shop-dashboard" element={<PrivateRoute><ShopDashboard /></PrivateRoute>} />
        <Route path="/add-shop" element={<PrivateRoute><AddShop /></PrivateRoute>} />
       

      </Routes>
      <Footer mode={mode}/>
    </Router>
  )
}

export default App
