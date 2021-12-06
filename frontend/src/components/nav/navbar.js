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
          <Link className="logo" to={"/home"}>Quickly-healthy</Link>
          <div className="right-buttons">
            <Link className="profile" to={"/profile"}>Profile</Link>
            <button onClick={this.logoutUser}>Logout</button>
          </div>
        </div>
      );
    } else {
      return (
        <div className="navbar">
          <div className="logo">Quickly-healthy</div>
          <div className="right-buttons">
            <Link to={"/signup"}>Signup</Link> 
            <Link to={"/login"}>Login</Link>
          </div>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <h1>Chirper</h1>
        {this.getLinks()}
      </div>
    );
  }
}

export default NavBar;
