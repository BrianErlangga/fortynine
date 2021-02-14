import React from "react";
import "../locationHeader/LocationHeader.css";

const LocationHeader = ({ shelterAddress, link }) => {
  return (
    <div className="locationHeader">
      <h1>{shelterAddress}</h1>
      <a  
      class="submitBtn googleMapsBtn"
      href={link}
      target='_blank'
      >
      Open in Google Maps
      </a>
    </div>
  );
};

export default LocationHeader;
