import React from 'react'
import Atlassian_horizontal from "../images/Atlassian_horizontal.webp"
import{FaChevronDown} from "react-icons/fa"
import {FaSearch} from "react-icons/fa"
import {FaUserCircle} from "react-icons/fa"


const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbarleft">
        <div className="logo">
            <img src={Atlassian_horizontal} alt="logo"/>
        </div>

        <div>
          <ul>
                <input type="checkbox" id="checklist"/>
                <label for="checklist" className="hamburger">{"\u2630"}</label>

            <div className="menu menu1">
            
                <li><a href="/">Products<FaChevronDown className="icons navicons"/></a></li>
                <li><a href="/">For teams<FaChevronDown className="icons navicons"/></a></li>
                <li><a href="/">Support<FaChevronDown className="icons navicons"/></a></li>
                
            </div>
            </ul>
            </div>

        </div>

       
        

        <div className="navbarright">
        <div className=" men menu" >
          <div className="menu con">
          <li><a href="/">Buy now</a></li>
          <li><a href="/"><FaSearch className="navbarrighticon"/></a></li>
          </div>
          <div className="menu">
          <li><a href="/"><FaUserCircle/><span className="accountspan">My account</span><FaChevronDown className="navicons"/></a></li>

          </div>
        
       </div>
        </div>
       


    


     
    </div>
  )
}

export default Navbar