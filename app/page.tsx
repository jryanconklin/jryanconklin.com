import { Github, Linkedin } from "lucide-react";

export default function Home() {
  return (
    <div className="container">
      <h1>Engineering Leader</h1>
      <h2 className="pb-3">Hi, I&apos;m J. Ryan Conklin. I work on the internet.</h2>
      <div className="content">
        <p className="pb-3">
          I create intentional interactions, both technical and personal, for companies who are starting to feel the pain of collaboration at scale.
        </p>
        <p className="pb-3">
          I believe creating teams and practices where work is achievable and shared, leads to a collaborative space where employees want to show up for each other and the work.
        </p>
        <p className="pb-3">
          Engaged, confident teams start with championing capability, encouraging curiosity, and rewarding accessibility.
        </p>
      </div>
      <ul className="social-links">
        <li>
          <a
            href="https://github.com/jryanconklin"
            title="GitHub"
          >
            <Github className="icon" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/jryanconklin/"
            title="Linkedin"
          >
            <Linkedin className="icon" />
          </a>
        </li>
      </ul>
    </div>
  );
}