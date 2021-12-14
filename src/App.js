import React, { useState }from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import GlobalStyle from './globalStyles';
import {InfoData} from './data/InfoData'
import { SliderData } from './data/SliderData';
import Dropdown from './components/Dropdown';
import InfoSection from './components/InfoSection';




export default function App() {
  


  const [isOpen, setIsOpen] = useState(false)

  const toggle = () =>{
    setIsOpen(!isOpen)
  }

  return (
    <>
    <GlobalStyle/>
      <Navbar toggle={toggle}/>
      <Dropdown isOpen={isOpen} toggle={toggle}/>
      <Hero slides={SliderData}/>
      <InfoSection {...InfoData} />
    </>
  );
};
