import React from 'react';
import MapComponent from '../../components/MapComponent/MapComponent';

const SocialChildProject = () => {
  const socialChildProjectUrl = "https://services6.arcgis.com/jiszdsDupTUO3fSM/arcgis/rest/services/Schulsozialarbeit_FL_1/FeatureServer/0/query?outFields=*&where=1%3D1&f=geojson";

  return (
    <div className="social-child-project-page">
      <h1>Social Child Project Map</h1>
      <MapComponent url={socialChildProjectUrl} />
    </div>
  );
};

export default SocialChildProject;
