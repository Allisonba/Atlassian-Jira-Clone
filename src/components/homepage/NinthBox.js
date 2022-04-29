import React from 'react'
import roadmap from "../images/roadmap.webp"

const NinthBox = () => {
  return (
    <div>
        <div>
        <h2 class="heading"> Connect your team's work to your product roadmap </h2>
        <p>Ship faster and more reliably by building smarter plans for your team and for your organization.</p>
        <button>Learn more about roadmaps</button>
        </div>
        <div>
            <img src={roadmap} alt="jjg"/>
      </div>


    </div>
  )
}

export default NinthBox