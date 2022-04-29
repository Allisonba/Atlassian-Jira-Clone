import React from 'react'
import FreeButton from './FreeButton'
import Jiralogo from "../images/Jiralogo.webp"
import{FaChevronDown} from "react-icons/fa"

const SecondNavBar = () => {
  return (
    <div className='secondnavbar'>
      <div className="secondnavb">
      <div className='jiralo'>
      <img src={Jiralogo} alt="ddj" className='jiralogo'/>
      <FaChevronDown className="arrowdown"/>

      </div>
      <div>
      <FreeButton/>
      </div>
      </div>
        
    </div>
  )
}

export default SecondNavBar