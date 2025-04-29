'use client';

import { useEffect, useRef, useState } from 'react';

interface KakaoMapProps {
  address: string;
}

interface GeocodeResult {
  x: string;
  y: string;
}

export default function KakaoMap({ address }: KakaoMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const [coordinates, setCoordinates] = useState<{ lat: number; lng: number } | null>(null);

  useEffect(() => {
    if (window.kakao?.maps) {
      const initializeKakaoMaps = () => {
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
              setCoordinates(coords);
            } else {
              console.error('주소를 찾을 수 없습니다:', address);
            }
          });
        });
      };

      initializeKakaoMaps();
    }
  }, [address]);

  useEffect(() => {
    if (!mapRef.current || !coordinates) return;

    try {
      const options = {
        center: new window.kakao.maps.LatLng(coordinates.lat, coordinates.lng),
        level: 3,
      };

      const map = new window.kakao.maps.Map(mapRef.current, options);
      const markerPosition = new window.kakao.maps.LatLng(coordinates.lat, coordinates.lng);
      const marker = new window.kakao.maps.Marker({
        position: markerPosition,
      });

      marker.setMap(map);
    } catch (error) {
      console.error('카카오맵 렌더링 중 오류 발생:', error);
    }
  }, [coordinates]);

  return (
    <div ref={mapRef} style={{ width: '100%', height: '100%' }}>
      {!coordinates && (
        <div className='w-full h-full flex items-center justify-center bg-gray-100'>
          지도를 불러오는 중...
        </div>
      )}
    </div>
  );
}
