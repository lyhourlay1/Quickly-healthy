import React from "react";
import Map from "./map/map";
import DoctorIndex from "./doctors/doctors_index";
import './home.css';
import Footer from '../footer/footer';

export default class Home extends React.Component {
  componentDidMount() {
    this.props.fetchDoctors();
  }

  render() {
    let { doctors, currentUser } = this.props;
    if (Object.values(doctors).length === 0) return null;

    return (
      <div className="home-container">
        <DoctorIndex doctors={this.props.doctors} currentUser={currentUser} />
        <Map doctors={this.props.doctors} currentUser={currentUser} />
      </div>
    );
  }
};