import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import HomeContainer from './pages/home_container/HomeContainer';
import Bus from './pages/bus/Bus'; 
import SeatSelection from './components/SeatSelection'
import CheckoutReceipt from './components/CheckoutReceipt'
import { AboutUs, ContactUs, PrivacyPolicy, TermsAndConditions, SafetyGuarantee, Support, LuxuryBuses, Facilities } from './components/pages';


function App() {

  return (
    <>
      <Router>
        <div className='w-full min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-800 dark:text-neutral-300 flex flex-col overflow-hidden'>
          {/* Navbar */}
          <Navbar />

          {/* Home Content */}
          <Routes>
            <Route path ="/" element = {<HomeContainer/>} />
            <Route path ="/bus" element = {<Bus/>} />
            <Route path="/select-seat/:id" element={<SeatSelection />} />
            <Route path="/checkout" element={<CheckoutReceipt />} /> 
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
            <Route path="/safety" element={<SafetyGuarantee />} />
            <Route path="/support" element={<Support />} />
            <Route path="/luxury-buses" element={<LuxuryBuses />} />
            <Route path="/facilities" element={<Facilities />} />

           
          </Routes>

          {/* Footer */}
          <Footer/>

        </div>
      </Router>
    </>
  )
}

export default App
