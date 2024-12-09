
import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Section from "./Components/Section/Section";
import Sectionb from "./Components/Sectionb/Sectionb";
import Sectionc from "./Components/Sectionb/Sectionc";
import Achats from "./Components/Achats/Achats";
import Sectiond from "./Components/Sectiond/Sectiond";
import Footer from "./Components/Footer/Footer";



function App() {
  return (
   
      <div className="">

        {/**   */}
        <Navbar></Navbar>
        <Section></Section>
        <Sectionb></Sectionb>
        <Sectionc></Sectionc>
        <Achats></Achats>
        <Sectiond></Sectiond>
        <Footer></Footer>
      
     
      
    </div>

   
  );
}

export default App;
