import React from "react"
import { Link } from "react-router-dom";
import { DEFAULT_PROFILE_PICTURE } from "../../../util/icons_and_images_util";

const DoctorIndexItem = ({ doctor }) => {
  debugger
  return (
    <li className="doctor-index-item">
      <div className="item-header">
        <Link to={`/doctors/${doctor._id}`} className="doctor-image">
          <img src={DEFAULT_PROFILE_PICTURE} />
        </Link>

        <div className="doctor-titles">
          <Link to={`/doctors/${doctor._id}`}>{doctor.name}</Link>
          <div>{doctor.specialty}</div>
        </div>
      </div>

      <div className="doctor-insurances">
        <div>Accepted insuraces:</div>
        {doctor.insurances.map((insurance, idx) => (
          <div key={idx} id="insurance">{insurance}</div>
        ))}
      </div>
    </li>
  );
};

export default DoctorIndexItem;