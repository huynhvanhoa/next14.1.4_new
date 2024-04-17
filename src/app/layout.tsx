import "@/styles/globals.css";
import "@/styles/styleTailwind.css";

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Home",
  description: "Generated by Home",
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