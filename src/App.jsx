import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';

import Footer from './components/Footer';
import Navbar from './components/Navbar';
import './App.css';
import BusinessCardsSection from './components/BusinessCardsSection ';
import CustomSection from './components/CustimSection';
import CasaServiceSection from './components/CustimSection';
import HowItWorksSection from './components/HowItWorksSection';
import WhyCasaDifferent from './components/WhyCasaDifferent';
import Pricing from './components/Pricing';
import ContactSection from './components/ContactSection';
import CTASection from './components/CTASection';
import CustomerReviews from './components/CustomerReviews';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ContactSectionOverlapping from './components/ContactSection';


export default function App() {
  return (
    <div >
     <Header></Header>
      <CasaServiceSection></CasaServiceSection>
      <HowItWorksSection></HowItWorksSection>
      <WhyCasaDifferent></WhyCasaDifferent>
      <CustomerReviews></CustomerReviews>
    <Pricing></Pricing>
   <ContactSectionOverlapping></ContactSectionOverlapping>
    <CTASection></CTASection>
   
      <Footer></Footer>
     
    </div>
  );
}
