import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'لیست مراکز روان‌شناسی',
  description: 'لیست مراکز روان‌شناسی در ایران',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className="flex min-h-screen w-full items-center justify-center bg-slate-50 p-8">
        {children}
      </body>
    </html>
  );
}
