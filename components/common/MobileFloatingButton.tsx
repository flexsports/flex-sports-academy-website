'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

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

export default function MobileFloatingButton() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const socialLinks: SocialLink[] = [
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/embed/d4xQ1X4GBsg',
      type: 'svg',
      icon: (
        <svg className='w-6 h-6' fill='currentColor' viewBox='0 0 24 24'>
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
        <svg className='w-4 h-4' viewBox='0 0 24 24' fill='currentColor'>
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
    <div className='fixed bottom-6 right-6 z-50'>
      <AnimatePresence>
        {isOpen && (
          <div className='flex flex-col-reverse gap-3 mb-3 items-center'>
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target='_blank'
                rel='noopener noreferrer'
                className={`w-10 h-10 flex items-center justify-center ${
                  social.type === 'svg'
                    ? `${social.bgColor} text-white rounded-full shadow-[0_4px_10px_rgba(0,0,0,0.2)]`
                    : ''
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.2, delay: index * 0.1 }}
                aria-label={social.name}
              >
                {social.type === 'svg' ? (
                  social.icon
                ) : (
                  <Image
                    src={social.icon}
                    alt={social.name}
                    width={40}
                    height={40}
                    className='w-10 h-10'
                  />
                )}
              </motion.a>
            ))}
          </div>
        )}
      </AnimatePresence>

      <button
        onClick={toggleMenu}
        className='bg-blue-500 text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center hover:bg-blue-600 transition-all duration-300'
        aria-label={isOpen ? '메뉴 닫기' : '메뉴 열기'}
      >
        <svg
          className='w-6 h-6 transition-transform duration-300'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
          style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}
        >
          {isOpen ? (
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M6 18L18 6M6 6l12 12'
            />
          ) : (
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M12 6v12M6 12h12'
            />
          )}
        </svg>
      </button>
    </div>
  );
}
