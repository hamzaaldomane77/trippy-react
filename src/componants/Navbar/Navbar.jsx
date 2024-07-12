import React from 'react'
import './NavBar.css'

export const Navbar = ({logo , navitems, btn}) => {
  return (
   <nav>
    <h1>{logo}</h1>
    <div className="items">
        <ul>
  {navitems.map((Element , index)=>{
    return(
      <li key={index}>{Element.icon}{Element.label}
      
      </li>
      
    )
  })}

        </ul>
        <button>{btn}</button>

    </div>
   </nav>
  )
}
