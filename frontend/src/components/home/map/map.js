import React from "react";
import mapboxgl from "mapbox-gl";
import './map.css';
require("dotenv").config();

export default class Map extends React.Component {
  componentDidMount() {
    mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;
    this.map = new mapboxgl.Map({
      container: "map-container",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-122.4376, 37.7577],
      zoom: 11,
    });
  }

  render() {
    let that = this;
    let { doctors, currentUser } = this.props;
    if (!doctors) return null;

    Object.values(doctors).map((doctor) => {
      if (!doctor.insurances.includes(currentUser.insurance)) return null;
      let description = `
        <div class="popup-text">
          <div>${doctor.name}</div>
          <div>${doctor.specialty}</div>
          <div>${doctor.address}</div>
        </div>
      `;

      let popup = new mapboxgl.Popup().setHTML(description);
      new mapboxgl.Marker({ color: "red" })
        .setLngLat(doctor.location)
        .setPopup(popup)
        .addTo(that.map);
    });

    return (
      <div id="map-container"></div>
    )
  }
};