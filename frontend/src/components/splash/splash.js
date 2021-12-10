import React from 'react';
import './splash.css';

const Splash = () => {
  return (
    <div className="splash-container">
      <div className="header-container">
        <div className="header-text">
          <h1 className="header-title">Making Health Care Easy</h1>
          <p className="header-description">
            Quickly Healthy makes it simple to find a doctor that fits your needs. Easily upload health records and check your appointments.
          </p>
        </div>
        <img
          src="https://p.kindpng.com/picc/s/193-1938072_connecting-patients-to-doctors-hd-png-download.png"
          className="header-bg"
        />
      </div>

      <div className="splash-service-container">
        {/* <img className="splash-service-bg" src="https://preview.colorlib.com/theme/medcare/img/banner/pattern_bg.jpg.webp" /> */}
        <div className="splash-service">
          <div className="splash-component">
            <div className="splash-image-container-doctor splash-image-container">
              <img src="https://github.com/lyhourlay1/Quickly-healthy/blob/main/assets/splash/doctor.jpg?raw=true" />
            </div>
            <div className="splash-text">Find doctors near you</div>
          </div>

          <div className="splash-component">
            <div className="splash-image-container-appt splash-image-container">
              <img src="https://github.com/lyhourlay1/Quickly-healthy/blob/main/assets/splash/calendar.jpg?raw=true" />
            </div>
            <div className="splash-text">Schedule appointments</div>
          </div>

          <div className="splash-component">
            <div className="splash-image-container-insurance splash-image-container">
              <img src="https://github.com/lyhourlay1/Quickly-healthy/blob/main/assets/splash/health_insurance.jpg?raw=true" />
            </div>
            <div className="splash-text">Confirm your insurance</div>
          </div>

          <div className="splash-component">
            <div className="splash-image-container-record splash-image-container">
              <img src="https://github.com/lyhourlay1/Quickly-healthy/blob/main/assets/splash/upload.png?raw=true" />
            </div>
            <div className="splash-text">Upload health records</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Splash;
