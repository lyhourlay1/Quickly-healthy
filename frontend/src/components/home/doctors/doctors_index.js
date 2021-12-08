import React from "react";
import '../home.css';
import DoctorIndexItem from "./doctors_index_item";

export default class DoctorIndex extends React.Component {
  render() {
    let { doctors } = this.props;

    return (
      <div className="doctors-index">
        <div className="doctors-index-header">
          Doctors Near: San Francisco, CA
        </div>

        <ul className="doctors-list">
          {Object.values(doctors).map((doctor) => (
            <DoctorIndexItem key={doctor._id} doctor={doctor} />
          ))}
        </ul>
      </div>
    );
  }
}