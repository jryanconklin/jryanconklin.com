import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "J. Ryan Conklin",
  description: "Engineering Leader",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="layout">
        <div>{children}</div>
      </body>
    </html>
  );
}