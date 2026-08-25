import type { Metadata } from 'next';
import { Manrope, Raleway } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navigation/Navbar';
import Footer from '@/components/navigation/Footer';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import SmoothScroll from '@/components/animations/SmoothScroll';
import Analytics from '@/components/Analytics';

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
});

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-raleway',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'MBH Events | Turning Moments into Legacy',
    template: '%s | MBH Events',
  },
  description:
    'MBH Events is a premium full-service event management company delivering world-class corporate events, luxury weddings, and unforgettable experiences. From concept to completion.',
  keywords: [
    'event management',
    'corporate events',
    'luxury weddings',
    'event planning',
    'Dubai events',
    'event production',
    'brand activations',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mbhevents.com',
    siteName: 'MBH Events',
    title: 'MBH Events | Turning Moments into Legacy',
    description:
      'Premium full-service event management — corporate events, luxury weddings, production, and experiences delivered with excellence.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'MBH Events - Turning Moments into Legacy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MBH Events | Turning Moments into Legacy',
    description:
      'Premium full-service event management — corporate events, luxury weddings, and unforgettable experiences.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${manrope.variable} ${raleway.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        {/* Schema.org LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'MBH Events',
              description:
                'Full-service event management company delivering corporate events, luxury weddings, and premium experiences.',
              url: 'https://mbhevents.com',
              telephone: '+971501234567',
              email: 'hello@mbhevents.com',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Dubai',
                addressRegion: 'Dubai',
                addressCountry: 'AE',
              },
              sameAs: [],
            }),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-mbh-black text-mbh-white font-[family-name:var(--font-manrope)]">
        <SmoothScroll>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppButton />
          <Analytics />
        </SmoothScroll>
      </body>
    </html>
  );
}
