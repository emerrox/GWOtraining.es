import type {Metadata} from 'next';
import { Geist, Geist_Mono } from 'next/font/google'; // Corrected import for Geist fonts
import './globals.css';
import { Toaster } from "@/components/ui/toaster"; // Added Toaster

const geistSans = Geist({ // Changed to use correct variable name
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({ // Changed to use correct variable name
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'CursoIrata.org - IRATA Certified Rope Access Training',
  description: 'Internationally recognized IRATA courses for industrial rope access. Expert-led training for all levels.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
