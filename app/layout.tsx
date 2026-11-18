import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";

const font = Inter_Tight({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Project Flow",
  description:
    "Submit project requirements, keep your requests in one secure workspace, and follow each project from first conversation to completion.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
