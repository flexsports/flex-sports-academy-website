'use client';

import React, { useState } from 'react';
import Image from 'next/image';

type Category = '특장점' | '컨설팅';

const categories: Category[] = ['특장점', '컨설팅'];

interface ImageData {
  src: string;
  alt: string;
}

const categoryImages: Record<Category, ImageData[]> = {
  특장점: Array.from({ length: 9 }, (_, i) => ({
    src: `/image/features/features${i + 1}.png`,
    alt: `특장점 이미지 ${i + 1}`,
  })),
  컨설팅: [
    {
      src: '/image/features/cunsulting1.jpeg',
      alt: '컨설팅 이미지 1',
    },
    {
      src: '/image/features/cunsulting2.jpg',
      alt: '컨설팅 이미지 2',
    },
  ],
};

export default function Features() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('특장점');

  return (
    <main className='max-w-[1200px] mx-auto pt-[60px] sm:pt-[80px] lg:pt-[95.5px] px-4 lg:px-0'>
      <div className='w-full mb-8 lg:mb-[60px]'>
        <h2 className='text-xl lg:text-[28px] font-bold mb-2 lg:mb-4'>특장점</h2>
        <hr className='border-t border-gray-400 mb-4 lg:mb-[24px]' />

        {/* 카테고리 선택 버튼 */}
        <div className='flex flex-wrap gap-2 lg:gap-4 mb-6 lg:mb-8'>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 lg:px-6 py-1.5 lg:py-2 rounded-full text-xs lg:text-sm font-bold transition-all cursor-pointer
                ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      <div className='flex flex-col gap-4 sm:gap-6 lg:gap-8 items-center'>
        {categoryImages[selectedCategory].map((image, index) => (
          <div key={index} className='w-full max-w-[900px]'>
            <div className='relative w-full'>
              <Image
                src={image.src}
                alt={image.alt}
                width={900}
                height={450}
                className='w-full h-auto object-contain'
                priority={index <= 1} // 처음 2개 이미지는 우선 로딩
              />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
