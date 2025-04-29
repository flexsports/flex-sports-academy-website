'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === '/';
    }
    return pathname === path || pathname.startsWith(`${path}/`);
  };

  const getMenuStyle = (path: string) => `
    text-lg font-medium transition-colors duration-200
    ${isActive(path) ? 'text-[#00ADEE]' : 'text-black hover:text-[#00ADEE]'}
    relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:w-full after:h-[2px]
    after:bg-[#00ADEE] after:transition-transform after:duration-300
    after:transform ${
      isActive(path) ? 'after:scale-x-100' : 'after:scale-x-0 hover:after:scale-x-100'
    }
    h-[95px] flex items-center px-5
  `;

  const getMobileMenuStyle = (path: string) => `
    text-lg font-medium py-3 px-8 w-full transition-colors duration-200
    ${isActive(path) ? 'text-[#00ADEE]' : 'text-black hover:text-[#00ADEE]'} hover:bg-gray-50
  `;

  const headerStyle = `
    fixed top-0 left-0 w-full z-50 transition-all duration-300
    bg-white shadow-sm
  `;

  const hamburgerLineStyle = `
    h-0.5 w-6 rounded-full transition-all duration-300
    bg-black
    ${isMobileMenuOpen ? 'bg-[#00ADEE]' : ''}
  `;

  const aboutSubMenuItems = [
    { name: '인사말', path: '/about/' },
    { name: '강사진', path: '/about/instructors' },
    { name: '시설', path: '/about/facilities' },
    { name: '협력기관', path: '/about/partners' },
  ];

  return (
    <>
      <header className={`${headerStyle} h-[95px]`}>
        <div className='max-w-[1400px] h-[95px] mx-auto flex justify-between items-center px-4'>
          <div className='w-[160px] cursor-pointer'>
            <Link href='/'>
              <Image
                src='/image/logo/logo_black_black.svg'
                alt='Logo'
                width={115}
                height={70}
                priority
              />
            </Link>
          </div>

          {/* 데스크톱 네비게이션 */}
          <nav className='hidden md:flex relative h-full'>
            <Link href='/' className={getMenuStyle('/')}>
              홈
            </Link>
            <div
              className='relative h-full'
              onMouseEnter={() => setHoveredMenu('about')}
              onMouseLeave={() => setHoveredMenu(null)}
            >
              <Link href='/about' className={getMenuStyle('/about')}>
                학원소개
              </Link>
            </div>
            <Link href='/features' className={getMenuStyle('/features')}>
              특장점
            </Link>
            <Link href='/success' className={getMenuStyle('/success')}>
              합격자명단
            </Link>
            <Link href='/location' className={getMenuStyle('/location')}>
              오시는길
            </Link>
          </nav>

          {/* 햄버거 버튼 */}
          <button
            className='md:hidden flex flex-col gap-1.5 p-2 z-50'
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div
              className={`${hamburgerLineStyle} ${
                isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
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
            className={`fixed right-0 top-[95px] w-[280px] bg-white shadow-lg z-40 
              transition-transform duration-300 md:hidden
              ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
          >
            <nav className='flex flex-col py-2 border-t border-gray-100'>
              <Link href='/' className={getMobileMenuStyle('/')}>
                홈
              </Link>
              <Link href='/about' className={getMobileMenuStyle('/about')}>
                학원소개
              </Link>
              {/* 모바일 학원소개 하위메뉴 */}
              <Link
                href='/about/greeting'
                className={`${getMobileMenuStyle('/about/greeting')} pl-12`}
              >
                인사말
              </Link>
              <Link
                href='/about/faculty'
                className={`${getMobileMenuStyle('/about/faculty')} pl-12`}
              >
                강사진
              </Link>
              <Link
                href='/about/facilities'
                className={`${getMobileMenuStyle('/about/facilities')} pl-12`}
              >
                시설
              </Link>
              <Link
                href='/about/partners'
                className={`${getMobileMenuStyle('/about/partners')} pl-12`}
              >
                협력기관
              </Link>
              <Link href='/features' className={getMobileMenuStyle('/features')}>
                특장점
              </Link>
              <Link href='/success' className={getMobileMenuStyle('/success')}>
                합격자명단
              </Link>
              <Link href='/location' className={getMobileMenuStyle('/location')}>
                오시는길
              </Link>
            </nav>
          </div>

          {/* 모바일 메뉴 배경 오버레이 */}
          {isMobileMenuOpen && (
            <div
              className='fixed inset-0 bg-black/20 z-30 md:hidden'
              onClick={() => setIsMobileMenuOpen(false)}
            />
          )}
        </div>
      </header>

      {/* 서브메뉴 영역 - 화면 전체 길이 */}
      {hoveredMenu === 'about' && (
        <div
          className='fixed top-[95px] left-0 w-full bg-white shadow-xs h-[47.5px] flex items-center
            transition-all duration-300 transform z-40'
          onMouseEnter={() => setHoveredMenu('about')}
          onMouseLeave={() => setHoveredMenu(null)}
        >
          <div className='max-w-[1400px] mx-auto px-4 h-full flex items-center pr-30'>
            <div className='flex ml-230 gap-8 fade-in'>
              {aboutSubMenuItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`text-base transition-colors duration-200 ${
                    pathname === item.path ? 'text-[#00ADEE]' : 'text-black hover:text-[#00ADEE]'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
