import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import './footer.css';

class Footer extends React.Component {
  render() {
    return this.props.url === '/signup' || this.props.url === '/login' || this.props.url === '/home' ? null : this.displayFooter();
  }

  displayFooter() {
    return (
      <div className="footer-container">
        <div className="footer-links-container">
          <div className="footer-info">
            <div className="footer-tech info">
              <h2>Technologies</h2>
              <a target="blank" href="https://www.mongodb.com/">
                MongoDB
              </a>
              <a target="blank" href="https://expressjs.com/">
                Express
              </a>
              <a target="blank" href="https://reactjs.org/">
                React
              </a>
              <a target="blank" href="https://nodejs.org/en/">
                Node
              </a>
            </div>

            <div className="footer-support info">
              <h2>Support</h2>
              <p>support@Quicklyhealthy.com</p>
            </div>

            {/* <div className="footer-help info">
              <h2>About</h2>
              <p>How it works</p>
              <p>Privacy settings</p>
              <p>Terms of Service</p>
            </div> */}

            <div className="footer-about info">
              <h2>Meet the Team</h2>

              <a target="_blank" href="https://github.com/emmetthe">
                Emmett
              </a>

              <a target="_blank" href="https://github.com/grayson-poon">
                Grayson
              </a>

              <a target="_blank" href="https://github.com/lyhourlay1">
                Lee
              </a>
         
              <a target="_blank" href="https://github.com/mjlomeli">
                Mauricio
              </a>

   
              
            </div>
          </div>
        </div>

        <div className="footer-bottom-container">
          <div className="terms-policies">
          <a className="github-link" href="https://github.com/lyhourlay1/Quickly-healthy" target="_blank">
                <img
                  src="https://raw.githubusercontent.com/lyhourlay1/Quickly-healthy/home-css-emmett/assets/splash/github.png"
                  className="github-icon"
                />
              </a>
            <p>2021 Quickly Healthy, Inc.</p>
          </div>
        </div>
      </div>
    );
  }
}

const mSTP = (state, ownProps) => {
  return {
    url: ownProps.location.pathname
  };
};

export default withRouter(connect(mSTP)(Footer));
