import React from "react";
import mapboxgl from "mapbox-gl";
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

    this.map.on("idle", () => {
      this.map.resize();
    })

    const marker = new mapboxgl.Marker()
      .setLngLat([-122.4376, 37.7577])
      .addTo(this.map);

    const marker2 = new mapboxgl.Marker({ color: "black", rotation: 45 })
      .setLngLat([-122.4376, 37.7577])
      .addTo(this.map);

    const marker3 = new mapboxgl.Marker({ color: "red"})
      .setLngLat([-117.178950, 32.905810])
      .addTo(this.map);
  }

  render() {
    return (
      <div id="map-container"></div>
    )
  }
};