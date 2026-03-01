import { getPostBySlug, getAllPostSlugs } from "@/lib/posts"
import type { Metadata } from "next"
import SiteHeader from "@/components/SiteHeader"
import SiteFooter from "@/components/SiteFooter"
import SocialLinks from "@/components/SocialLinks"

export async function generateStaticParams() {
  const slugs = getAllPostSlugs()
  return slugs.map((slug) => ({
    slug: slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)

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
  }
}

export default async function Post({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  return (
    <>
      <SiteHeader />

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

        <SocialLinks />
      </main>

      <SiteFooter />
    </>
  )
}
