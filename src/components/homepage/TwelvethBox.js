import React from 'react'
import access from "../images/access.webp"
import premium from "../images/premium.webp"

const TwelvethBox = () => {
  return (
    <div>
        <div>
            <img src={access} alt="mdkk"/>
            <h2 class="heading"> Atlassian Access </h2>
            <p>Sleep soundly with enhanced administration and security backed by SAML SSO, enforced 2-step verification, automated user provisioning, and more.</p>
            <button>Learn more</button>
        </div>
        <div>
            <img src={premium} alt="skdk"/>
            <h2 class="heading"> Jira Software Premium </h2>
            <p>Ensure your team and organization are ready to&nbsp;scale with&nbsp;99.9% uptime SLAs, unlimited storage,&nbsp;24x7 Premium Support, and more.</p>
            <button>Learn more</button>
            </div>
    </div>
  )
}

export default TwelvethBox