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
      zoom: 12,
    });

    let marker = new mapboxgl.Marker({})
      .setLngLat([-122.4376, 37.7577])
      .addTo(this.map);
    
    // let that = this;
    // this.map.on("load", () => {
    //   debugger
    //   that.map.addSource("places", {
    //     type: "geojson",
    //     data: {
    //       type: "FeatureCollection",
    //       features: {
    //         type: "Feature",
    //         properties: {
    //           description: "<p>Hello Im working</p>",
    //           icon: "theatre-15",
    //         },
    //         geometry: {
    //           type: "Point",
    //           coordinates: [-122.4376, 37.7577],
    //         },
    //       },
    //     },
    //   });
    //   that.map.addLayer({
    //     "id": "places",
    //     "type": "symbol",
    //     "source": "places",
    //     "layout": {
    //       "icon-image": "circle-11",
    //       "icon-allow-overlap": true
    //     }
    //   });
    //   that.map.on("click", "places", (event) => {
    //     debugger
        // const coordinates = event.features[0].geometry.coordinates.slice();
        // const description = event.features[0].properties.description;

        // while (Math.abs(event.lngLat.lng - coordinates[0]) > 180) {
        //   coordinates[0] += event.lngLat.lng > coordinates[0] ? 360 : -360;
        // }

        // new mapboxgl.Popup()
        //   .setLngLat(coordinates)
        //   .setHTML(description)
        //   .addTo(that.map);
    //   });
    //   that.map.on("mouseenter", "places", () => {
    //     that.map.getCanvas().style.cursor = "pointer";
    //   });
    // });
  }

  render() {
    let that = this;
    Object.values(this.props.doctors).map((doctor) => {
      new mapboxgl.Marker({ color: "red" })
        .setLngLat(doctor.location)
        .addTo(that.map);

      that.map.on("click", (event) => {
        debugger
        const coordinates = [event.lngLat.lng, event.lngLat.lat];
        const description = doctor.name;

        while (Math.abs(event.lngLat.lng - coordinates[0]) > 180) {
          coordinates[0] += event.lngLat.lng > coordinates[0] ? 360 : -360;
        }

        new mapboxgl.Popup()
          .setLngLat(coordinates)
          .setHTML(description)
          .addTo(that.map);
      })
    });

    return (
      <div id="map-container"></div>
    )
  }
};