'use client';

import React from 'react';
import Image from 'next/image';
import AboutPath from '@/components/common/AboutPath';

const DIRECTOR_INFO = {
  name: '홍길동',
  position: '대표이사',
  description: ['- 약력1', '- 약력2', '- 약력3', '- 약력4', '- 약력5'],
};

const INSTRUCTOR_IMAGES = ['/images/instructors/trainer1.jpg', '/images/instructors/trainer2.jpg'];

export default function Instructors() {
  return (
    <>
      <AboutPath currentPage='강사진' />
      <main className='max-w-[1200px] mx-auto pt-12 px-4 pb-20'>
        <div className='w-full'>
          <h2 className='text-[28px] font-bold mb-3'>강사진</h2>
          <hr className='border-t border-gray-400 mb-[40px]' />

          {/* 대표이사 프로필 */}
          <div className='bg-white rounded-lg shadow-md overflow-hidden flex flex-col lg:flex-row mb-12'>
            <div className='relative w-full lg:w-[400px] h-[300px] lg:h-[500px]'>
              <Image
                src='/images/instructors/director.jpg'
                alt='대표이사 프로필'
                fill
                className='object-cover'
              />
            </div>
            <div className='flex-1 p-4 lg:p-8'>
              <h3 className='text-xl lg:text-2xl font-bold mb-2'>{DIRECTOR_INFO.name}</h3>
              <p className='text-gray-600 mb-4 lg:mb-6'>{DIRECTOR_INFO.position}</p>
              <div className='space-y-2 lg:space-y-3'>
                {DIRECTOR_INFO.description.map((line, index) => (
                  <p key={index} className='text-gray-700 text-sm lg:text-base'>
                    {line}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* 강사진 이미지 그리드 */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8'>
            {INSTRUCTOR_IMAGES.map((imageUrl, index) => (
              <div key={index} className='rounded-lg shadow-md overflow-hidden'>
                <div className='relative w-full h-[250px] sm:h-[300px] lg:h-[400px]'>
                  <Image
                    src={imageUrl}
                    alt={`강사 프로필 ${index + 1}`}
                    fill
                    className='object-cover'
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
