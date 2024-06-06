import React from 'react';
import MapComponent from '../../components/MapComponent/MapComponent';

const SocialTeenagerProject = () => {
  const socialTeenagerProjectUrl = "https://services6.arcgis.com/jiszdsDupTUO3fSM/arcgis/rest/services/Jugendberufshilfen_FL_1/FeatureServer/0/query?outFields=*&where=1%3D1&f=geojson";

  return (
    <div className="social-teenager-project-page">
      <h1>Social Teenager Project Map</h1>
      <MapComponent url={socialTeenagerProjectUrl} />
    </div>
  );
};

export default SocialTeenagerProject;
