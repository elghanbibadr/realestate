import React, { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const MyMap = ({
  containerClassName,
  zoomControl = true,
  fullscreenControl = true,
}) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyC3Y-w5c-6fWUh5d-yLIm4iCBo_dGAeiqY",
  });

  const center = useMemo(() => ({ lat: 24.8140228, lng: 46.6189047 }), []);

  if (!isLoaded) return <div>Loading...</div>;
  return (
    <GoogleMap
      options={{
        streetViewControl: false,
        mapTypeControl: false, // Remove Map and Satellite buttons
        zoomControl: zoomControl, // Remove the zoom control
        fullscreenControl: fullscreenControl, // Remove the full-screen control
      }}
      zoom={13}
      center={center}
      mapContainerClassName={containerClassName}
    >
      <Marker position={center} />
    </GoogleMap>
  );
};

export default MyMap;
