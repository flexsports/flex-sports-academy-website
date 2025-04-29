'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Home, Building2, Star, CheckCircle2, MapPin } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1250);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuStyle = `
    text-lg font-medium transition-colors duration-200
    text-white hover:text-[#00ADEE]
    relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:w-full after:h-[2px]
    after:bg-[#00ADEE] after:transition-transform after:duration-300
    after:transform after:scale-x-0 hover:after:scale-x-100
    h-[95px] flex items-center px-5
  `;

  const mobileMenuStyle = `
    text-lg font-medium py-3 px-8 w-full transition-colors duration-200
    text-black hover:text-[#00ADEE] hover:bg-gray-50
  `;

  const headerStyle = `
  fixed top-0 left-0 w-full z-50 transition-all duration-300
  ${isMobile ? 'bg-white' : isScrolled ? 'bg-black/30' : 'bg-transparent'}
`;

  const hamburgerLineStyle = `
    h-0.5 w-6 rounded-full transition-all duration-300
    min-[1250px]:${isScrolled ? 'bg-white' : 'bg-white'}
    max-[1249px]:bg-black
    ${isMobileMenuOpen ? 'bg-black' : ''}
  `;

  const aboutSubMenuItems = [
    { name: '인사말', path: '/about/' },
    { name: '강사진', path: '/about/instructors' },
    { name: '시설', path: '/about/facilities' },
    { name: '협력기관', path: '/about/partners' },
  ];

  return (
    <header className={`${headerStyle} min-[1250px]:h-[95px] h-[70px]`}>
      <div className='max-w-[1400px] min-[1250px]:h-[95px] h-[70px] mx-auto flex justify-between items-center px-4'>
        <div className='min-[1250px]:w-[160px] w-[120px] cursor-pointer'>
          <Link href='/'>
            <Image
              src={`/image/logo/${isMobile ? 'logo_black_black.svg' : 'logo_black_white.svg'}`}
              alt='Logo'
              width={115}
              height={70}
              className='min-[1250px]:w-[115px] w-[75px]'
              priority
            />
          </Link>
        </div>

        {/* 데스크톱 네비게이션 */}
        <nav className='hidden min-[1250px]:flex relative h-full'>
          <Link href='/' className={menuStyle}>
            홈
          </Link>
          <div
            className='relative h-full'
            onMouseEnter={() => setHoveredMenu('about')}
            onMouseLeave={() => setHoveredMenu(null)}
          >
            <Link href='/about' className={menuStyle}>
              학원소개
            </Link>
          </div>
          <Link href='/features' className={menuStyle}>
            특장점
          </Link>
          <Link href='/success' className={menuStyle}>
            합격자명단
          </Link>
          <Link href='/location' className={menuStyle}>
            오시는길
          </Link>
        </nav>

        {/* 햄버거 버튼 */}
        <button
          className='min-[1250px]:hidden flex flex-col gap-1.5 p-2 z-50'
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div
            className={`${hamburgerLineStyle} ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}
          />
          <div className={`${hamburgerLineStyle} ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
          <div
            className={`${hamburgerLineStyle} ${
              isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>

        {/* 모바일 메뉴 */}
        <div
          className={`fixed right-0 min-[1250px]:top-[95px] top-[70px] w-[280px] bg-white shadow-lg z-40 
            transition-transform duration-300 min-[1250px]:hidden min-[1250px]:h-[calc(100vh-95px)] h-[calc(100vh-70px)]
            ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <nav className='flex flex-col py-2 border-t border-gray-100 h-full overflow-y-auto'>
            <Link href='/' className={mobileMenuStyle} onClick={() => setIsMobileMenuOpen(false)}>
              <Home className='w-5 h-5 mr-2 mb-1 inline-block' />홈
            </Link>
            <Link
              href='/about'
              className={mobileMenuStyle}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Building2 className='w-5 h-5 mr-2 mb-1 inline-block' />
              학원소개
            </Link>
            {/* 모바일 학원소개 하위메뉴 */}
            <Link
              href='/about/'
              className={`${mobileMenuStyle} pl-12`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              - 인사말
            </Link>
            <Link
              href='/about/instructors'
              className={`${mobileMenuStyle} pl-12`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              - 강사진
            </Link>
            <Link
              href='/about/facilities'
              className={`${mobileMenuStyle} pl-12`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              - 시설
            </Link>
            <Link
              href='/about/partners'
              className={`${mobileMenuStyle} pl-12`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              - 협력기관
            </Link>
            <Link
              href='/features'
              className={mobileMenuStyle}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Star className='w-5 h-5 mr-2 mb-1 inline-block' />
              특장점
            </Link>
            <Link
              href='/success'
              className={mobileMenuStyle}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <CheckCircle2 className='w-5 h-5 mr-2 mb-1 inline-block' />
              합격자명단
            </Link>
            <Link
              href='/location'
              className={mobileMenuStyle}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <MapPin className='w-5 h-5 mr-2 mb-1 inline-block' />
              오시는길
            </Link>
          </nav>
        </div>

        {/* 모바일 메뉴 배경 오버레이 */}
        {isMobileMenuOpen && (
          <div
            className='fixed inset-0 bg-black/20 z-30 min-[1250px]:hidden'
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </div>

      {/* 서브메뉴 영역 - 화면 전체 길이 */}
      {hoveredMenu === 'about' && (
        <div
          className='absolute top-full left-0 w-full bg-black/30 py-4
            transition-all duration-300 transform z-40'
          onMouseEnter={() => setHoveredMenu('about')}
          onMouseLeave={() => setHoveredMenu(null)}
        >
          <div className='max-w-[1400px] mx-auto px-4'>
            <div className='flex ml-230 gap-8 fade-in'>
              {aboutSubMenuItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className='text-white text-base hover:text-[#00ADEE] transition-colors duration-200'
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
