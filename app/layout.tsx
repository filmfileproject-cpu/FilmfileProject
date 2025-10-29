import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React, { ReactNode } from "react";

// Initialize the Inter font (guaranteed to work)
const inter = Inter({ subsets: ["latin"] });

// Correct Metadata for your Filmfile app
export const metadata: Metadata = {
  title: "Filmfile - Movie Tracker",
  description: "A personal movie and series logging tool.",
};

// Define the RootLayout component
export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      {/* Apply the Inter font class to the body */}
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
