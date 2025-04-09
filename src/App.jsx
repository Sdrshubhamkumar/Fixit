import React from 'react'
import Home from './Components/Home.jsx'
import Repair from './Components/Repair.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SpaSalon from './Components/SpaSalon.jsx'
import Login from './Components/Login.jsx'
import RequestForm from './Components/RequestForm.jsx'
import ElectricalRepair from './Components/ElectricRepair.jsx'

const App = () => {
  return (
    <>
   
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/repair" element={<Repair />} />
          
          <Route path="/spasalon" element={<SpaSalon />} />
          <Route path="/login" element={<Login />} />
          <Route path="/electricalrepair" element={<ElectricalRepair />} />
          <Route path="/requestform" element={<RequestForm />} />
        </Routes>
      </Router>
      
     
      
    
  
   </>
  )
}

export default App
