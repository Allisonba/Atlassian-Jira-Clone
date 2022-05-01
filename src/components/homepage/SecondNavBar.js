import React from 'react'
// import FreeButton from './FreeButton'
import Jiralogo from "../images/Jiralogo.webp"
// import{FaChevronDown} from "react-icons/fa"

const SecondNavBar = () => {
  return (
    <div className='secondnavbar'>
      <div className="secondnavbarleft">
      <div className="jiralogo">
        <img src={Jiralogo} alt="jira"/>
      </div>

      <div className="secondnavbarli">
        <li><a href="/">Features</a></li>
        <li><a href="/">Product guide</a></li>
        <li><a href="/">Pricing</a></li>
        <li><a href="/">Enterprise</a></li>
      </div>
      </div>

      <div >
        <button className="secondnavfreebutton">Get it free</button>
      </div>

        
    </div>
  )
}

export default SecondNavBar