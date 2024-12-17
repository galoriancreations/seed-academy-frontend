
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ReactNode } from 'react';
import './globals.css';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <html lang="he">
      <head>
        <title>Seed-Academy</title>
        <meta name="description" content="SEED Academy - Leadership and Innovation Training" />
        <link rel="icon" href="/images/seed-academy-logo.png" type="image/png" />
      </head>
      <body className="bg-gray-50">
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="container mx-auto flex-1 p-6">{children}</main>
          <Footer />
        </div>
      </body>
    </html>

  );
}
