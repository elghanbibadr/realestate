import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

export default function Map() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey:"AIzaSyC3Y-w5c-6fWUh5d-yLIm4iCBo_dGAeiqY",
  });
  const center = useMemo(() => ({ lat: 24.8140228, lng:46.6189047 }), []);


  if (!isLoaded) return <div>Loading...</div>;
  return (
    <GoogleMap zoom={13} center={center} mapContainerClassName="map-container">
      <Marker position={center} />
    </GoogleMap>
  );
}

