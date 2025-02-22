import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Status Page",
  description: "Status Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="relative h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-black">
          {/* <div className="absolute z-0 inset-0 "></div> */}
          <div className="absolute -z-10 inset-0 bg-noise opacity-10"></div>

          {children}

        </div>
      </body>
    </html>
  );
}
