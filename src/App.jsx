import { FiAlertTriangle } from "react-icons/fi";
import { FiCamera } from "react-icons/fi";
import { Navbar } from './componants/Navbar/Navbar'
import './componants/Navbar/Navbar';
import Hero from "./componants/Hero/Hero";
import Homebg from  './assets/about-img.jpg'
import { PupularDestinations } from "./componants/PupularDestinations/PupularDestinations";


import "./App.css"
import { SecationCard } from "./componants/SecationCard/SecationCard";



function App() {
 const navitems = [{ label :"Home" , icon :<FiAlertTriangle />} , {label :"About" , icon: <FiCamera />} , "contact" , "Service" ,]
  return (
    <>
    <Navbar logo="Trippy" navitems={navitems} btn="sign up"/>
    <Hero image={Homebg} title="your jouney your story"  dec ="choose your story and connect your"
    btn="Travel now"/>
   <PupularDestinations  />
<SecationCard />
    </>
  )
}

export default App
 