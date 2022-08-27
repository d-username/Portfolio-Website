import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import './map.css';
import {useMemo} from "react"

export function Map() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });


  if (!isLoaded) return <div>Loading...</div>

  return <TheMap />;
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
      center={{ lat: 51.507226, lng: -0.127579 }}
      mapContainerClassName='map-container'
      options={options}
    >
    </GoogleMap>
  );
}