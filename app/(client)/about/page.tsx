'use client';

import React from 'react';
import Image from 'next/image';
import AboutPath from '@/components/common/AboutPath';

export default function About() {
  return (
    <>
      <AboutPath currentPage='인사말' />
      <main className='max-w-[1200px] mx-auto pt-8 px-4 md:pt-12 md:px-0'>
        <div className='w-full mb-[30px] md:mb-[60px]'>
          <h2 className='text-[22px] md:text-[28px] font-bold mb-3'>인사말</h2>
          <hr className='border-t border-gray-400 mb-[30px] md:mb-[40px]' />
          <h1 className='text-[26px] md:text-[32px] font-bold text-gray-800 mb-[30px] md:mb-[40px] text-center'>
            체대입시, 합격을 FLEX하라!
          </h1>
          <div className='whitespace-pre-line leading-[1.6] md:leading-[1.8] text-[16px] md:text-[18px] text-gray-600 text-center'>
            {`안녕하세요. 플렉스체대입시입니다.

학생들의 노력을 절대 헛되이 만들지 않기 위해
본 원은 항상 노력하고 있으며 학생들을
사랑하는  마음으로 응원하며 모든 강사진은
그들의 꿈을 기록하는 것만으로 끝이 아닌
'실현'시키는 것을 목표로 지도하고 있습니다.

플렉스는 21세기 글로벌시대에 맞는 경쟁력을 갖춘 인재를 키우기 위해 항상 노력합니다.`}
          </div>
        </div>

        <div className='flex justify-center w-full h-auto mb-[30px] md:mb-[60px] px-4 md:px-0'>
          <Image
            src='/image/about/about_img.png'
            alt='플렉스 체대입시 소개 이미지'
            width={800}
            height={400}
            priority
            className='h-auto object-cover w-full'
          />
        </div>
      </main>
    </>
  );
}
