declare global {
  interface Window {
    kakao: {
      maps: {
        load: (callback: () => void) => void;
        LatLng: new (lat: number, lng: number) => kakao.maps.LatLng;
        Map: new (container: HTMLElement, options: kakao.maps.MapOptions) => kakao.maps.Map;
        Marker: new (options: { position: kakao.maps.LatLng }) => kakao.maps.Marker;
      };
    };
  }
}

declare namespace kakao.maps {
  export interface LatLng {
    getLat(): number;
    getLng(): number;
  }

  export interface MapOptions {
    center: LatLng;
    level: number;
  }

  export interface Map {
    setCenter(position: LatLng): void;
    getLevel(): number;
    setLevel(level: number): void;
  }

  export interface Marker {
    setMap(map: Map | null): void;
    getPosition(): LatLng;
  }
}

export {};
