import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '플렉스체대입시 | 체대입시 전문학원',
  description:
    '체대입시의 모든 것! 체육대학 입시 전문 강사진 컨설팅, 실기 훈련, 개인별 맞춤 계획 수립까지.',
  keywords:
    '체대입시, 체육대학, 체대입시학원, 체육교육과, 체대실기, 체대면접, 공무원체력, 사관학교',
  openGraph: {
    title: '플렉스체대입시 | 체대입시 전문학원',
    description: '체대입시의 모든 것! 체육대학 입시 전문 컨설팅',
    type: 'website',
    locale: 'ko_KR',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    shortcut: 'https://www.xn--vk1bm9gzwkpg26sptiewp.com/favicon.ico',
    icon: 'https://www.xn--vk1bm9gzwkpg26sptiewp.com/favicon.ico',
    apple: 'https://www.xn--vk1bm9gzwkpg26sptiewp.com/favicon.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ko'>
      <head>
        <Script
          src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_API_KEY}&libraries=services&autoload=false`}
          strategy='beforeInteractive'
        />
      </head>
      <body className={inter.className}>
        {children}
        <Script src='//wcs.naver.net/wcslog.js' strategy='afterInteractive' />
        <Script id='naver-analytics' strategy='afterInteractive'>
          {`
            if(!wcs_add) var wcs_add = {};
            wcs_add["wa"] = "12f4a57ca7819b0";
            if(window.wcs) {
              wcs_do();
            }
          `}
        </Script>
      </body>
    </html>
  );
}
