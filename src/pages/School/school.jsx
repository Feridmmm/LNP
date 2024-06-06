import React from 'react';
import MapComponent from '../../components/MapComponent/MapComponent';

const School = () => {
  const schoolUrl = "https://services6.arcgis.com/jiszdsDupTUO3fSM/arcgis/rest/services/Schulen_OpenData/FeatureServer/0/query?outFields=*&where=1%3D1&f=geojson";

  return (
    <div className="school-page">
      <h1>Schools Map</h1>
      <MapComponent url={schoolUrl} />
    </div>
  );
};

export default School;
