'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import toast, { Toaster } from 'react-hot-toast';

const slides = [
  {
    id: 1,
    src: '/image/main/main1.png',
    alt: 'Main Image 1',
    overlay: 'bg-black/20',
  },
  {
    id: 2,
    src: '/image/main/main2.jpg',
    alt: 'Main Image 2',
    overlay: 'bg-black/30',
  },
  {
    id: 3,
    src: '/image/main/main3.jpg',
    alt: 'Main Image 3',
    overlay: 'bg-black/20',
  },
];

const linkBoxes = [
  {
    title: '학원소개',
    subtitle: 'About Us',
    href: '/about',
    bgImage: '/image/linkbox/box_about.jpg',
  },
  {
    title: '특장점',
    subtitle: 'Features',
    href: '/features',
    bgImage: '/image/linkbox/box_features.jpg',
  },
  {
    title: '합격자명단',
    subtitle: 'Success Stories',
    href: '/success',
    bgImage: '/image/linkbox/box_success.jpg',
  },
  {
    title: '오시는길',
    subtitle: 'Location',
    href: '/location',
    bgImage: '/image/linkbox/box_location.png',
  },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (autoplay) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [autoplay]);

  const handleIndicatorClick = (index: number) => {
    setCurrentSlide(index);
    setAutoplay(false); // 클릭 시 자동 재생 일시 중지

    // 10초 후 자동 재생 다시 시작
    setTimeout(() => {
      setAutoplay(true);
    }, 1000);
  };

  const handlePhoneClick = (phoneNumber: string) => {
    if (typeof window !== 'undefined') {
      const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

      if (isMobile) {
        window.location.href = `tel:${phoneNumber}`;
      } else {
        toast.success('모바일에서 이용해주세요!', {
          duration: 3000,
          position: 'top-center',
          style: {
            background: '#ffffff',
            fontWeight: 'bold',
            borderRadius: '25px',
            padding: '12px',
          },
        });
      }
    }
  };

  return (
    <main className='overflow-x-hidden'>
      <Toaster />
      {/* 첫 번째 섹션 - 전체 화면 높이 */}
      <section className='h-screen relative'>
        {/* 배경 이미지 */}
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out
              ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          >
            <Image src={slide.src} alt={slide.alt} fill className='object-cover' priority />
            <div className={`absolute inset-0 ${slide.overlay}`} />
          </div>
        ))}

        {/* 중앙 컨텐츠 */}
        <div className='absolute inset-0 flex flex-col items-center justify-center z-10'>
          {/* 로고 */}
          <div className='flex flex-col items-center'>
            <div className='w-[140px] sm:w-[170px] md:w-[230px]'>
              <Image
                src='/image/logo/logo_center.svg'
                alt='Flex Sports Academy Logo'
                width={600}
                height={261}
                priority
              />
            </div>
            <div className='text-white text-3xl sm:text-4xl md:text-5xl font-bold mt-2 sm:mt-3 mb-6 sm:mb-9 mr-4 sm:mr-6 tracking-tighter italic'>
              플렉스체대입시
            </div>
          </div>

          {/* 메뉴 버튼 */}
          <div className='flex flex-wrap justify-center gap-2 sm:gap-3 mb-4 sm:mb-5 px-3 sm:px-4'>
            {['체대입시', '공무원체력', '사관학교'].map((text) => (
              <div
                key={text}
                className='px-4 sm:px-6 py-1.5 sm:py-2 border-1 border-white/50 rounded-4xl text-white text-base sm:text-lg font-bold'
              >
                {text}
              </div>
            ))}
          </div>

          {/* 슬로건 */}
          <div className='text-white text-xl sm:text-2xl mb-8 sm:mb-20 px-3 sm:px-4 text-center'>
            체대입시 합격을 FLEX 하라!
          </div>

          {/* 연락처 */}
          <div className='flex flex-col lg:flex-row gap-6 sm:gap-3 lg:gap-4'>
            <div
              className='bg-[#00ADEE] px-6 sm:px-8 py-1.5 sm:py-2 rounded-4xl cursor-pointer hover:bg-[#0095CB] transition-colors duration-300'
              onClick={() => handlePhoneClick('02-898-0070')}
            >
              <div className='flex items-center justify-center gap-3 sm:gap-2'>
                <div className='text-white text-base sm:text-xl font-bold'>
                  서울광명교육원(본점)
                </div>
                <div className='text-white text-lg sm:text-2xl font-bold'>02-898-0070</div>
              </div>
            </div>
            <div
              className='bg-[#00ADEE] px-6 sm:px-8 py-1.5 sm:py-2 rounded-4xl cursor-pointer hover:bg-[#0095CB] transition-colors duration-300'
              onClick={() => handlePhoneClick('031-256-3751')}
            >
              <div className='flex items-center justify-center gap-3 sm:gap-2'>
                <div className='text-white text-base sm:text-xl font-bold'>수원교육원(직영)</div>
                <div className='text-white text-lg sm:text-2xl font-bold'>031-256-3751</div>
              </div>
            </div>
            <div
              className='bg-[#00ADEE] px-6 sm:px-8 py-1.5 sm:py-2 rounded-4xl cursor-pointer hover:bg-[#0095CB] transition-colors duration-300'
              onClick={() => handlePhoneClick('0507-1421-3660')}
            >
              <div className='flex items-center justify-center gap-3 sm:gap-2'>
                <div className='text-white text-base sm:text-xl font-bold'>일산교육원(직영)</div>
                <div className='text-white text-lg sm:text-2xl font-bold'>0507-1421-3660</div>
              </div>
            </div>
          </div>

          {/* 캐러셀 인디케이터 */}
          <div className='flex gap-3 mt-30'>
            {slides.map((_, index) => (
              <div
                key={index}
                className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 cursor-pointer
                  ${index === currentSlide ? 'bg-[#00ADEE]' : 'bg-white/50'}`}
                onClick={() => handleIndicatorClick(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 링크 박스 섹션 */}
      <section className='relative -mt-[10vh] sm:-mt-[15vh] px-3 sm:px-4 md:px-6'>
        <div className='max-w-[1400px] mx-auto'>
          <div className='grid grid-cols-2 lg:grid-cols-4 gap-0 xs:gap-2 sm:gap-4 md:gap-6 justify-items-center'>
            {linkBoxes.map((box) => (
              <Link
                href={box.href}
                key={box.title}
                className='relative group p-0 xs:p-1 sm:p-2 w-full max-w-[313px]'
              >
                {/* 외부 테두리 */}
                <div className='absolute inset-0 border-8 border-[#00ADEE] opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out z-10'></div>
                <div className='relative w-full aspect-[1.15/1]'>
                  <div className='absolute inset-0 overflow-hidden'>
                    {/* 배경 이미지 */}
                    <Image
                      src={box.bgImage}
                      alt={box.title}
                      fill
                      className='object-cover transition-transform duration-300 ease-in-out'
                    />
                    {/* 오버레이 */}
                    <div className='absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-300 ease-in-out'></div>
                  </div>
                  {/* 텍스트 컨테이너 */}
                  <div className='absolute top-3 sm:top-4 md:top-6 left-3 sm:left-4 md:left-6 z-10 p-2 sm:p-3'>
                    {/* 직선 디자인 */}
                    <div className='w-4 sm:w-5 md:w-6 h-[2px] sm:h-[3px] bg-white group-hover:bg-[#00ADEE] transition-all duration-300 ease-in-out mb-1.5 sm:mb-2'></div>
                    {/* 한글 텍스트 */}
                    <div className='text-white text-base sm:text-lg md:text-2xl font-bold transition-colors duration-300 ease-in-out'>
                      {box.title}
                    </div>
                    {/* 영문 텍스트 */}
                    <div className='text-white/80 text-xs sm:text-sm md:text-base pl-0.5 sm:pl-1 transition-colors duration-300 ease-in-out'>
                      {box.subtitle}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
