import React from "react";
import './doctors_index.css';
import DoctorIndexItem from "./doctors_index_item";

export default class DoctorIndex extends React.Component {
  render() {
    let { doctors, currentUser } = this.props;

    if (Object.values(doctors).legnth === 0) return null;

    return (
      <div className="doctors-index">
        <div className="doctors-index-header">
          {currentUser.insurance === "None" ? (
            <div>
              Doctors Near: San Francisco, CA that don't require insurance
            </div>
          ) : (
            <div>
              Doctors Near: San Francisco, CA that are in-network with
              {currentUser.insurance}
            </div>
          )}
        </div>

        <ul className="doctors-list">
          {Object.values(doctors).map((doctor) => {
            return doctor.insurances.includes(currentUser.insurance) ||
              doctor.insurances.includes("Insurance not required") ? (
              <DoctorIndexItem key={doctor._id} doctor={doctor} />
            ) : null;
          })}
        </ul>
      </div>
    );
  }
}