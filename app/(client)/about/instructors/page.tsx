'use client';

import React from 'react';
import Image from 'next/image';
import AboutPath from '@/components/common/AboutPath';

const LEADERSHIP_INFO = [
  {
    name: '김현진',
    position: '대표이사',
    image: '/image/about/ceo.jpg',
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
  },
  {
    name: '신우진',
    position: '부대표',
    image: '/image/about/ceo2.jpg',
    leftDescription: [
      '- 경희대학교 체육대학원 석사과정',
      '- 삼육대학교 체육학과 학사졸업',
      '- (주)플렉스스포츠 부대표',
      '- 슬림피티 별내점 대표',
    ],
    rightDescription: [
      '- 대한축구협회 지도자 라이센스',
      '- 생활체육지도자 자격증 2급',
      '- 피트니스 플러스 교육과정 수석 수료',
      '- 스포츠테이핑 1급',
      '- 스포츠마사지 1급',
      '- 레크레이션 지도자 1급',
      '- 플로어볼 자격증 3급',
    ],
  },
];

const NEW_INSTRUCTOR_IMAGES = Array.from(
  { length: 5 },
  (_, i) => `/image/instructors/new/${i + 1}.png`
);

export default function Instructors() {
  return (
    <>
      <AboutPath currentPage='강사진' />
      <main className='max-w-[1000px] mx-auto pt-[60px] sm:pt-[40px] lg:pt-[30px] px-4 lg:px-0 pb-20'>
        <div className='w-full'>
          <h2 className='text-[28px] font-bold mb-3'>강사진</h2>
          <hr className='border-t border-gray-400 mb-[24px] sm:mb-[32px] lg:mb-[40px]' />

          {/* 운영진 프로필 */}
          <div className='space-y-8 sm:space-y-10 lg:space-y-12 mb-12 sm:mb-16 lg:mb-20'>
            {LEADERSHIP_INFO.map((person) => (
              <div
                key={person.name}
                className='bg-white rounded-lg shadow-md overflow-hidden flex flex-col lg:flex-row'
              >
                <div className='relative w-full lg:w-[330px] h-[410px] sm:h-[320px] lg:h-[490px]'>
                  <Image
                    src={person.image}
                    alt={`${person.name} ${person.position}`}
                    fill
                    className='object-cover'
                  />
                </div>
                <div className='flex-1 p-5 sm:p-6 lg:p-8'>
                  <h3 className='text-lg sm:text-xl lg:text-2xl font-bold mb-1'>{person.name}</h3>
                  <p className='text-gray-600 text-sm sm:text-base mb-4 lg:mb-6 ml-0.5'>
                    {person.position}
                  </p>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4'>
                    <div className='space-y-2.5'>
                      {person.leftDescription.map((line, index) => (
                        <p
                          key={index}
                          className='text-gray-700 text-[14px] sm:text-[15px] lg:text-base'
                        >
                          {line}
                        </p>
                      ))}
                    </div>
                    <div className='space-y-2.5'>
                      {person.rightDescription.map((line, index) => (
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
            ))}
          </div>

          {/* 강사진 이미지 그리드 - 2열 배치 */}
          <div className='max-w-[1000px] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-x-6 sm:gap-x-10 lg:gap-x-12 gap-y-6 sm:gap-y-8 lg:gap-y-10'>
            {NEW_INSTRUCTOR_IMAGES.map((imageUrl, index) => (
              <div key={index} className='overflow-hidden rounded-lg bg-white shadow-sm'>
                <div className='relative w-full aspect-[4/3]'>
                  <Image
                    src={imageUrl}
                    alt={`강사 프로필 ${index + 1}`}
                    fill
                    className='object-cover'
                  />
                </div>
              </div>
            ))}
            {/* 추가 문구 카드 */}
            <div className='flex items-center justify-center bg-gray-50 rounded-lg border-2 border-dashed border-gray-200 aspect-[4/3] w-full'>
              <div className='text-center px-2'>
                <p className='text-base sm:text-lg lg:text-xl font-bold text-gray-400 break-keep'>
                  이하 20명 이상의
                </p>
                <p className='text-base sm:text-lg lg:text-xl font-bold text-gray-400 mt-1 break-keep'>
                  메인 교사진
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
