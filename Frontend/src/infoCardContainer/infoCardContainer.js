import React, { useState, useEffect } from "react";
import "../infoCardContainer/infoCardContainer.css";
import InfoCard from "../infoCard/InfoCard";
import LocationHeader from "../locationHeader/LocationHeader";
import algoliasearch from "algoliasearch/lite";
import Geocode from "react-geocode";
import {
  InstantSearch,
  InfiniteHits,
  Pagination,
  Highlight,
  ClearRefinements,
  RefinementList,
  Configure,
  connectSearchBox,
} from "react-instantsearch-dom";
import PropTypes from "prop-types";
import GoogleMap from "../googleMap/GoogleMap";

Geocode.setApiKey("AIzaSyCgvjTPE6Hqy9fEVo4332nys7Cpunn06oE");

Geocode.setLanguage("en");

Geocode.setLocationType("ROOFTOP");

Geocode.enableDebug();

const searchClient = algoliasearch(
  "A8LQ861XZY",
  "0b476f98a04f33f57d6f0b459a403111"
);
const SearchBox = ({ currentRefinement, isSearchStalled, refine }) => (
  <form noValidate action="" role="search">
    <input
      class="searchBox"
      placeholder="Search for a shelter..."
      type="search"
      value={currentRefinement}
      onChange={(event) => refine(event.currentTarget.value)}
    />
    <button class="resetQuery" onClick={() => refine("")}>
      Reset query
    </button>
    {isSearchStalled ? "My search is stalled" : ""}
  </form>
);

const CustomSearchBox = connectSearchBox(SearchBox);

const InfoCardContainer = () => {
  const [items, setItems] = useState([]);
  const [address, setAddress] = useState("Please select a location");
  const [shelterName, setShelterName] = useState("");
  const [link, setLink] = useState("");
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/comments"
      );
      const data = await response.json();
      setItems(data);
    };
    fetchData();
    console.log(items);
  }, []);

  const changeLocationHeader = (address,shelterName, link) => {
    Geocode.fromAddress(address).then((response) => {
      const { lat, lng } = response.results[0].geometry.location;
      setLat(lat);
      setLng(lng);
      setAddress(address);
      setShelterName(shelterName)
      setLink(link)
    });
    console.log(link)
    console.log(lat, lng);
    console.log(address);
  };

  function Hit(props) {
    return (
      <div className="infoCardContainer" id="like-scroll">
        <InfoCard
          key={props.hit.objectID}
          shelterName={props.hit.FACILITY_NAME}
          shelterType={props.hit.SECTOR}
          shelterOccupancy={props.hit.OCCUPANCY}
          shelterCapacity={props.hit.CAPACITY}
          onClick={() => changeLocationHeader(props.hit.SHELTER_ADDRESS, props.hit.FACILITY_NAME, props.hit.URL)}
        />
      </div>
    );
  }

  Hit.propTypes = {
    hit: PropTypes.object.isRequired,
  };

  return (
    <div>
      <div className="row">
        <div classname="col-md-6">
          <div className="ais-InstantSearch">
            <InstantSearch indexName="demo_geo_3" searchClient={searchClient}>
              <div className="right-panel">
                <CustomSearchBox />
                <div className="infoCardContainer" id="like-scroll">
                  <InfiniteHits hitComponent={Hit} />
                </div>
              </div>
            </InstantSearch>
          </div>
        </div>
        <div classname="col-md-6">
          <LocationHeader shelterAddress={address} link={link} />
          <GoogleMap shelterAddress={address} lat={lat} lng={lng} shelterName={shelterName} />
        </div>
      </div>
    </div>
  );
};

export default InfoCardContainer;
