import React from 'react'
import FreeButton  from './FreeButton'
import header from "../images/header.webp"

const FirstBox = () => {
  return (
    <div className='firstbox'>
        <div className='left'>
        <h1 class="heading"> The #1 software development tool used by agile teams </h1>
        <FreeButton />
        </div>
        <div className='right'>
            <img src={header} alt="ath" className='header'/>
 
        </div>
    </div>
  )
}

export default FirstBox