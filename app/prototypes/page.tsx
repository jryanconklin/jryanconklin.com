import fs from "fs"
import path from "path"
import type { Metadata } from "next"
import SiteHeader from "@/components/SiteHeader"
import SiteFooter from "@/components/SiteFooter"

export const metadata: Metadata = {
  title: "Prototypes",
  robots: { index: false, follow: false },
}

function getPrototypes(): { name: string; href: string }[] {
  const dir = path.join(process.cwd(), "public", "prototypes")
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".html"))
    .map((f) => ({
      name: f
        .replace(/\.html$/, "")
        .replace(/[-_]/g, " ")
        .replace(/\b\w/g, (c) => c.toUpperCase()),
      href: `/prototypes/${f}`,
    }))
}

export default function Prototypes() {
  const prototypes = getPrototypes()

  return (
    <>
      <SiteHeader />

      <main className="page-container">
        <section className="intro">
          <h1>Prototypes</h1>
          <p>Work in progress. Not for public distribution.</p>
        </section>

        <hr />

        <section className="section">
          {prototypes.length === 0 ? (
            <p>No prototypes yet.</p>
          ) : (
            <ul className="posts-list">
              {prototypes.map((p) => (
                <li key={p.href}>
                  <a href={p.href}>{p.name}</a>
                </li>
              ))}
            </ul>
          )}
        </section>
      </main>

      <SiteFooter />
    </>
  )
}
