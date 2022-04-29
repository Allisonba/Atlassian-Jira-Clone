import React from 'react'
import privacy from "../images/privacy.webp"
import security from "../images/security.webp"
import shield from "../images/shield.webp"

const ThirteenthBox = () => {
  return (
    <div>
        <div>
            <img src={privacy} alt="ajdh"/>
            <h4 class="heading"> Privacy </h4>
            <p>Jira Software invested in&nbsp;<a href="/trust/privacy" data-event="clicked" data-uuid="729fac0a-ca" data-event-component="linkButton" data-event-container="imageHeadingTextBlock" data-schema-version="1" data-product-key="jiraSoftware">GDPR and Privacy Shield</a>&nbsp;to ensure all data is handled with&nbsp;care.</p>

        </div>
        <div>
            <img src={security} alt="jfh"/>
            <h4 class="heading"> Security </h4>
            <p>Jira Software safeguards your data with controls like permissions and&nbsp;<a href="/trust/security/security-practices#faq-5fd9f2cf-d7c7-40fa-af1f-854e2d9f3f48" data-event="clicked" data-uuid="0cc5e2d5-bd" data-event-component="linkButton" data-event-container="imageHeadingTextBlock" data-schema-version="1" data-product-key="jiraSoftware">encryption in transit and at rest</a>.</p>
        </div>
        <div>
            <img src={shield} alt="hgh"/>
            <h4 class="heading"> Compliance </h4>
            <p>Verify Jira Software's security with <a href="/software/jira/security" data-event="clicked" data-uuid="0a2cccb9-20" data-event-component="linkButton" data-event-container="imageHeadingTextBlock" data-schema-version="1" data-product-key="jiraSoftware">SOC2, SOC3, ISO 27001, ISO 27018, PCI DSS, and more</a>.</p>
            </div>
    </div>
  )
}

export default ThirteenthBox