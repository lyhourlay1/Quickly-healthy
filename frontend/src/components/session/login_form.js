import React from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import Footer from '../footer/footer'

import './session.css'

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errors: {},
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  handleSubmit(e) {
    e.preventDefault();

    let user = {
      email: this.state.email,
      password: this.state.password,
    };

    this.props.login(user);
  }

  renderErrors() {
    return (
      <ul>
        {Object.keys(this.state.errors).map((error, i) => (
          <li key={`error-${i}`}>{this.state.errors[error]}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className ='session-box'>
            <div className='inputs'>
              Welcome back! Please Sign In!
              <input
                  type="text"
                  value={this.state.email}
                  onChange={this.update("email")}
                  placeholder="Email"
                />
              <br />
                <input
                  type="password"
                  value={this.state.password}
                  onChange={this.update("password")}
                  placeholder="Password"
                />
                
              <br />
              <input type="submit" value="Submit" className="submit-button" />

              <br/>
              <h1 className="static-already">
                Don't Have an Account Yet? Sign up 
                <Link to={"/signup"}> Here!</Link> 
              </h1>

              {this.renderErrors()}
              
            </div> 
          </div>
        </form>

        <div className="foot">
          <Footer />
        </div>
      </div>
    );
  }
}

export default withRouter(LoginForm);
