import { Github, Linkedin } from "lucide-react";

export default function Home() {
  return (
    <>
      <header className="site-header">
        <h1>
          <a href="/">J. Ryan Conklin</a>
        </h1>
        <nav className="site-nav">
          <a href="/experience">Experience</a>
        </nav>
      </header>

      <main className="page-container">
        <section className="intro">
          <h1>UX Engineer</h1>
          <h2>Building design systems that scale</h2>
        </section>

        <hr />

        <section className="section">
          <h3 className="section-title">About</h3>
          <p>
            I create intentional interactions, both technical and personal, for companies who are starting to feel the pain of collaboration at scale.
          </p>
          <p>
            I believe creating teams and practices where work is achievable and shared, leads to a collaborative space where employees want to show up for each other and the work.
          </p>
          <p>
            Engaged, confident teams start with championing capability, encouraging curiosity, and rewarding accessibility.
          </p>
        </section>

        <hr />

        <section className="section">
          <h3 className="section-title">Connect</h3>
          <ul className="social-links">
            <li>
              <a href="https://github.com/jryanconklin" title="GitHub">
                <Github />
                <span>GitHub</span>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/jryanconklin/" title="LinkedIn">
                <Linkedin />
                <span>LinkedIn</span>
              </a>
            </li>
          </ul>
        </section>
      </main>

      <footer className="site-footer">
        <p>© 2025 J. Ryan Conklin · Built with Next.js</p>
      </footer>
    </>
  );
}
