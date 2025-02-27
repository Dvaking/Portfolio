import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { Navbar, FooterBar } from '@components';
import { AppProvider } from '@/context/AppContext';
import { SpeedInsights } from '@vercel/speed-insights/next';
import '@/styles/globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Marc MENDIA',
  description: "Marc MENDIA's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <AppProvider>
          <Navbar />
          <SpeedInsights />
          {children}
          <FooterBar />
        </AppProvider>
      </body>
    </html>
  );
}
