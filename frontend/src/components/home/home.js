import React from "react";
import Map from "./map/map";
import DoctorIndex from "./doctors/doctors_index";
import './home.css';
import Footer from '../footer/footer';

export default class Home extends React.Component {
  componentDidMount() {
    this.props.fetchUser(this.props.currentUserId);
    this.props.fetchDoctors();
  }

  render() {
    let { doctors, currentUser } = this.props;
    if (!currentUser) return null;
    if (Object.values(doctors).length === 0) {
        return(
          <div class="loader-wrapper2">
            <span class="loader2"><span class="loader-inner2"></span></span>
          <div class="loading2">Loading</div>
          </div> 
          
        )
    }

    return (
      <div className="home-container">
        <DoctorIndex doctors={this.props.doctors} currentUser={currentUser} />
        <Map doctors={this.props.doctors} currentUser={currentUser} />
      </div>
    );
  }
};