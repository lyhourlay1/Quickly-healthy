import React from "react"
import { Link } from "react-router-dom";
import { DEFAULT_PROFILE_PICTURE } from "../../../util/icons_and_images_util";
import './doctors.css'

const DoctorIndexItem = ({ doctor }) => {
  return (
    <li className="doctors-index-item">
      <div className="item-header">
        <Link to={`/doctors/${doctor._id}`} className="doctors-image">
          <img src={DEFAULT_PROFILE_PICTURE} alt="" />
        </Link>

        <div className="doctors-titles">
          <Link to={`/doctors/${doctor._id}`}>{doctor.name}</Link>
          <div>{doctor.specialty}</div>
          <div>{doctor.address}</div>
        </div>
      </div>

      <div className="doctors-insurances">
        <div>Accepted insuraces:</div>
        {doctor.insurances.map((insurance, idx) => (
          <div key={idx} id="insurance">{insurance}</div>
        ))}
      </div>
    </li>
  );
};

export default DoctorIndexItem;