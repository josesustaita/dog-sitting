import './globals.css';
import type { ReactNode } from 'react';

export const metadata = {
  title: 'Home Away From Home • Doggy Daycare & Boarding',
  description:
    'A safe, loving, and fun stay for your pup in Southwest Florida.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Poppins:wght@600;700&display=swap"
          rel="stylesheet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>{children}</body>
    </html>
  );
}
