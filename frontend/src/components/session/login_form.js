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
    this.handleSubmitDemo = this.handleSubmitDemo.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser === true) {
      this.props.history.push("/home");
    }

    // Set or clear errors
    this.setState({ errors: nextProps.errors });
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
  handleSubmitDemo(e) {
    e.preventDefault();
    let user = {
      email: "demoUser@gmail.com",
      password: "password",
    };

    this.props.login(user);
  }

  renderErrors() {
    
    return (
      <ul className = 'errors'>
        {Object.keys(this.state.errors).map((error, i) => (
          <li key={`error-${i}`}>{this.state.errors[error]}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="session-form-container">
        <form onSubmit={this.handleSubmit} className= "form-session">
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
                Don't have an account yet? Sign up {` `} 
                <Link to={"/signup"}>here!</Link> 
              </h1>
              <div className="demo-user">
                <button className= "demo-button" onClick = {this.handleSubmitDemo}>
                        Log in as Demo User
                </button>
              </div>


              {this.renderErrors()}
              
            </div> 
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(LoginForm);
