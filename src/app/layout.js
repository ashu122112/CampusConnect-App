import localFont from "next/font/local";
import "./globals.css";
import Head from 'next/head';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "campussConnect",
  description: "Smart Campus Connect is an innovative platform designed to enhance communication and resource sharing within educational institutions, specifically targeting students, faculty, and staff",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        {/* You can add other favicons for different sizes and formats if needed */}
        {/* <link rel="icon" href="/favicon-32x32.png" sizes="32x32" type="image/png" /> */}
        {/* <link rel="icon" href="/favicon-16x16.png" sizes="16x16" type="image/png" /> */}
      </Head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}