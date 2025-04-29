'use client';

import React from 'react';
import Image from 'next/image';
import AboutPath from '@/components/common/AboutPath';

export default function Partners() {
  return (
    <>
      <AboutPath currentPage='협력기관' />
      <main className='max-w-[1200px] mx-auto pt-12'>
        <div className='w-full mb-[60px]'>
          <h2 className='text-[28px] font-bold mb-3'>협력기관</h2>
          <hr className='border-t border-gray-400 mb-[40px]' />

          <div className='flex justify-center w-full h-auto'>
            <Image
              src='/image/about/partners.png'
              alt='플렉스 체대입시 협력기관'
              width={800}
              height={400}
              className='h-auto object-cover'
              priority
            />
          </div>
        </div>
      </main>
    </>
  );
}
