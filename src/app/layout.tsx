import type { Metadata } from 'next';
import { Geist, Rubik } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const rubik = Rubik({
  variable: '--font-rubik',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Bookmark Landing Page',
  description: 'Bookmark Landing Page',
  icons: '/favicon-32x32.png',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${geistSans.variable} ${rubik.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
