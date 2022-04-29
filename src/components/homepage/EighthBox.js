import React from 'react'
import one from "../images/one.webp"
import two from "../images/two.webp"
import three from "../images/three.webp"
import four from "../images/four.webp"

const EighthBox = () => {
  return (
    <div>
        <div>
            <img src={one} alt="djdh"/>
            <h4 class="heading"> Knowledge management </h4>
            <p>Transform product requirements in Confluence into a Jira Software backlog with one click.</p>
            <a href='https://google.com'>Learn more about Confluence</a>
        </div>
        <div>
            <img src={two} alt="djdh"/>
            <h4 class="heading"> Development workflow </h4>
            <p>Jira Software automatically updates issues and transitions work when code is committed in Bitbucket.</p>
            <a href='https://google.com'>Learn more about Bitbucket</a>

        </div>
        <div>
            <img src={three} alt="djdh"/>
            <h4 class="heading"> Continuous integration and deployment </h4>
            <p>Supercharge&nbsp;your CI/CD&nbsp;with Pipelines and monitor build status&nbsp;from within Jira Software.</p>
            <a href='https://google.com'>Learn more about Pipelines</a>

        </div>
        <div>
            <img src={four} alt="djdh"/>
            <h4 class="heading"> Atlassian Open DevOps </h4>
            <p>A pre-configured solution of our best-of-breed products and third-party integrations based on what high-performing software teams need to get up and running.</p>
            <a href='https://google.com'>Learn more about DevOps</a>

        </div>
    </div>
  )
}

export default EighthBox