// App.jsx
// import React, { useState, lazy, Suspense } from 'react';

import React, { useState, lazy, Suspense } from 'react'
import Home from './Components/Home.jsx'
import Repair from './Components/Repair.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SpaSalon from './Components/SpaSalon.jsx'
import Login from './Components/Login.jsx'
import ElectricalRepair from './Components/ElectricRepair.jsx'
import Footer from './Components/Footer.jsx'
import Header from './Components/Header.jsx'
import AboutUs from './Components/AboutUs.jsx'
import Review from './Components/Review.jsx';
import Help from './Components/Help.jsx'
import ShopDashboard from './Components/ShopDashboard.jsx'
import AddShop from './Components/AddShop.jsx'
import PrivateRoute from './Components/PrivateRoute.jsx'
import SelectShopPage from './Components/SelectShopPage.jsx'
import BookingForm from './Components/BookingForm.jsx'
import ShopDetails from './Components/ShopDetails.jsx'
import CarWashServices from './Components/CarWashServices.jsx'
import CleaningServices from './Components/CleaningServices.jsx'
import ContactUs from './Components/ContactUs.jsx'
import ElectricRepair from './Components/ElectricRepair.jsx'
import PestsControl from './Components/PestsControl.jsx'
import PrivacyPolicy from './Components/PrivacyPolicy.jsx'
import TermsAndConditions from './Components/TermsAndConditions.jsx'
import ElectricityService from './Components/ElectricityService.jsx'
import PlumbingServices from './Components/PlumbingServices.jsx'
import FurnitureServices from './Components/FurnitureServices.jsx'

// Lazy load chatbot for performance
const Chatbot = lazy(() => import('./Components/Chatbot'));

   
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
        <Route path="*" element={<h1>404 Not Found</h1>} />
        <Route path="/about" element={<AboutUs mode={mode}/>} />
        <Route path="/review" element={<Review mode={mode}/>} />
        <Route path="/help" element={<Help mode={mode}/>} />
        <Route path="/shop-dashboard" element={<PrivateRoute><ShopDashboard /></PrivateRoute>} />
        <Route path="/add-shop" element={<PrivateRoute><AddShop /></PrivateRoute>} />
        <Route path="/select-shop" element={<SelectShopPage />} />
        <Route path="/booking/:shopId" element={<BookingForm />} />
        <Route path="/shop-details/:shopId" element={<ShopDetails />} />
        <Route path="/car-wash-services" element={<CarWashServices />} />
        <Route path ="/cleaning" element={<CleaningServices />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/electrical-repair" element={<ElectricRepair mode={mode} />} />
        <Route path= "Pests Control" element={<PestsControl mode={mode} />} />
        <Route path= "Privacy Policy" element={<PrivacyPolicy mode={mode} />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions mode={mode}/>} />
        <Route path ="Electricity-service" element={<ElectricityService mode={mode} />} />
        <Route path="Plumber-service" element={<PlumbingServices />} />
        <Route path="furniture-service" element={<FurnitureServices />} />
      </Routes>

         {/* Optimized Chatbot */}
      <Suspense fallback={<div>Loading chatbot...</div>}>
        <Chatbot />
      </Suspense>

      <Footer mode={mode}/>
    </Router>
  )
} 

export default App
