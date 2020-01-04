import React from "react"
import Layout from "../components/layout"

const IndexPage = () => (
  <Layout>
    <h1>Full Stack Developer</h1>
    <p>
      Hi, I'm J. Ryan Conklin. I work on the internet.
    </p>
    <ul className={'nav justify-content-center'}>
      <li className={'nav-item'}><a href="https://github.com/jryanconklin" className="icoGitHub nav-link text-dark" title="GitHub"><i className="fa fa-github"></i></a></li>
      <li className={'nav-item'}><a href="https://twitter.com/jryanconklin" className="icoTwitter nav-link text-dark" title="Twitter"><i className="fa fa-twitter"></i></a></li>
      <li className={'nav-item'}><a href="https://www.linkedin.com/in/jryanconklin/" className="icoLinkedin nav-link text-dark" title="Linkedin"><i className="fa fa-linkedin"></i></a></li>
    </ul>
  </Layout>
)

export default IndexPage
