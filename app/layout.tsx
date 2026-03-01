import type { Metadata } from "next"
import "@froglet/ui/styles"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL("https://jryanconklin.com"),
  title: {
    default: "J. Ryan Conklin - UX Engineer",
    template: "%s | J. Ryan Conklin",
  },
  description:
    "UX Engineer building design systems that scale. Over a decade of experience leading teams, mentoring engineers, and creating better digital experiences.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jryanconklin.com",
    siteName: "J. Ryan Conklin",
    title: "J. Ryan Conklin - UX Engineer",
    description:
      "UX Engineer building design systems that scale. Over a decade of experience leading teams, mentoring engineers, and creating better digital experiences.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
