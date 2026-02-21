import type { Metadata } from 'next';
import './globals.css';
import { Inter, Playfair_Display } from 'next/font/google';
import { Header } from '@/components/Header';
import { brandIdentity } from '@/data/config';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-serif' });

export const metadata: Metadata = {
    title: `Antalya Modern Mobilya & İç Mimari - ${brandIdentity.name}`,
    description: 'Antalya Kepez ve Masadağı bölgesinde modern mobilya, özgün tasarım ve kişiye özel iç mimari çözümleri. Saba Konsept ile evinize zarafet katın.',
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FurnitureStore",
    "name": brandIdentity.name,
    "image": "https://sabakonsept.com/images/foto1.jpeg",
    "telephone": `+${brandIdentity.phoneLink}`,
    "priceRange": "₺₺₺",
    "address": {
        "@type": "PostalAddress",
        "streetAddress": brandIdentity.address.streetAddress,
        "addressLocality": brandIdentity.address.addressLocality,
        "addressRegion": brandIdentity.address.addressRegion,
        "postalCode": brandIdentity.address.postalCode,
        "addressCountry": brandIdentity.address.addressCountry
    },
    "geo": {
        "@type": "GeoCoordinates",
        "latitude": brandIdentity.geo.latitude,
        "longitude": brandIdentity.geo.longitude
    },
    "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:00",
        "closes": "20:00"
    }
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="tr" className={`${inter.variable} ${playfair.variable}`}>
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </head>
            <body className="antialiased font-sans bg-stone-50 text-stone-800">
                <Header />
                <main className="min-h-screen">
                    {children}
                </main>
            </body>
        </html>
    );
}
