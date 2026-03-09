import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'США 2026 — Маршрут',
  description: '21 день · 7 городов · 2 океана',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className="bg-bg text-text font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
