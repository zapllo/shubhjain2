import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Launch at Scale - Reverse Funnels Workshop",
  description: "Join Shubh's exclusive workshop on Reverse Funnels and learn how to scale your business to new heights. Limited seats available.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${instrumentSans.variable} antialiased`}
        style={{ fontFamily: 'var(--font-instrument-sans), sans-serif' }}
      >
        {children}
      </body>
    </html>
  );
}