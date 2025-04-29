'use client';

import React from 'react';
import Image from 'next/image';

type SocialLink = {
  name: string;
  url: string;
  type: 'svg' | 'image';
} & (
  | {
      type: 'svg';
      icon: React.ReactNode;
      bgColor: string;
    }
  | {
      type: 'image';
      icon: string;
    }
);

export default function FloatingButton() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const socialLinks: SocialLink[] = [
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/embed/d4xQ1X4GBsg',
      type: 'svg',
      icon: (
        <svg className='w-7 h-7' fill='currentColor' viewBox='0 0 24 24'>
          <path d='M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z' />
        </svg>
      ),
      bgColor: 'bg-red-600',
    },
    {
      name: '네이버 블로그',
      url: 'https://blog.naver.com/sd_sports',
      type: 'svg',
      icon: (
        <svg className='w-5 h-5' viewBox='0 0 24 24' fill='currentColor'>
          <path d='M16.273 12.845L7.376 0H0v24h7.726V11.155L16.624 24H24V0h-7.727z' />
        </svg>
      ),
      bgColor: 'bg-[#03C75A]',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/flex_seoulgm/',
      type: 'image',
      icon: '/image/icon/instagram.png',
    },
  ];

  return (
    <div className='fixed bottom-8 right-8 flex flex-col gap-4 z-50'>
      {socialLinks.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target='_blank'
          rel='noopener noreferrer'
          className={`w-12 h-12 flex items-center justify-center hover:opacity-90 transition-all duration-300 ${
            social.type === 'svg'
              ? `${social.bgColor} text-white rounded-full shadow-[0_4px_10px_rgba(0,0,0,0.2)] hover:shadow-[0_6px_15px_rgba(0,0,0,0.3)]`
              : ''
          }`}
          aria-label={social.name}
        >
          {social.type === 'svg' ? (
            social.icon
          ) : (
            <Image
              src={social.icon}
              alt={social.name}
              width={48}
              height={48}
              className='w-12 h-12'
            />
          )}
        </a>
      ))}

      <button
        onClick={scrollToTop}
        className='bg-white text-black w-12 h-12 rounded-full shadow-[0_4px_10px_rgba(0,0,0,0.2)] hover:shadow-[0_6px_15px_rgba(0,0,0,0.3)] flex items-center justify-center hover:bg-gray-100 transition-all duration-300 cursor-pointer'
        aria-label='맨 위로 스크롤'
      >
        <svg
          className='w-6 h-6'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M5 10l7-7m0 0l7 7m-7-7v18'
          />
        </svg>
      </button>
    </div>
  );
}
