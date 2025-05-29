import React from 'react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className='w-full bg-gray-900 text-white py-10'>
      <div className='max-w-[1400px] mx-auto px-5'>
        <div className='mb-10'>
          <Image
            src='/image/logo/logo_black_white.svg'
            alt='Logo'
            width={100}
            height={91}
            priority
          />
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
          {/* 서울광명교육원 */}
          <div className='space-y-3'>
            <h3 className='text-xl font-bold mb-4'>서울광명교육원(본점)</h3>
            <div className='space-y-1 text-gray-300'>
              <p>주소: 경기도 광명시 하안로288번길 15</p>
              <p>조일프라자 B3,B4(2개층)</p>
              <p>사업자번호: 145-88-02293</p>
              <p>대표자: 김현진</p>
              <p className='text-white font-medium'>02-898-0070 / 010-7587-0804</p>
            </div>
          </div>
          {/* 수원교육원 */}
          <div className='space-y-3'>
            <h3 className='text-xl font-bold mb-4'>수원교육원(본점직영)</h3>
            <div className='space-y-1 text-gray-300'>
              <p>주소: 경기도 수원시 장안구 팔달로211 B1</p>
              <p>사업자번호: 896-26-02092</p>
              <p>대표자: 최병기</p>
              <p className='text-white font-medium'>031-256-3751 / 010-8244-9746</p>
            </div>
          </div>
          {/* 고양교육원 */}
          <div className='space-y-3'>
            <h3 className='text-xl font-bold mb-4'>일산교육원(본점직영)</h3>
            <div className='space-y-1 text-gray-300'>
              <p>주소: 경기도 고양시 후곡로32</p>
              <p>(후곡마을 4단지 아파트 상가B1)</p>
              <p>사업자번호: 443-26-01434</p>
              <p>대표자: 김근우</p>
              <p className='text-white font-medium'>0507-1421-3660 / 010-3050-3660</p>
            </div>
          </div>
        </div>

        <div className='mt-10 pt-6 border-t border-gray-700 text-gray-400 text-sm text-center'>
          © 2025 플렉스스포츠아카데미. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
