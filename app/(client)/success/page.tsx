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
    <main className='max-w-[1200px] mx-auto pt-[95.5px]'>
      <div className='w-full mb-[60px]'>
        <h2 className='text-[28px] font-bold mb-3'>합격현황</h2>
        <hr className='border-t border-gray-400 mb-[40px]' />
      </div>
      <div className='flex flex-col gap-8 items-center'>
        {successImages.map((image, index) => (
          <div key={index} className='w-[900px] mb-20'>
            <Image
              src={image.src}
              alt={image.alt}
              width={900}
              height={600}
              className='w-full h-auto'
            />
          </div>
        ))}
      </div>
    </main>
  );
}
