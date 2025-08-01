import GoogleTagManager from "@/components/GTM";
import { Inter, Caveat } from 'next/font/google';
import './globals.css';
import './output.css';
import './styles.scss';
import Header from '../components/header';
import Footer from '../components/footer';
import Modal from "@/components/modal";
import { ModalProvider } from "@/components/modalcontext";
import Breadcrumbs from "@/components/Breadcrumbs";
import {Suspense} from "react";

const interSans = Inter({
    variable: '--font-inter-sans',
    subsets: ['latin'],
});

const caveatSans = Caveat({
    variable: '--font-caveat-sans',
    subsets: ['latin'],
});

export const metadata = {
    title: "Сделать визу для белорусов - Запись на подачу документов в Visa Vam",
    description: "Визы ЕС, Китай, Америку и Англию в Visa Vam. ✓ Визовая поддержка быстро и надежно. ✓ Помощь о оформлении документов на визу. ✓ Сделать визу срочно. ✓ Онлайн запись. ✓ Доступные цены.",
    alternates: {
        canonical: "https://visavampro.by",
    },
    openGraph: {
        title: "Сделать визу для белорусов - Запись на подачу документов в Visa Vam",
        description: "Визы ЕС, Китай, Америку и Англию в Visa Vam. ✓ Визовая поддержка быстро и надежно. ✓ Помощь о оформлении документов на визу. ✓ Сделать визу срочно. ✓ Онлайн запись. ✓ Доступные цены.",
        url: "https://visavampro.by",
        type: "website",
        siteName: "VISA VAM",
        images: [
            // Existing images from the example
            {
                url: "https://visavampro.by/visa-banner-new.png",
                width: 1000,
                height: 1000,
                alt: "Оформление виз с VisaVam.by – Легко и Доступно",
            },
            {
                url: "https://visavampro.by/visabanner-f.svg",
                width: 1000,
                height: 1000,
                alt: "Оформление виз с VisaVam.by – Легко и Доступно",
            },
            {
                url: "https://visavampro.by/nav-icon.png",
                width: 8,
                height: 8,
                alt: "Иконка навигации",
            },
            // New images from HomePage
            {
                url: "https://visavampro.by/check.svg",
                width: 24,
                height: 24,
                alt: "Иконка преимущества работы с VisaVam.by",
            },
            {
                url: "https://visavampro.by/banner-hero.svg",
                width: 840,
                height: 802,
                alt: "Оформление виз с VisaVam.by – Легко и Доступно (десктопный баннер)",
            },
            {
                url: "https://visavampro.by/main-m.svg",
                width: 840,
                height: 802,
                alt: "Оформление виз с VisaVam.by – Легко и Доступно (мобильный баннер)",
            },
        ],
    },
};

const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "VISA VAM",
    "image": "https://visavampro.by/new-logo.svg",
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "пр. Победителей 17, офис 1204",
        "addressLocality": "Минск",
        "addressRegion": "Минская область",
        "postalCode": "220004",
        "addressCountry": "BY"
    },
    "telephone": "+375 29 68 00 620",
    "email": "info@visavam.by",
    "openingHours": "Пн-пт: 09:00-19:00, Сб: 10:00-14:00"
};

export default function RootLayout({ children }) {
    return (
        <html lang="ru">
        <head>
            <script type="application/ld+json">
                {JSON.stringify(structuredData)}
            </script>
            <script
                noModule
                src="https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/7.12.1/polyfill.min.js"
            />
            <script
                dangerouslySetInnerHTML={{
                    __html: `
              if ('noModule' in HTMLScriptElement.prototype) {
                document.write('<script type="module">window.__skipPolyfills=true</'+'script>');
              }
            `,
                }}
            />
            <script src="//web.it-center.by/nw" async></script>
        </head>
        <body className={`${interSans.variable} ${caveatSans.variable} antialiased`}>
        <GoogleTagManager/>
        <ModalProvider>
            <Header />
            <Breadcrumbs />
            <Suspense fallback={null}>
                <main>{children}</main>
            </Suspense>
            <Footer />
            <Modal />
        </ModalProvider>
        </body>
        </html>
    );
}
