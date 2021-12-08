import React from "react"
import { Link } from "react-router-dom";
import { DEFAULT_PROFILE_PICTURE } from "../../../util/icons_and_images_util";
import './doctors.css'

const handleClick = (doctor) => {
  // redirect to doctor show page
  console.log('hello');
};

const DoctorIndexItem = ({ doctor }) => {
  return (
    <li className="doctors-index-item" onClick={() => handleClick(doctor)}>
      <div className="item-header">
        <Link className="doctors-image" to={`/doctors/${doctor._id}`}>
          <img src={DEFAULT_PROFILE_PICTURE} alt="" />
        </Link>

        <div className="doctors-titles">
          <Link to={`/doctors/${doctor._id}`}>{doctor.name}</Link>
          <div>{doctor.specialty}</div>
          <div id="address">{doctor.address}</div>
        </div>
      </div>

      <div className="doctors-insurances">
        <div>In-network Insurance Providers:</div>
        {doctor.insurances.map((insurance, idx) => (
          <div key={idx} id="insurance">
            {insurance}
          </div>
        ))}
      </div>
    </li>
  );
};

export default DoctorIndexItem;