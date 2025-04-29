'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type SocialLink = {
  name: string;
  url: string;
  type: 'svg';
  icon: React.ReactNode;
  bgColor: string;
  onClick?: () => void;
};

export default function MobileFloatingButton() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:010-7587-0804';
  };

  const socialLinks: SocialLink[] = [
    {
      name: '연관홈페이지',
      url: 'https://xn--vk1bm9gzwkpg26sptiewp.kr/',
      type: 'svg',
      icon: (
        <svg className='w-6 h-6' fill='currentColor' viewBox='0 0 24 24'>
          <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z' />
        </svg>
      ),
      bgColor: 'bg-blue-600',
    },
    {
      name: '플랜피이',
      url: 'https://plan.pe.kr',
      type: 'svg',
      icon: (
        <svg className='w-6 h-6' fill='currentColor' viewBox='0 0 24 24'>
          <path d='M7 4v16h3v-6h3.5c2.757 0 5-2.243 5-5s-2.243-5-5-5H7zm3 7V7h3.5c1.103 0 2 .897 2 2s-.897 2-2 2H10z' />
        </svg>
      ),
      bgColor: 'bg-blue-600',
    },
    {
      name: '전화상담',
      url: '#',
      type: 'svg',
      icon: (
        <svg className='w-6 h-6' fill='currentColor' viewBox='0 0 24 24'>
          <path d='M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z' />
        </svg>
      ),
      bgColor: 'bg-green-600',
      onClick: handlePhoneClick,
    },
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
  ];

  return (
    <div className='fixed bottom-6 right-6 z-50'>
      <AnimatePresence>
        {isOpen && (
          <div className='flex flex-col-reverse gap-3 mb-3 items-center'>
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.onClick ? '#' : social.url}
                onClick={social.onClick}
                target={social.onClick ? '_self' : '_blank'}
                rel='noopener noreferrer'
                className={`w-10 h-10 flex items-center justify-center ${social.bgColor} text-white rounded-full shadow-[0_4px_10px_rgba(0,0,0,0.2)]`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.2, delay: index * 0.1 }}
                aria-label={social.name}
              >
                {social.icon}
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
