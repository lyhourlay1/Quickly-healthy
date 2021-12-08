import React from "react"

const DoctorIndexItem = ({ doctor }) => {
  return (
    <li className="doctor-index-item">
      <div className="item-header">
        <Link to={`/doctors/${doctor._id}`} className="item-header-image">
          <img
            src={}
          />
        </Link>
      </div>
    </li>
  );
}