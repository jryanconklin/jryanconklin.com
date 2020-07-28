import React from "react"
import Layout from "../components/layout"

const IndexPage = () => (
  <Layout>
    <h1>Full Stack Developer</h1>
    <p className={"pb-3"}>Hi, I'm J. Ryan Conklin. I work on the internet.</p>
    <ul className={"flex justify-center"}>
      <li className={"px-4"}>
        <a
          href="https://github.com/jryanconklin"
          className="icoGitHub text-purple-700"
          title="GitHub"
        >
          <i className="fa fa-github"></i>
        </a>
      </li>
      <li className={"px-4"}>
        <a
          href="https://twitter.com/jryanconklin"
          className="icoTwitter text-purple-700"
          title="Twitter"
        >
          <i className="fa fa-twitter"></i>
        </a>
      </li>
      <li className={"px-4"}>
        <a
          href="https://www.linkedin.com/in/jryanconklin/"
          className="icoLinkedin text-purple-700"
          title="Linkedin"
        >
          <i className="fa fa-linkedin"></i>
        </a>
      </li>
    </ul>
  </Layout>
)

export default IndexPage
