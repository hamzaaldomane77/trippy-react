
import './PupularDestinations.css'

import PopularContinar from '../PopularContinar/PopularContinar'
export const PupularDestinations = () => {
  return (
    <div className='popular'> 
    <div className='titel'>
    <h1>Pupular Destinations</h1>
    <p>Tours dive you the </p>
    <PopularContinar titel="Hamza" dec="lorem" firstimag="./1.jpg" secimag="./2.jpg" /> 
    <PopularContinar titel="Ha" dec="lorem" firstimag="./3.jpg" secimag="./4.jpg" reverse={"reverse"} /> 
   
    </div>
    </div>
   

  )
}
