import type { Metadata } from "next"
import SiteHeader from "@/components/SiteHeader"
import SiteFooter from "@/components/SiteFooter"
import SocialLinks from "@/components/SocialLinks"

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Over a decade of UX engineering and design systems leadership. Led teams at Leap Event Technology, Cardinal Financial, and built design systems at ThinkShout, Phase2, and Chapter Three.",
  openGraph: {
    title: "Experience | J. Ryan Conklin",
    description:
      "Over a decade of UX engineering and design systems leadership. Led teams at Leap Event Technology, Cardinal Financial, and built design systems at ThinkShout, Phase2, and Chapter Three.",
    url: "https://jryanconklin.com/experience",
  },
}

export default function Experience() {
  return (
    <>
      <SiteHeader />

      <main className="page-container">
        <section className="intro">
          <h1>Experience</h1>
          <p>
            I'm a Front-End Engineer who loves solving problems where design and
            development meet. Over the past decade, I've led design system
            initiatives, mentored engineers, and helped organizations build
            faster, ship more consistently, and create better experiences for
            the people building products.
          </p>
          <p>
            I'm at my best helping others find clarity in complexity, whether
            that's untangling a design system, guiding technical decisions, or
            turning big ideas into practical solutions.
          </p>
        </section>

        <hr />

        <section className="section">
          <div className="experience-item">
            <div className="experience-header">
              <h3>UX Engineer</h3>
              <p className="experience-meta">
                Leap Event Technology · Nov 2025 - Present
              </p>
            </div>
            <p>
              Building and implementing design systems across the product suite.
            </p>
          </div>

          <div className="experience-item">
            <div className="experience-header">
              <h3>Director & Team Lead, UI/UX Engineering</h3>
              <p className="experience-meta">
                Cardinal Financial Company · Jun 2022 - Mar 2024
              </p>
            </div>
            <p>
              Led design system development and cross-functional engineering
              teams. Built enterprise UI component libraries with TypeScript and
              design tokens. Mentored technical talent and established front-end
              engineering practices.
            </p>
          </div>

          <div className="experience-item">
            <div className="experience-header">
              <h3>Senior Developer</h3>
              <p className="experience-meta">
                Chapter Three · Jan 2022 - Jun 2022
              </p>
            </div>
            <p>
              Full-stack development with Drupal and Next.js for agency clients.
            </p>
          </div>

          <div className="experience-item">
            <div className="experience-header">
              <h3>Senior Front-End Developer</h3>
              <p className="experience-meta">
                ThinkShout · Jun 2021 - Nov 2021
              </p>
            </div>
            <p>
              Built the organization's first design system using Web Components
              and Storybook. Implemented modern tooling with design tokens and
              CSS Custom Properties.
            </p>
            <p className="project-note">
              <strong>Featured:</strong>{" "}
              <a
                href="https://www.accessjewishcleveland.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Access Jewish Cleveland
              </a>
            </p>
          </div>

          <div className="experience-item">
            <div className="experience-header">
              <h3>Senior Developer</h3>
              <p className="experience-meta">Phase2 · Jan 2017 - Jun 2021</p>
            </div>
            <p>
              Agency work across healthcare, financial, and enterprise sectors.
              Front-end development, design systems, and build tooling with
              Drupal, React, and Vue.
            </p>
            <p className="project-note">
              <strong>Featured:</strong>{" "}
              <a
                href="https://urban-institute.medium.com/the-evolution-of-the-urban-institutes-design-library-7c96b1c2aa16"
                target="_blank"
                rel="noopener noreferrer"
              >
                Urban Institute Design Library
              </a>
            </p>
          </div>
        </section>

        <hr />

        <SocialLinks />
      </main>

      <SiteFooter />
    </>
  )
}
