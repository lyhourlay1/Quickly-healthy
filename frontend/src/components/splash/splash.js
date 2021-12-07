import React from 'react';
import './splash.css';

const Splash = () => {
  return (
    <div className="splash-container">
      <div className="header-container">
        <h1 className="title">Making Health Care Easy</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
          in culpa qui officia deserunt mollit anim id est laborum
        </p>
      </div>
      <div className="splash-service-container">
        <img className="splash-service-bg" src="https://preview.colorlib.com/theme/medcare/img/banner/pattern_bg.jpg.webp" />
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
            <div className="splash-text">Upload health records for easy provider access</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Splash;
