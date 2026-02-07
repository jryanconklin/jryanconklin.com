import { Github, Linkedin } from "lucide-react";

export default function Home() {
  return (
    <main className="page-container">
      <section className="intro">
        <h1>J. Ryan Conklin</h1>
        <h2>UX Engineer</h2>
      </section>

      <section className="section">
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

      <ul className="social-links">
        <li>
          <a
            href="https://github.com/jryanconklin"
            title="GitHub"
          >
            <Github />
            <span>GitHub</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/jryanconklin/"
            title="LinkedIn"
          >
            <Linkedin />
            <span>LinkedIn</span>
          </a>
        </li>
      </ul>
    </main>
  );
}