import React from "react"
import Layout from "../components/layout"

const IndexPage = () => (
  <Layout>
    <div className={"container w-8/12 mx-auto"}>
      <h1>Engineering Leader</h1>
      <h2 className={"pb-3"}>Hi, I'm J. Ryan Conklin. I work on the internet.</h2>
      <div className={"flex flex-col justify-center items-center"}>
        <p className={"pb-3"}>
          I create intentional interactions, both technical and personal, for companies who are starting to feel the pain of collaboration at scale.
        </p>
        <p className={"pb-3"}>
          I believe creating teams and practices where work is achievable and shared, leads to a collaborative space where employees want to show up for each other and the work.
        </p>
        <p className={"pb-3"}>
          Engaged, confident teams start with championing capability, encouraging curiosity, and rewarding accessibility.
        </p>
      </div>
      <ul className={"flex justify-center"}>
        <li className={"px-4"}>
          <a
            href="https://github.com/jryanconklin"
            className="icoGitHub"
            title="GitHub"
          >
            <i className="fa fa-github"></i>
          </a>
        </li>
        <li className={"px-4"}>
          <a
            href="https://www.linkedin.com/in/jryanconklin/"
            className="icoLinkedin"
            title="Linkedin"
          >
            <i className="fa fa-linkedin"></i>
          </a>
        </li>
      </ul>
    </div>
  </Layout>
)

export default IndexPage
