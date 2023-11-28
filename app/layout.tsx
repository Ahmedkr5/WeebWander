import type { Metadata } from "next";
import "./globals.css";
import { DM_Sans } from "next/font/google";
import { Footer, Hero, NavBar } from "@/components";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Weeb Wander",
  description:
    "Discover your next favorite anime with Weeb Wander. Navigate the world of anime when you're unsure what to watch.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={` ${dmSans.className}`}>
        <NavBar />
        <main className="max-w-7xl mx-auto bg-body">
          <Hero />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
