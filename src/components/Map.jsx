import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import './map.css';

export function Map() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) return <div>Loading...</div>

  return <TheMap />;
}


function TheMap() {
  return <GoogleMap zoom={10} center={{lat:44, lng: -80}} mapContainerClassName='map-container'></GoogleMap>
}