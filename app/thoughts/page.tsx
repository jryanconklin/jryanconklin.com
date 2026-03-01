import { getAllPosts } from "@/lib/posts"
import type { Metadata } from "next"
import SiteHeader from "@/components/SiteHeader"
import SiteFooter from "@/components/SiteFooter"
import SocialLinks from "@/components/SocialLinks"

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
}

export default function Thoughts() {
  const posts = getAllPosts()

  return (
    <>
      <SiteHeader />

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

        <SocialLinks />
      </main>

      <SiteFooter />
    </>
  )
}
