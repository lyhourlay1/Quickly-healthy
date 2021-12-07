import React from "react";
import { mapboxToken } from "../../../util/api_keys";
// import { useState } from "react";
// import ReactMapGL from "react-map-gl";
import mapboxgl from "mapbox-gl";

// const dotenv = require('dotenv');
// dotenv.config();

export default class Map extends React.Component {
  componentDidMount() {
    mapboxgl.accessToken = mapboxToken;
    this.map = new mapboxgl.Map({
      container: "map-container",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-122.4376, 37.7577],
      zoom: 12,
    });

    this.map.on("idle", () => {
      this.map.resize();
    })

    const marker = new mapboxgl.Marker()
      .setLngLat([-122.4376, 37.7577])
      .addTo(this.map);

    const marker2 = new mapboxgl.Marker({ color: "black", rotation: 45 })
      .setLngLat([-122.4376, 37.7577])
      .addTo(this.map);
  }


  render() {
    return (
      <div id="map-container"></div>
    )
  }
}

// export default Map;
