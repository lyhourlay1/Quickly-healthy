import React from "react"
import { Link } from "react-router-dom";
import { DEFAULT_PROFILE_PICTURE } from "../../../util/icons_and_images_util";
import './doctors.css'

const showPopup = (doctor) => {
  return (event) => {
    event.preventDefault();
    getPopupInfo(doctor);
  }
};

const getPopupInfo = (doctor) => {
  
}

const DoctorIndexItem = ({ doctor }) => {
  return (
    <Link to={`/doctors/${doctor._id}`} className="doctors-index-item">
      <div className="item-header">
        <Link className="doctors-image" to={`/doctors/${doctor._id}`}>
          <img src={DEFAULT_PROFILE_PICTURE} alt="" />
        </Link>

        <div className="doctors-titles">
          <Link to={`/doctors/${doctor._id}`}>{doctor.name}</Link>
          <div>{doctor.specialty}</div>
          <div id="address" onClick={() => showPopup(doctor)}>{doctor.address}</div>
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
    </Link>
  );
};

export default DoctorIndexItem;