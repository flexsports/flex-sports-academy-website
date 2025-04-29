import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'FLEX Sports Academy',
  description: 'FLEX Sports Academy - 체대입시의 모든 것',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ko'>
      <head>
        <Script
          src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_API_KEY}&autoload=false`}
          strategy='beforeInteractive'
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
