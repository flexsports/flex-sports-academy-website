'use client';

import React from 'react';
import Image from 'next/image';
import AboutPath from '@/components/common/AboutPath';

const DIRECTOR_INFO = {
  name: '김현진',
  position: '대표이사',
  leftDescription: [
    '- 경희대학교 체육대학원 석사과정',
    '- 경희대학교 체육학과 학사졸업',
    '- (주)플렉스스포츠 대표이사',
    '- (주)클릭애드 대표이사',
    '- (주)제우스스포츠 이사',
  ],
  rightDescription: [
    '- 체육대학 온라인 ai합격예측플랫폼_plan 운영자',
    '- 대한민국 최초 체대입시컨설팅 특허출원',
    '- 플렉스체대입시 서울광명교육원 대표원장',
    '- 플렉스체대입시 수원교육원 대표원장',
    '- 광명시 초중고 직업인 멘토링 강연 다수',
    '- 서울초중등체육교사연구회 초빙강사',
    '- 체대입시학원협회 대표컨설턴트',
  ],
};

const INSTRUCTOR_IMAGES = Array.from(
  { length: 18 },
  (_, i) => `/image/instructors/${String(i + 1).padStart(3, '0')}.png`
);

export default function Instructors() {
  return (
    <>
      <AboutPath currentPage='강사진' />
      <main className='max-w-[1200px] mx-auto pt-[60px] sm:pt-[80px] lg:pt-[95.5px] px-4 lg:px-0 pb-20'>
        <div className='w-full'>
          <h2 className='text-[28px] font-bold mb-3'>강사진</h2>
          <hr className='border-t border-gray-400 mb-[24px] sm:mb-[32px] lg:mb-[40px]' />

          {/* 대표이사 프로필 */}
          <div className='bg-white rounded-lg shadow-md overflow-hidden flex flex-col lg:flex-row mb-8 sm:mb-10 lg:mb-12'>
            <div className='relative w-full lg:w-[330px] h-[410px] sm:h-[320px] lg:h-[490px]'>
              <Image
                src='/image/about/ceo.jpg'
                alt='김현진 대표이사'
                fill
                className='object-cover sm:object-contain'
              />
            </div>
            <div className='flex-1 p-5 sm:p-6 lg:p-8'>
              <h3 className='text-lg sm:text-xl lg:text-2xl font-bold mb-1'>
                {DIRECTOR_INFO.name}
              </h3>
              <p className='text-gray-600 text-sm sm:text-base mb-4 lg:mb-6 ml-0.5'>
                {DIRECTOR_INFO.position}
              </p>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4'>
                <div className='space-y-2.5'>
                  {DIRECTOR_INFO.leftDescription.map((line, index) => (
                    <p
                      key={index}
                      className='text-gray-700 text-[14px] sm:text-[15px] lg:text-base'
                    >
                      {line}
                    </p>
                  ))}
                </div>
                <div className='space-y-2.5'>
                  {DIRECTOR_INFO.rightDescription.map((line, index) => (
                    <p
                      key={index}
                      className='text-gray-700 text-[14px] sm:text-[15px] lg:text-base'
                    >
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 강사진 이미지 그리드 */}
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 sm:gap-x-6 lg:gap-x-8 gap-y-4 sm:gap-y-6 lg:gap-y-8'>
            {INSTRUCTOR_IMAGES.map((imageUrl, index) => (
              <div key={index} className='overflow-hidden'>
                <div className='relative w-full h-[355px] sm:h-[420px] lg:h-[348px]'>
                  <Image
                    src={imageUrl}
                    alt={`강사 프로필 ${index + 1}`}
                    fill
                    className='object-fill sm:object-fill lg:object-cover'
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
