import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
  }

  // Selectively render links dependent on whether the user is logged in
  getLinks() {
    if (this.props.loggedIn) {
      return (
        <div className="navbar">
          <Link className="logo" to={"/home"}><img src="https://raw.githubusercontent.com/lyhourlay1/Quickly-healthy/home-css-emmett/assets/splash/qh-logo.png" className="navbar-logo" /></Link>
          <div className="right-buttons">
            <Link className="profile" to={"/profile"}>Profile</Link>
            <button onClick={this.logoutUser} >Logout</button>
          </div>
        </div>
      );
    } else {
      return (
        <div className="navbar">
          <Link className="logo" to={"/"}> <img src="https://raw.githubusercontent.com/lyhourlay1/Quickly-healthy/home-css-emmett/assets/splash/qh-logo.png" className="navbar-logo" /> </Link>
          <div className="right-buttons">
            <Link to={"/signup"} >Signup</Link> 
            <Link to={"/login"} >Login</Link>
          </div>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        {this.getLinks()}
      </div>
    );
  }
}

export default NavBar;
