import React from "react";
// import { mapboxToken } from "../../../util/api_keys";
// import { useState } from "react";
import ReactMapGL from "react-map-gl";
import mapboxgl from "mapbox-gl";
require("dotenv").config();

const dotenv = require('dotenv');
// dotenv.config();
// let mapboxToken = require("../../../../../config/keys").mapBoxToken;

// if (process.env.NODE_ENV === "production") {
//   let mapboxToken = require("config/keys").mapBoxToken;
// }
// else{
//   import { mapboxToken } from "../../../util/api_keys"; 
// }


export default class Map extends React.Component {
  componentDidMount() {
    mapboxgl.accessToken =  process.env.REACT_APP_MAPBOX_TOKEN;
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
