'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { MdAccessTime, MdLocationOn, MdPhone } from 'react-icons/md';
import { SiNaver } from 'react-icons/si';
import KakaoMap from '@/components/common/KakaoMap';

type Location = 'seoul' | 'suwon' | 'ilsan';

interface BranchInfo {
  name: string;
  address: string;
  operatingHours: {
    isAllDay: boolean;
    hours: string;
  };
  phone: {
    landline: string;
    mobile: string;
  };
  mapPosition: {
    lat: number;
    lng: number;
  };
  naverPlaceUrl: string;
  instagramUrl: string;
  blogUrl: string;
}

const locationData: Record<Location, BranchInfo> = {
  seoul: {
    name: '서울광명본점',
    address: '경기 광명시 하안동 61-1',
    operatingHours: {
      isAllDay: true,
      hours: '매일 00:00 ~ 24:00',
    },
    phone: {
      landline: '02-898-0070',
      mobile: '010-7587-0804',
    },
    mapPosition: {
      lat: 37.462399,
      lng: 126.881308,
    },
    naverPlaceUrl:
      'https://map.naver.com/p/entry/place/36630921?placePath=%252Fhome%253Fentry%253Dplt&searchType=place&lng=126.8813522&lat=37.4622423&c=15.00,0,0,0,dh',
    instagramUrl: 'https://www.instagram.com/flex_seoulgm/',
    blogUrl: 'https://blog.naver.com/sd_sports',
  },
  suwon: {
    name: '수원직영점',
    address: '경기 수원시 장안구 영화동 443-13',
    operatingHours: {
      isAllDay: true,
      hours: '매일 00:00 ~ 24:00',
    },
    phone: {
      landline: '031-256-3751',
      mobile: '010-7587-0804',
    },
    mapPosition: {
      lat: 37.234567,
      lng: 126.234567,
    },
    naverPlaceUrl:
      'https://map.naver.com/p/entry/place/518465931?placePath=%252Fhome%253Fentry%253Dplt&searchType=place&lng=127.0088520&lat=37.2864709&c=15.00,0,0,0,dh',
    instagramUrl: 'https://www.instagram.com/flex_suwon/',
    blogUrl: 'https://blog.naver.com/twin0926s',
  },
  ilsan: {
    name: '일산직영점',
    address: '경기 고양시 일산서구 일산동 1066',
    operatingHours: {
      isAllDay: true,
      hours: '매일 10:00 ~ 24:00',
    },
    phone: {
      landline: '0507-1421-3660',
      mobile: '010-3050-3660',
    },
    mapPosition: {
      lat: 37.345678,
      lng: 126.345678,
    },
    naverPlaceUrl:
      'https://map.naver.com/p/search/%ED%94%8C%EB%A0%89%EC%8A%A4%EC%B2%B4%EB%8C%80%EC%9E%85%EC%8B%9C%20%EA%B3%A0%EC%96%91/place/1406433522?placePath=?entry=pll&from=nx&fromNxList=true&searchType=place&c=15.00,0,0,0,dh',
    instagramUrl: 'https://www.instagram.com/flex_ilsan/',
    blogUrl: 'https://blog.naver.com/flex-ilsan',
  },
};

const locationNames: Record<Location, string> = {
  seoul: '서울광명교육원(본점)',
  suwon: '수원교육원(직영)',
  ilsan: '일산교육원(직영)',
};

export default function Location() {
  const [selectedLocation, setSelectedLocation] = useState<Location>('seoul');
  const branchInfo = locationData[selectedLocation];

  return (
    <main className='max-w-[1200px] mx-auto pt-[60px] sm:pt-[80px] lg:pt-[95.5px] px-4 lg:px-0'>
      <div className='w-full mb-8 lg:mb-[60px]'>
        <h2 className='text-[28px] font-bold mb-3'>오시는길</h2>
        <hr className='border-t border-gray-400 mb-[24px]' />

        {/* 지점 선택 버튼 */}
        <div className='flex flex-wrap gap-3 mb-8'>
          {(Object.keys(locationNames) as Location[]).map((location) => (
            <button
              key={location}
              onClick={() => setSelectedLocation(location)}
              className={`px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer flex-1 sm:flex-none
                ${
                  selectedLocation === location
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
            >
              {locationNames[location]}
            </button>
          ))}
        </div>

        {/* 지도와 정보 컨테이너 */}
        <div className='flex flex-col lg:flex-row gap-8'>
          {/* 지도 영역 */}
          <div className='w-full lg:w-[640px] h-[400px] lg:h-[500px]'>
            <KakaoMap address={branchInfo.address} />
          </div>

          {/* 지점 정보 */}
          <div className='flex-1 flex flex-col'>
            {/* 운영시간 */}
            <div className='mb-8 lg:mb-10'>
              <div className='flex items-center gap-2 mb-3 lg:mb-4'>
                <MdAccessTime className='text-xl lg:text-2xl text-blue-600' />
                <h3 className='text-lg lg:text-xl font-bold'>운영시간</h3>
              </div>
              <div className='space-y-1 text-gray-600 text-[15px] lg:text-base'>
                {branchInfo.operatingHours.isAllDay && <p>연중무휴</p>}
                <p>{branchInfo.operatingHours.hours}</p>
              </div>
            </div>

            {/* 찾아오시는 길 */}
            <div className='mb-8 lg:mb-10'>
              <div className='flex items-center gap-2 mb-3 lg:mb-4'>
                <MdLocationOn className='text-xl lg:text-2xl text-blue-600' />
                <h3 className='text-lg lg:text-xl font-bold'>찾아오시는 길</h3>
              </div>
              <p className='text-gray-600 break-keep text-[15px] lg:text-base'>
                {branchInfo.address}
              </p>
            </div>

            {/* 전화번호 */}
            <div className='mb-8 lg:mb-10'>
              <div className='flex items-center gap-2 mb-3 lg:mb-4'>
                <MdPhone className='text-xl lg:text-2xl text-blue-600' />
                <h3 className='text-lg lg:text-xl font-bold'>전화번호</h3>
              </div>
              <div className='space-y-1 text-gray-600 text-[15px] lg:text-base'>
                <p>{branchInfo.phone.landline}</p>
                <p>{branchInfo.phone.mobile}</p>
              </div>
            </div>

            {/* 네이버 플레이스, 인스타그램, 네이버블로그 링크 */}
            <div className='flex-grow flex items-start mt-5 gap-3'>
              <a
                href={branchInfo.naverPlaceUrl}
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center gap-2 px-6 sm:px-8 py-2.5 sm:py-2 bg-[#2DB400] text-white rounded-lg hover:bg-[#249c00] transition-colors text-[15px] sm:text-lg font-bold'
              >
                <SiNaver className='text-lg sm:text-xl' />
                <span>네이버플레이스</span>
              </a>
              <a
                href={branchInfo.instagramUrl}
                target='_blank'
                rel='noopener noreferrer'
                className='hover:opacity-80 transition-opacity -mt-1.5 sm:-mt-2.5'
              >
                <Image
                  src='/image/icon/instagram_icon.svg'
                  alt='Instagram'
                  width={52}
                  height={52}
                  className='sm:w-[64px] sm:h-[64px]'
                />
              </a>
              <a
                href={branchInfo.blogUrl}
                target='_blank'
                rel='noopener noreferrer'
                className='hover:opacity-80 transition-opacity -mt-1.25 sm:-mt-2'
              >
                <Image
                  src='/image/icon/naverblog_icon.svg'
                  alt='Naver Blog'
                  width={52}
                  height={52}
                  className='sm:w-[64px] sm:h-[64px]'
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
