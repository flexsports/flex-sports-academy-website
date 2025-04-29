'use client';

import { useEffect, useRef, useState } from 'react';
import Script from 'next/script';
import type { kakao } from '../../types/kakao';

interface KakaoMapProps {
  address: string;
}

interface GeocodeResult {
  x: string;
  y: string;
}

export default function KakaoMap({ address }: KakaoMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const [mapInstance, setMapInstance] = useState<kakao.maps.Map | null>(null);

  useEffect(() => {
    const initializeKakaoMap = () => {
      if (!mapRef.current || !window.kakao?.maps) return;

      window.kakao.maps.load(() => {
        if (!window.kakao?.maps?.services?.Geocoder) {
          console.error('Kakao Maps Services not loaded');
          return;
        }

        const geocoder = new window.kakao.maps.services.Geocoder();

        geocoder.addressSearch(address, (result: GeocodeResult[], status: string) => {
          if (status === window.kakao.maps.services.Status.OK) {
            const coords = {
              lat: Number(result[0].y),
              lng: Number(result[0].x),
            };

            try {
              const options: kakao.maps.MapOptions = {
                center: new window.kakao.maps.LatLng(coords.lat, coords.lng),
                level: 3,
              };

              const map = new window.kakao.maps.Map(mapRef.current!, options);
              const markerPosition = new window.kakao.maps.LatLng(coords.lat, coords.lng);
              const marker = new window.kakao.maps.Marker({
                position: markerPosition,
              });

              marker.setMap(map);
              setMapInstance(map);
            } catch (error) {
              console.error('카카오맵 렌더링 중 오류 발생:', error);
            }
          } else {
            console.error('주소를 찾을 수 없습니다:', address);
          }
        });
      });
    };

    // 스크립트가 이미 로드되어 있는 경우
    if (window.kakao?.maps) {
      initializeKakaoMap();
    }

    // 스크립트가 로드되는 것을 감지
    const handleScriptLoad = () => {
      initializeKakaoMap();
    };

    window.addEventListener('load', handleScriptLoad);

    return () => {
      window.removeEventListener('load', handleScriptLoad);
      if (mapInstance) {
        // 메모리 누수 방지를 위한 정리
        setMapInstance(null);
      }
    };
  }, [address, mapInstance]);

  return (
    <>
      <Script
        strategy='afterInteractive'
        src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_API_KEY}&libraries=services&autoload=false`}
      />
      <div ref={mapRef} style={{ width: '100%', height: '100%' }}>
        {!mapInstance && (
          <div className='w-full h-full flex items-center justify-center bg-gray-100'>
            지도를 불러오는 중...
          </div>
        )}
      </div>
    </>
  );
}
