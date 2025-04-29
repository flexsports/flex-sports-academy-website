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
    '- (현) (주)플렉스스포츠 대표이사',
    '- (현) (주)클릭애드 대표이사',
    '- (현) (주)제우스스포츠 이사',
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

const INSTRUCTOR_IMAGES = ['/images/instructors/trainer1.jpg', '/images/instructors/trainer2.jpg'];

export default function Instructors() {
  return (
    <>
      <AboutPath currentPage='강사진' />
      <main className='max-w-[1200px] mx-auto pt-12 pb-20'>
        <div className='w-full'>
          <h2 className='text-[28px] font-bold mb-3'>강사진</h2>
          <hr className='border-t border-gray-400 mb-[40px]' />

          {/* 대표이사 프로필 */}
          <div className='bg-white rounded-lg shadow-md overflow-hidden flex flex-col lg:flex-row mb-12'>
            <div className='relative w-full lg:w-[400px] h-[300px] lg:h-[500px]'>
              <Image
                src='/image/about/ceo.jpg'
                alt='김현진 대표이사'
                fill
                className='object-cover'
              />
            </div>
            <div className='flex-1 p-4 lg:p-8'>
              <h3 className='text-xl lg:text-2xl font-bold mb-1'>{DIRECTOR_INFO.name}</h3>
              <p className='text-gray-600 mb-4 lg:mb-6 ml-1'>{DIRECTOR_INFO.position}</p>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div className='space-y-2'>
                  {DIRECTOR_INFO.leftDescription.map((line, index) => (
                    <p key={index} className='text-gray-700 text-sm lg:text-base'>
                      {line}
                    </p>
                  ))}
                </div>
                <div className='space-y-2'>
                  {DIRECTOR_INFO.rightDescription.map((line, index) => (
                    <p key={index} className='text-gray-700 text-sm lg:text-base'>
                      {line}
                    </p>
                  ))}
                </div>
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
