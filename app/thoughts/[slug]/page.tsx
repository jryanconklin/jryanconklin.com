import { getPostBySlug, getAllPostSlugs } from "@/lib/posts";
import { Github, Linkedin } from "lucide-react";
import type { Metadata } from "next";

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url: `https://jryanconklin.com/thoughts/${slug}`,
      publishedTime: post.date,
    },
  };
}

export default async function Post({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

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
        <article className="post">
          <header className="post-header">
            <h1>{post.title}</h1>
            <time className="post-date">{post.date}</time>
          </header>

          <div
            className="post-content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <footer className="post-footer">
            <a href="/thoughts" className="back-link">
              ← Back to all thoughts
            </a>
          </footer>
        </article>

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