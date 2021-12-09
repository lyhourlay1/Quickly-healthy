import React from "react";
import mapboxgl from "mapbox-gl";
import './map.css';
require("dotenv").config();

export default class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        map: null
    }
  }

  componentDidMount() {
    // if (process.env.NODE_ENV === "production") {
    // 
    // } else {
    //   // mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;
    // }
    // new mapboxgl.accessToken({
    //   REACT_APP_MAPBOX_TOKEN: process.env.REACT_APP_MAPBOX_TOKEN
    // })

    mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;
    let map = new mapboxgl.Map({
      container: "map-container",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-122.4376, 37.7577],
      zoom: 12,
    });

    this.setState({ map });
  }

  render() {
    let { doctors, currentUser } = this.props;
    if (Object.values(doctors).length === 0) return null;

    if (this.state.map) {
      Object.values(doctors).map((doctor) => {
        debugger;
        if (
          doctor.insurances.includes(currentUser.insurance) ||
          doctor.insurances.includes("Insurance not required")
        ) {
          let description = `
          <div class="popup-text">
            <div>${doctor.name}</div>
            <div>${doctor.specialty}</div>
            <div>${doctor.address}</div>
          </div>
        `;

          let popup = new mapboxgl.Popup().setHTML(description);
          return new mapboxgl.Marker({ color: "red" })
            .setLngLat(doctor.location)
            .setPopup(popup)
            .addTo(this.state.map);
        }
      });
    };

    return (
      <div id="map-container"></div>
    )
  }
};