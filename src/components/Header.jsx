import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import BusinessCardsSection from './BusinessCardsSection ';


const Header = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <BusinessCardsSection></BusinessCardsSection>
      
    </div>
  );
};

export default Header;
