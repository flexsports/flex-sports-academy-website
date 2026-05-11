'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';


const POPUP_COOKIE_KEY = 'popup_banner_hidden';

function getCookie(name: string): string | null {
  if (typeof document === 'undefined') return null;
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  return match ? decodeURIComponent(match[2]) : null;
}

function setCookie(name: string, value: string, days: number) {
  const expires = new Date();
  expires.setDate(expires.getDate() + days);
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires.toUTCString()}; path=/`;
}

export default function PopupBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hidden = getCookie(POPUP_COOKIE_KEY);
    if (!hidden) {
      setVisible(true);
    }
  }, []);

  const handleClose = () => {
    setVisible(false);
  };

  const handleHideForWeek = () => {
    setCookie(POPUP_COOKIE_KEY, 'true', 7);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    /* 오버레이 */
    <div
      className="fixed inset-0 z-9999 flex items-center justify-center bg-black/60 backdrop-blur-sm"
      onClick={handleClose}
    >
      {/* 팝업 컨테이너 */}
      <div
        className="relative flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
        style={{ animation: 'popupFadeIn 0.35s ease' }}
      >


        {/* 이미지 영역 - 1123:1587 비율 유지 */}
        <Link
          href="https://form.naver.com/response/F_Umkxrnz5-QRKjNnd6psQ"
          target="_blank"
          rel="noopener noreferrer"
          className="block cursor-pointer"
          style={{
            width: 'min(90vw, 420px)',
          }}
        >
          <div
            className="relative overflow-hidden rounded-t-lg shadow-2xl"
            style={{
              width: '100%',
              aspectRatio: '1123 / 1587',
            }}
          >
            <Image
              src="/image/popup/popup2.png"
              alt="팝업 배너"
              fill
              className="object-cover"
              priority
            />
          </div>
        </Link>

        {/* 하단 버튼 영역 */}
        <div className="flex w-full mt-0 rounded-b-lg overflow-hidden">
          <button
            onClick={handleHideForWeek}
            className="flex-1 py-3 bg-gray-800 hover:bg-gray-700 text-white text-sm font-medium transition-colors duration-200 cursor-pointer"
          >
            1주일간 보지 않기
          </button>
          <div className="w-px bg-gray-600" />
          <button
            onClick={handleClose}
            className="flex-1 py-3 bg-gray-800 hover:bg-gray-700 text-white text-sm font-medium transition-colors duration-200 cursor-pointer"
          >
            닫기
          </button>
        </div>
      </div>

      <style jsx global>{`
        @keyframes popupFadeIn {
          from {
            opacity: 0;
            transform: translateY(24px) scale(0.97);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </div>
  );
}
