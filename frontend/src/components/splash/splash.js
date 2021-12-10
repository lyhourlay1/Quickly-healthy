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
          src="https://gyazo.com/e0119e94debf3cbc93f9e87d9084a7a8"
          className="header-bg"
        />
      </div>

      <div className="splash-service-container">
        {/* <img className="splash-service-bg" src="https://preview.colorlib.com/theme/medcare/img/banner/pattern_bg.jpg.webp" /> */}
        <div className="splash-service">
          <div className="splash-component">
            <div className="splash-image-container-doctor splash-image-container">
              <img src="https://raw.githubusercontent.com/lyhourlay1/Quickly-healthy/home-css-emmett/assets/splash/find_doc.png" />
            </div>
            <div className="splash-text">Find doctors near you</div>
          </div>

          <div className="splash-component">
            <div className="splash-image-container-appt splash-image-container">
              <img src="https://raw.githubusercontent.com/lyhourlay1/Quickly-healthy/home-css-emmett/assets/splash/appt.png" />
            </div>
            <div className="splash-text">Schedule appointments</div>
          </div>

          <div className="splash-component">
            <div className="splash-image-container-insurance splash-image-container">
              <img src="https://raw.githubusercontent.com/lyhourlay1/Quickly-healthy/home-css-emmett/assets/splash/insurance.png" />
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
