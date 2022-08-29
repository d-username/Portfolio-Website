import { GoogleMap, MarkerF, useLoadScript } from '@react-google-maps/api';
import './map.css';
import {useMemo} from "react"

export function Map() {
  const { isLoaded } = useLoadScript({
    // googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) return <div>Loading...</div>

  return (
    <div id="map-container" >
      <TheMap />
    </div>
  );

}

function TheMap() {
    const options = useMemo(
      () => ({
        disableDefaultUI: true,
        clickableIcons: false,
        mapId: 'e138e45c281430cd',
      }),
      []
    );

  return (
    <GoogleMap
      zoom={6}
      center={{ lat: 52.240479, lng: -0.902656 }}
      id='map'
      options={options}
    >
      <MarkerF position={{ lat: 51.509865, lng: -0.118092 }} />
    </GoogleMap>
  );
}
