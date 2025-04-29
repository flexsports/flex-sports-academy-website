'use client';

import React, { useState, useEffect } from 'react';

type SocialLink = {
  name: string;
  url: string;
  type: 'svg';
  icon: React.ReactNode;
  bgColor: string;
  onClick?: () => void;
};

export default function FloatingButton() {
  const [showModal, setShowModal] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent));
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handlePhoneClick = () => {
    if (isMobile) {
      window.location.href = 'tel:010-7587-0804';
    } else {
      setShowModal(true);
    }
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
        <svg className='w-7 h-7' fill='currentColor' viewBox='0 0 24 24'>
          <path d='M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z' />
        </svg>
      ),
      bgColor: 'bg-red-600',
    },
  ];

  return (
    <>
      <div className='fixed bottom-8 right-8 flex flex-col gap-4 z-50'>
        {socialLinks.map((social) => (
          <a
            key={social.name}
            href={social.onClick ? '#' : social.url}
            onClick={social.onClick}
            target={social.onClick ? '_self' : '_blank'}
            rel='noopener noreferrer'
            className={`w-12 h-12 flex items-center justify-center hover:opacity-90 transition-all duration-300 ${
              social.type === 'svg'
                ? `${social.bgColor} text-white rounded-full shadow-[0_4px_10px_rgba(0,0,0,0.2)] hover:shadow-[0_6px_15px_rgba(0,0,0,0.3)]`
                : ''
            }`}
            aria-label={social.name}
          >
            {social.icon}
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

      {showModal && (
        <div className='fixed inset-0 bg-gray-900/50 flex items-center justify-center z-50'>
          <div className='bg-white p-6 rounded-lg shadow-xl max-w-sm w-full mx-4'>
            <div className='text-center'>
              <h3 className='text-lg font-semibold mb-2'>직통 연락번호</h3>
              <p className='text-xl font-bold text-blue-600'>010-7587-0804</p>
            </div>
            <button
              onClick={() => setShowModal(false)}
              className='mt-4 w-full bg-gray-200 text-gray-800 py-2 rounded-md hover:bg-gray-300 transition-colors'
            >
              닫기
            </button>
          </div>
        </div>
      )}
    </>
  );
}
