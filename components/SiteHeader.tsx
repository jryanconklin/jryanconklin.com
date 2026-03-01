import { Link } from "@froglet/ui"

export default function SiteHeader() {
  return (
    <header className="site-header">
      <h1>
        <Link href="/">J. Ryan Conklin</Link>
      </h1>
      <nav className="site-nav">
        <Link href="/experience">Experience</Link>
        <Link href="/thoughts">Thoughts</Link>
      </nav>
    </header>
  )
}
