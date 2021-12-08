import React from "react";
import mapboxgl from "mapbox-gl";
import '../home.css'
require("dotenv").config();

export default class Map extends React.Component {
  componentDidMount() {
    mapboxgl.accessToken =  process.env.REACT_APP_MAPBOX_TOKEN;
    this.map = new mapboxgl.Map({
      container: "map-container",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-122.4376, 37.7577],
      zoom: 12,
    });
  }

  render() {
    let that = this;
    Object.values(this.props.doctors).map((doctor) => {
      return new mapboxgl.Marker({ color: "red" })
        .setLngLat(doctor.location)
        .addTo(that.map);
    });

    return (
      <div id="map-container"></div>
    )
  }
};