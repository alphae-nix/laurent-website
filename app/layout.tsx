import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Anek_Telugu } from "next/font/google";

const AnekTelugu = Anek_Telugu({
  subsets: ["latin"],
  variable: "--font-caption",
});
export const metadata: Metadata = {
  title: "Laurent Delatte - Software Engineer",
  description: "French Developer, passionate about software development and open-source.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={cn(
          GeistSans.variable,
          GeistMono.variable,
          AnekTelugu.variable,
          "font-sans h-full bg-background text-foreground"
        )}
      >
        {children}
      </body>
    </html>
  );
}
