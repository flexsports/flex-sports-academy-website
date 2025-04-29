'use client';

import React from 'react';
import AboutPath from '@/components/common/AboutPath';
import Image from 'next/image';

export default function About() {
  return (
    <>
      <AboutPath currentPage='인사말' />
      <main className='max-w-[1200px] mx-auto pt-8 px-4 md:pt-12 md:px-0'>
        <div className='w-[full] mb-[30px] md:mb-[60px]'>
          <h2 className='text-[22px] md:text-[28px] font-bold mb-3'>인사말</h2>
          <hr className='border-t border-gray-400 mb-[30px] md:mb-[40px]' />

          {/* 900px 컨테이너 */}
          <div className='max-w-[1200px] mx-auto'>
            {/* 1행: 사진과 인사말 */}
            <div className='flex flex-col lg:flex-row gap-8 mb-8'>
              {/* 대표이사 사진 */}
              <div className='w-full lg:w-[40%]'>
                <div className='relative w-full aspect-[3/4] max-h-[520px]'>
                  <Image
                    src='/image/about/ceo.jpg'
                    alt='플렉스스포츠 대표이사'
                    fill
                    className='object-cover rounded-lg'
                    priority
                  />
                </div>
              </div>

              {/* 대표이사 인사말 */}
              <div className='w-full lg:w-[60%] bg-gray-50 p-6 rounded-lg flex flex-col justify-center min-h-[320px]'>
                <h3 className='text-[24px] md:text-[28px] font-bold text-gray-800 mb-[30px] text-start'>
                  체대입시, 합격을 FLEX하라!
                </h3>
                <div className='whitespace-pre-line leading-[1.6] md:leading-[1.8] text-[15px] md:text-[16px] text-gray-600'>
                  {`안녕하십니까 (주)플렉스스포츠 대표이사 김현진입니다.

학생들의 노력을 절대 헛되이 만들지 않기 위해
본 원은 항상 노력하고 있으며 학생들을
사랑하는  마음으로 응원하며 모든 강사진은
그들의 꿈을 기록하는 것만으로 끝이 아닌
'실현'시키는 것을 목표로 지도하고 있습니다.

플렉스는 21세기 글로벌시대에 맞는 경쟁력을 갖춘 인재를 키우기 위해 항상 노력합니다.`}
                </div>
              </div>
            </div>

            {/* 2행: 대표이사 프로필 */}
            <div className='bg-gray-50 p-6 md:p-8 rounded-lg'>
              <h3 className='text-[20px] md:text-[24px] font-bold mb-6'>대표이사 프로필</h3>
              <div className='space-y-4 text-[15px] md:text-[16px] text-gray-700'>
                <div className='space-y-2'>
                  <p>경희대학교 체육대학원 석사과정</p>
                  <p>경희대학교 체육학과 학사졸업</p>
                </div>

                <div className='flex flex-col md:flex-row gap-8 mt-6'>
                  {/* 현재 경력 */}
                  <div className='flex-1'>
                    <p className='font-bold mb-3 text-[16px] md:text-[18px]'>(현)</p>
                    <ul className='space-y-1'>
                      <li>(주)플렉스스포츠 대표이사</li>
                      <li>(주)클릭애드 대표이사</li>
                      <li>(주)제우스스포츠 이사</li>
                      <li>체육대학 온라인 ai합격예측플랫폼_plan 운영자</li>
                      <li>대한민국 최초 체대입시컨설팅 특허출원</li>
                      <li>플렉스체대입시 서울광명교육원 대표원장</li>
                      <li>플렉스체대입시 수원교육원 대표원장</li>
                      <li>광명시 초중고 직업인 멘토링 강연 다수</li>
                      <li>서울초중등체육교사연구회 초빙강사</li>
                      <li>체대입시학원협회 대표컨설턴트</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
