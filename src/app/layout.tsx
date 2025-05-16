
import type {Metadata} from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { CookieConsentBanner } from '@/components/cookie-consent-banner'; // Importar el banner

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'gwotraining.es - Formación Certificada GWO en Seguridad',
  description: 'Cursos GWO reconocidos internacionalmente para la seguridad en aerogeneradores. Formación impartida por expertos para todos los niveles.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <Toaster />
        <CookieConsentBanner /> {/* Añadir el banner aquí */}
      </body>
    </html>
  );
}
