import React from "react";
import Hero from "./components/hero";
import About from "./components/about";
import Team from "./components/team";
import Stats from "./components/stats";
import ContactForm from "./components/contact";

 const Home: React.FC = ()=>{
    return(
        <div>
            <Hero/>

            <About/>

            <Team/>

            <Stats/>

            <ContactForm/>
            
        </div>
    );
 };
 export default Home;