import React from 'react';
import Image from 'next/image';

export default function Features() {
  return (
    <main className='max-w-[1200px] mx-auto pt-[95.5px]'>
      <div className='w-full mb-[60px]'>
        <h2 className='text-[28px] font-bold mb-3'>특장점</h2>
        <hr className='border-t border-gray-400 mb-[40px]' />
      </div>
      <div className='flex flex-col gap-8 items-center'>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
          <div key={num} className='w-[900px]'>
            <Image
              src={`/image/features/features${num}.png`}
              alt={`특장점 ${num}`}
              width={800}
              height={400}
              className='w-full h-auto'
            />
          </div>
        ))}
      </div>
    </main>
  );
}
