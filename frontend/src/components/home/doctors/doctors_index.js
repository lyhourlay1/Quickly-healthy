import React from "react";
import '../home.css';
import DoctorIndexItem from "./doctors_index_item";

export default class DoctorIndex extends React.Component {
  render() {
    let { doctors } = this.props;

    return (
      <div className="doctors-index">
        <div className="doctor-index-header">
          
        </div>

        <ul className="doctors-list">
          {Object.values(doctors).map((doctor) => (
            <DoctorIndexItem key={doctor._id} doctor={doctor} />
          ))}
          <li>hi</li>
          <li>hi</li>
          <li>hi</li>
          <li>hi</li>
          <li>hi</li>
          <li>hi</li>
          <li>hi</li>
          <li>hi</li>
          <li>hi</li>
          <li>hi</li>
          <li>hi</li>
        </ul>
      </div>
    );
  }
}