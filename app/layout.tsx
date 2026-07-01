import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sumidson S Henry — Frontend Developer & Cloud Engineer",
  description:
    "Portfolio of Sumidson S Henry — a Frontend Developer and Cloud Engineer crafting beautiful digital experiences. Explore projects, services, and get in touch.",
  keywords: ["portfolio", "developer", "web development", "AWS", "cloud engineer", "Next.js"],
  authors: [{ name: "Sumidson S Henry" }],
  openGraph: {
    title: "Sumidson S Henry — Frontend Developer & Cloud Engineer",
    description: "Crafting beautiful digital experiences and scalable cloud architecture",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
