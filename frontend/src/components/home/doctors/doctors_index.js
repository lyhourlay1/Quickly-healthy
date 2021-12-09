import React from "react";
import './doctors_index.css';
import DoctorIndexItem from "./doctors_index_item";

export default class DoctorIndex extends React.Component {
  render() {
    let { doctors, currentUser } = this.props;
    
    return (
      <div className="doctors-index">
        <div className="doctors-index-header">
          Doctors Near: San Francisco, CA that are in-network with {currentUser.insurance}
        </div>

        <ul className="doctors-list">
          {Object.values(doctors).map((doctor) => {
            return doctor.insurances.includes(currentUser.insurance)
              ? <DoctorIndexItem key={doctor._id} doctor={doctor} />
              : null
          })}
        </ul>
      </div>
    );
  }
}