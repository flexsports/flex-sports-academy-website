import React, { useState } from 'react';
import Image from 'next/image';
import { IoClose } from 'react-icons/io5';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

interface FacilityImage {
  src: string;
  alt: string;
}

interface FacilityCarouselProps {
  images: FacilityImage[];
  initialIndex: number;
  onClose: () => void;
  locationName: string;
}

export default function FacilityCarousel({
  images,
  initialIndex,
  onClose,
  locationName,
}: FacilityCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div
      className='fixed inset-0 bg-gray-900/30 backdrop-blur-xs z-50 flex items-center justify-center'
      onClick={onClose}
    >
      <div
        className='relative w-full max-w-[1000px] aspect-video bg-black rounded-lg shadow-2xl'
        onClick={(e) => e.stopPropagation()}
      >
        {/* 닫기 버튼 */}
        <button
          onClick={onClose}
          className='absolute -top-10 right-0 text-white hover:text-gray-300 z-50 cursor-pointer'
        >
          <IoClose size={32} />
        </button>

        {/* 위치 정보 */}
        <div className='absolute -top-10 left-0 text-white text-xl font-semibold z-50'>
          {locationName}
        </div>

        {/* 이전 버튼 */}
        <button
          onClick={handlePrevious}
          className='absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors cursor-pointer bg-black/50 p-2 rounded-full hover:bg-black/70 z-20'
        >
          <IoIosArrowBack size={30} />
        </button>

        {/* 이미지 */}
        <div className='relative w-full h-full flex items-center justify-center rounded-lg overflow-hidden z-10'>
          <Image
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            fill
            className='object-contain'
            sizes='800px'
            priority
          />
        </div>

        {/* 다음 버튼 */}
        <button
          onClick={handleNext}
          className='absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors cursor-pointer bg-black/50 p-2 rounded-full hover:bg-black/70 z-20'
        >
          <IoIosArrowForward size={30} />
        </button>

        {/* 인디케이터 닷 */}
        <div className='absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20'>
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer
                ${currentIndex === index ? 'bg-white scale-110' : 'bg-white/50 hover:bg-white/70'}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
