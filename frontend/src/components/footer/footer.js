import React from 'react';
import './footer.css';

class Footer extends React.Component {
  render() {
    return (
      <div className="footer-container">

        <div className="footer-links-container">
          <div className="footer-info">
            <div className="footer-tech info">
              <h2>Technologies</h2>
              <p>MongoDB</p>
              <p>Express</p>
              <p>React</p>
              <p>Node</p>
            </div>

            <div className="footer-support info">
              <h2>Support</h2>
              <p>Help Center</p>
              <p>support@Quicklyhealthy.com</p>
            </div>

            <div className="footer-help info">
              <h2>About</h2>
              <p>How it works</p>
              <p>Privacy settings</p>
              <p>Terms of Service</p>
            </div>

            <div className="footer-about info">
              <h2>Meet the Team</h2>

              <a target="_blank" href="https://github.com/lyhourlay1">
                Lee
              </a>
              <br />
              <a target="_blank" href="https://github.com/emmetthe">
                Emmett
                </a>
              <br />
              <a target="_blank" href="https://github.com/grayson-poon">
                Grayson
              </a>
              <br />
              <a target="_blank" href="https://github.com/mjlomeli">
                Mauricio
              </a>

              <br />
              <a href="https://github.com/lyhourlay1/Quickly-healthy" target="_blank">
                <img src="https://raw.githubusercontent.com/lyhourlay1/Quickly-healthy/home-css-emmett/assets/splash/github.png" className="github-icon"/>
              </a>
            </div>

          </div>
        </div>

        <div className="footer-bottom-container">
          <div className="footer-logo"><img src="https://raw.githubusercontent.com/lyhourlay1/Quickly-healthy/home-css-emmett/assets/splash/logo.png"/></div>
          <div className="terms-policies">
            <p>2021 Quickly Healthy, Inc.</p>
            <p>
              <u>Terms of Use</u>
            </p>
            <p>
              <u>Privacy</u>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
