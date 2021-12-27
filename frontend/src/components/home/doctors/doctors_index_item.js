import React from 'react';
import { Link } from 'react-router-dom';
import { DEFAULT_PROFILE_PICTURE } from '../../../util/icons_and_images_util';
import './doctors_index.css';

const DoctorIndexItem = ({ doctor }) => {
  return (
    <Link to={`/doctors/${doctor._id}`}>
      <li className="doctors-index-item">
        <div className="item-header">
          <Link className="doctors-image" to={`/doctors/${doctor._id}`}>
            <div>
              <img
                src={doctor.image ? `data:${doctor.image.mimetype};base64,${doctor.image.data}` : DEFAULT_PROFILE_PICTURE}
                alt="picture"
              />
            </div>
          </Link>

          <div className="doctors-titles">
            <p className="doctors-titles-name">{doctor.name}</p>
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
    </Link>
  );
};

export default DoctorIndexItem;
