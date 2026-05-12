import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Anas Furqan — Full Stack & Real-Time Systems Developer',
  description:
    'Full Stack Developer specializing in real-time systems, AI-driven applications, and blockchain. Hackathon Lead @ ACM NUCES.',
  keywords: [
    'Anas Furqan',
    'Full Stack Developer',
    'Real-Time Systems',
    'Next.js',
    'React',
    'TypeScript',
    'Socket.IO',
    'Web3',
    'Blockchain',
    'Pakistan',
  ],
  authors: [{ name: 'Anas Furqan' }],
  creator: 'Anas Furqan',
  openGraph: {
    title: 'Anas Furqan — Full Stack Developer',
    description: 'Building real-time systems, AI applications, and blockchain experiences.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anas Furqan — Full Stack Developer',
    description: 'Building real-time systems, AI applications, and blockchain experiences.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/portfolio.png" type="image/png" />
      </head>
      <body className="bg-black text-white antialiased">{children}</body>
    </html>
  );
}
