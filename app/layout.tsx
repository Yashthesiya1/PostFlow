import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "XyFlow AI - Turn any URL into a viral social campaign",
  description: "Automated AI workflows that scrape, refine, and post content across X, LinkedIn, and Instagram. Connect your platforms, set your logic, and let the AI do the heavy lifting.",
  keywords: ["AI", "social media automation", "content marketing", "workflow automation", "X", "LinkedIn", "Instagram"],
  authors: [{ name: "XyFlow AI" }],
  openGraph: {
    title: "XyFlow AI - Your Content, Everywhere, Automatically",
    description: "The all-in-one AI workflow engine that transforms web content into high-performing social posts.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
