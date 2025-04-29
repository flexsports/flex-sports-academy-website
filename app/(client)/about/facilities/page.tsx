'use client';

import React, { useState } from 'react';
import AboutPath from '@/components/common/AboutPath';
import Image from 'next/image';
import FacilityCarousel from '@/components/common/FacilityCarousel';

type Location = 'seoul' | 'suwon' | 'ilsan';

interface FacilityImage {
  src: string;
  alt: string;
}

const facilityImages: Record<Location, FacilityImage[]> = {
  seoul: Array.from({ length: 7 }, (_, i) => ({
    src: `/image/about/facilities/seoul/seoul${i + 1}.jpg`,
    alt: `서울광명본점 시설 이미지 ${i + 1}`,
  })),
  suwon: [
    ...Array.from({ length: 3 }, (_, i) => ({
      src: `/image/about/facilities/suwon/suwon${i + 1}.png`,
      alt: `수원직영점 시설 이미지 ${i + 1}`,
    })),
    {
      src: '/image/about/facilities/suwon/suwon4.jpg',
      alt: '수원직영점 시설 이미지 4',
    },
  ],
  ilsan: Array.from({ length: 7 }, (_, i) => ({
    src: `/image/about/facilities/Ilsan/Ilsan${i + 1}.jpg`,
    alt: `일산직영점 시설 이미지 ${i + 1}`,
  })),
};

const locationNames: Record<Location, string> = {
  seoul: '서울광명본점',
  suwon: '수원직영점',
  ilsan: '일산직영점',
};

export default function Facilities() {
  const [selectedLocation, setSelectedLocation] = useState<Location>('seoul');
  const [showCarousel, setShowCarousel] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  return (
    <>
      <AboutPath currentPage='시설' />
      <main className='max-w-[1200px] mx-auto pt-12'>
        <div className='w-full mb-[60px]'>
          <h2 className='text-[28px] font-bold mb-3'>시설</h2>
          <hr className='border-t border-gray-400 mb-[24px]' />

          {/* 지점 선택 버튼 */}
          <div className='flex flex-wrap gap-4 mb-8'>
            {(Object.keys(locationNames) as Location[]).map((location) => (
              <button
                key={location}
                onClick={() => setSelectedLocation(location)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all cursor-pointer
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

          {/* 시설 이미지 그리드 */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {facilityImages[selectedLocation].map((image, index) => (
              <div
                key={index}
                onClick={() => {
                  setSelectedImageIndex(index);
                  setShowCarousel(true);
                }}
                className='relative aspect-[4/3] rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer'
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className='object-cover'
                  sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                />
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* 캐러셀 모달 */}
      {showCarousel && (
        <FacilityCarousel
          images={facilityImages[selectedLocation]}
          initialIndex={selectedImageIndex}
          onClose={() => setShowCarousel(false)}
          locationName={locationNames[selectedLocation]}
        />
      )}
    </>
  );
}
