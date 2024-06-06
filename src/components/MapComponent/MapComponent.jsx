import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import axios from 'axios';
import 'leaflet/dist/leaflet.css';
import './mapComponent.css';

const MapComponent = ({ url }) => {
  const [geoData, setGeoData] = useState(null);

  useEffect(() => {
    axios.get(url).then(response => {
      setGeoData(response.data);
    }).catch(error => {
      console.error("Error fetching the GeoJSON data", error);
    });
  }, [url]);

  return (
    <div className="map-container">
      <MapContainer center={[50.8333, 12.9167]} zoom={13} style={{ height: "100vh", width: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {geoData && <GeoJSON data={geoData} />}
      </MapContainer>
    </div>
  );
};

export default MapComponent;
