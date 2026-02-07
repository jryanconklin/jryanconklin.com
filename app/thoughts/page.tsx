import { getAllPosts } from "@/lib/posts";
import { Github, Linkedin } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thoughts",
  description:
    "Writing about design systems, UX engineering, and building better experiences. Thoughts on clarity, collaboration, and making work more human.",
  openGraph: {
    title: "Thoughts | J. Ryan Conklin",
    description:
      "Writing about design systems, UX engineering, and building better experiences. Thoughts on clarity, collaboration, and making work more human.",
    url: "https://jryanconklin.com/thoughts",
  },
};

export default function Thoughts() {
  const posts = getAllPosts();

  return (
    <>
      <header className="site-header">
        <h1>
          <a href="/">J. Ryan Conklin</a>
        </h1>
        <nav className="site-nav">
          <a href="/experience">Experience</a>
          <a href="/thoughts">Thoughts</a>
        </nav>
      </header>

      <main className="page-container">
        <section className="intro">
          <h1>Thoughts</h1>
          <p>
            Writing about design systems, UX engineering, and building better
            experiences.
          </p>
        </section>

        <hr />

        <section className="section">
          {posts.length === 0 ? (
            <p>No posts yet. Check back soon!</p>
          ) : (
            <div className="posts-list">
              {posts.map((post) => (
                <article key={post.slug} className="post-item">
                  <h2>
                    <a href={`/thoughts/${post.slug}`}>{post.title}</a>
                  </h2>
                  <time className="post-date">{post.date}</time>
                  <p>{post.description}</p>
                </article>
              ))}
            </div>
          )}
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
              <a
                href="https://www.linkedin.com/in/jryanconklin/"
                title="LinkedIn"
              >
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