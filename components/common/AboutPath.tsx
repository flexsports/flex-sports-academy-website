'use client';

import React from 'react';
import { ChevronRight } from 'lucide-react';

interface AboutPathProps {
  currentPage: '인사말' | '강사진' | '시설' | '협력기관';
}

export default function AboutPath({ currentPage }: AboutPathProps) {
  return (
    <div className='w-full border-b border-gray-200'>
      <div className='max-w-[1200px] mx-auto py-2 md:py-3 px-4 md:px-4 lg:px-0 flex items-center text-gray-600'>
        <span className='text-[14px] md:text-[15px]'>학원소개</span>
        <ChevronRight className='w-3 h-3 md:w-4 md:h-4 mx-1 md:mx-2 text-black' />
        <span className='text-[14px] md:text-[15px] text-black font-medium'>{currentPage}</span>
      </div>
    </div>
  );
}
