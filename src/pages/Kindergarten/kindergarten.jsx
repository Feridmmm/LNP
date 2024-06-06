import React from 'react';
import MapComponent from '../../components/MapComponent/MapComponent';

const Kindergarten = () => {
  const kindergartenUrl = "https://services6.arcgis.com/jiszdsDupTUO3fSM/arcgis/rest/services/Kindertageseinrichtungen_Sicht/FeatureServer/0/query?outFields=*&where=1%3D1&f=geojson";

  return (
    <div className="kindergarten-page">
      <h1>Kindergarten Map</h1>
      <MapComponent url={kindergartenUrl} />
    </div>
  );
};

export default Kindergarten;
