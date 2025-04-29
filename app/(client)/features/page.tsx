import React from 'react';
import Image from 'next/image';

export default function Features() {
  return (
    <main className='max-w-[1200px] mx-auto pt-[60px] sm:pt-[80px] lg:pt-[95.5px] px-4 lg:px-0'>
      <div className='w-full mb-8 lg:mb-[60px]'>
        <h2 className='text-xl lg:text-[28px] font-bold mb-2 lg:mb-3'>특장점</h2>
        <hr className='border-t border-gray-400 mb-6 lg:mb-[40px]' />
      </div>
      <div className='flex flex-col gap-4 sm:gap-6 lg:gap-8 items-center'>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
          <div key={num} className='w-full max-w-[900px]'>
            <div className='relative w-full'>
              <Image
                src={`/image/features/features${num}.png`}
                alt={`특장점 ${num}`}
                width={900}
                height={450}
                className='w-full h-auto object-contain'
                priority={num <= 2} // 처음 2개 이미지는 우선 로딩
              />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
