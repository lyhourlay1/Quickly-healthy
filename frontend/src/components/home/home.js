import React from "react";
import Map from "./map/map";
import DoctorIndex from "./doctors/doctors_index";
import './home.css';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="home-container">
        <DoctorIndex />
        <Map />
      </div>
    )
  }
};