import React from 'react'
import Atlassian_horizontal from "../images/Atlassian_horizontal.webp"
import {FaSearch} from "react-icons/fa"
import {FaBars} from "react-icons/fa"


const Navbar = () => {
  return (
    <div className='navbar'>

       <a href='https://google.com'><img src={Atlassian_horizontal} alt="ghh" className='Atlas_logo' /></a>

       <div >
         <ul className='navleft'>
           <li className='icon'><FaSearch className='icons'/></li> 
           <li className='icon ico'><FaBars className='icons'/></li>
         </ul>
       </div>
     
    </div>
  )
}

export default Navbar