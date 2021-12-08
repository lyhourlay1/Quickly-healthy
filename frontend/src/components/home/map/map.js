import React from "react";
import mapboxgl from "mapbox-gl";
import './map.css';
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

    this.map.on("load", () => {
      this.map.addSource("places", {
        type: "geojson",
        data: {
          type: "FeatureCollection",
          features: {
            type: "Feature",
            properties: {
              description:
                '<p>Hello Im working</p>',
              icon: "circle-11",
            },
            geometry: {
              type: "Point",
              coordinates: [-77.038659, 38.931567],
            },
          },
        },
      });
      this.map.addLayer({
        "id": "places",
        "type": "symbol",
        "source": "places",
        "layout": {
          "icon-image": "{marker-symbol}-15",
          "icon-allow-overlap": true
        }
      });
      this.map.on("click", "places", (event) => {
        const coordinates = event.features[0].geometry.coordinates.slice();
        const description = event.features[0].properties.description;

        while (Math.abs(event.lngLat.lng - coordinates[0]) > 180) {
          coordinates[0] += event.lngLat.lng > coordinates[0] ? 360 : -360;
        }

        new mapboxgl.Popup()
          .setLngLat(coordinates)
          .setHTML(description)
          .addTo(this.map);
      });
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