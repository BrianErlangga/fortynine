import React, { Component, useEffect } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import '../googleMap/GoogleMap.css'

const mapStyles = {
    width: "643px",
    height: '500px',
};

export class GoogleMap extends Component { 
  state = {
    showingInfoWindow: false,  // Hides or shows the InfoWindow
    activeMarker: {},          // Shows the active marker upon click
    selectedPlace: {}          // Shows the InfoWindow to the selected place upon a marker
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

    render() {
    const latt = this.props.lat;
    const lngg = this.props.lng;
    const shelterName = this.props.shelterName
    const shelterAddress = this.props.shelterAddress
    var address = shelterAddress;

   
    return (
        <div className="mapContainer">
        <Map
        google={this.props.google}
        zoom={16}
        style={mapStyles}
        initialCenter = {{
          lat: 43.6534438,
          lng:-79.3862788
        }}
        center={
            {
            lat: latt,
            lng: lngg
            }
        }
        >
          <Marker position={{lat: latt, lng: lngg}} onClick={this.onMarkerClick}/>
          <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{shelterName}</h4>
          </div>
        </InfoWindow>
      </Map>
        </div>
      
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCgvjTPE6Hqy9fEVo4332nys7Cpunn06oE'
})(GoogleMap);