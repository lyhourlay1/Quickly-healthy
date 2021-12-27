import React from "react";
import mapboxgl from "mapbox-gl";
import './map.css';
import { withRouter } from "react-router-dom";
require("dotenv").config();

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      map: null
    }
  }

  componentDidMount() {
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
    let { doctors, currentUser, history } = this.props;
    if (Object.values(doctors).length === 0) return null;

    if (this.state.map) {
      Object.values(doctors).map((doctor) => {
        if (
          doctor.insurances.includes(currentUser.insurance) ||
          doctor.insurances.includes("Insurance not required")
        ) {
          let description = `
              <div class="popup-text" id="doctor-${doctor._id}">
                <div>${doctor.name}</div>
                <div>${doctor.specialty}</div>
                <div>${doctor.address}</div>
              </div>
            `;

          let popup = new mapboxgl.Popup().setHTML(description);
          let marker = new mapboxgl.Marker({ color: "red" })
            .setLngLat(doctor.location)
            .setPopup(popup)
            .addTo(this.state.map);

          marker._element.id = `marker-${doctor._id}`;
          let handleClick = (marker) => {
            marker.togglePopup();
            if (
              document.getElementById(`doctor-${marker._element.id.slice(7)}`)
            ) {
              document
                .getElementById(`doctor-${marker._element.id.slice(7)}`)
                .addEventListener("click", () => {
                  history.push(`/doctors/${marker._element.id.slice(7)}`);
                });
            }
            marker.togglePopup();
          };

          marker.getElement().addEventListener("click", () => {
            handleClick(marker);
          });
        }
      });
    };

    return (
      <div id="map-container"></div>
    )
  }
};


export default withRouter(Map);