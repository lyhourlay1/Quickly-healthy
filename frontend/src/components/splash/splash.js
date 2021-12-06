import React from "react";
import "./splash.css";

const Splash = () => {
  return (
    <div className="splash-container">
      <div className="splash-component">
        <div className="splash-text">find doctors near you</div>
        <div className="splash-image-container">
          <img src="https://github.com/lyhourlay1/Quickly-healthy/blob/main/assets/splash/doctor.jpg?raw=true" />
        </div>
      </div>

      <div className="splash-component">
        <div className="splash-image-container">
          <img src="https://github.com/lyhourlay1/Quickly-healthy/blob/main/assets/splash/calendar.jpg?raw=true" />
        </div>
        <div className="splash-text">schedule appointments</div>
      </div>

      <div className="splash-component">
        <div className="splash-text">
          confirm your insurance
        </div>
        <div className="splash-image-container">
          <img src="https://github.com/lyhourlay1/Quickly-healthy/blob/main/assets/splash/health_insurance.jpg?raw=true" />
        </div>
      </div>

      <div className="splash-component">
        <div className="splash-image-container">
          <img src="https://github.com/lyhourlay1/Quickly-healthy/blob/main/assets/splash/upload.png?raw=true" />
        </div>
        <div className="splash-text">
          upload health records for easy provider access
        </div>
      </div>
    </div>
  );
};

export default Splash;
