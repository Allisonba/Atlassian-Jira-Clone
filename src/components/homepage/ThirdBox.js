import React from 'react'
import tourboard from "../images/tourboard.webp"

const ThirdBox = () => {
  return (
    <div className='thirdbox'>
         <div>
                <img src={tourboard} alt="kdk" className="tourboard"/>
            </div>
             
             <div >
            <div>
            <h3 class="heading"> Plan </h3>
            <p>Create user stories and issues, plan sprints, and distribute tasks across your software team.</p>
            </div>
            <div>
            <h3 class="heading"> Track </h3>
            <p>Prioritize and discuss your team’s work in full context with complete visibility.</p>
            </div>
            </div>
    </div>
  )
}

export default ThirdBox