'use client';

import React from 'react';
import Image from 'next/image';
import AboutPath from '@/components/common/AboutPath';

export default function Partners() {
  return (
    <>
      <AboutPath currentPage='협력기관' />
      <main className='max-w-[1200px] mx-auto pt-8 lg:pt-12 px-4 lg:px-0'>
        <div className='w-full mb-8 lg:mb-[60px]'>
          <h2 className='text-xl lg:text-[28px] font-bold mb-2 lg:mb-3'>협력기관</h2>
          <hr className='border-t border-gray-400 mb-6 lg:mb-[40px]' />

          <div className='flex justify-center w-full h-auto px-4 sm:px-8 lg:px-0'>
            <div className='relative w-full max-w-[800px]'>
              <Image
                src='/image/about/partners.png'
                alt='플렉스 체대입시 협력기관'
                width={800}
                height={400}
                className='w-full h-auto object-contain'
                priority
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
