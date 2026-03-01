import SiteHeader from "@/components/SiteHeader"
import SiteFooter from "@/components/SiteFooter"
import SocialLinks from "@/components/SocialLinks"

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main className="page-container">
        <section className="intro">
          <h1>UX Engineer</h1>
          <h2>Building design systems that scale</h2>
        </section>

        <hr />

        <section className="section">
          <h3 className="section-title">About</h3>
          <p>
            I create intentional interactions, both technical and personal, for
            companies who are starting to feel the pain of collaboration at
            scale.
          </p>
          <p>
            I believe creating teams and practices where work is achievable and
            shared, leads to a collaborative space where employees want to show
            up for each other and the work.
          </p>
          <p>
            Engaged, confident teams start with championing capability,
            encouraging curiosity, and rewarding accessibility.
          </p>
        </section>

        <hr />

        <SocialLinks />
      </main>

      <SiteFooter />
    </>
  )
}
