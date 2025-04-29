import React from 'react';
import Image from 'next/image';

export default function Success() {
  const successImages = [
    { src: '/image/success/24-25success.png', alt: '2024-2025 합격현황' },
    { src: '/image/success/23-24success.png', alt: '2023-2024 합격현황' },
    { src: '/image/success/23success.png', alt: '2023 합격현황' },
    { src: '/image/success/22success.jpeg', alt: '2022 합격현황' },
    { src: '/image/success/21success.jpeg', alt: '2021 합격현황' },
    { src: '/image/success/20success.png', alt: '2020 합격현황' },
    { src: '/image/success/18-19success.jpeg', alt: '2018-2019 합격현황' },
    { src: '/image/success/17success.jpeg', alt: '2017 합격현황' },
    { src: '/image/success/15-16success.jpeg', alt: '2015-2016 합격현황' },
  ];

  return (
    <main className='max-w-[1200px] mx-auto pt-[60px] sm:pt-[80px] lg:pt-[95.5px] px-4 lg:px-0'>
      <div className='w-full mb-8 lg:mb-[60px]'>
        <h2 className='text-xl lg:text-[28px] font-bold mb-2 lg:mb-3'>합격자명단</h2>
        <hr className='border-t border-gray-400 mb-6 lg:mb-[40px]' />
      </div>
      <div className='flex flex-col gap-8 lg:gap-12 items-center'>
        {successImages.map((image, index) => (
          <div key={index} className='w-full max-w-[900px] mb-8 lg:mb-20'>
            <div className='relative w-full'>
              <Image
                src={image.src}
                alt={image.alt}
                width={900}
                height={600}
                className='w-full h-auto object-contain'
                priority={index <= 1} // 최근 2년도 합격현황 우선 로딩
              />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
