import React from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import './session.css'


class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      handle: "",
      password: "",
      password2: "",
      insurance: "",
      errors: {},
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearedErrors = false;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.signedIn === true) {
      this.props.history.push("/home");
    }

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
      handle: this.state.handle,
      password: this.state.password,
      password2: this.state.password2,
      insurance: this.state.insurance
    };

    this.props.signup(user, this.props.history);
    // debugger
    // this.props.signup(user, ()=>{this.props.login({email: this.state.handle, password: this.state.password})
    //   .then(() => this.props.history.push('/home'));
    // })
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
      <div className="signup-form-container">
        <form onSubmit={this.handleSubmit}>
          <div className="session-box">     
            <div className="inputs">
              <h1>
                Welcome to Quickly Healthy!
              </h1>
              <br />
              <input
                type="text"
                value={this.state.email}
                onChange={this.update("email")}
                placeholder="Email"
              />
              <br />
              <input
                type="text"
                value={this.state.handle}
                onChange={this.update("handle")}
                placeholder="Handle"
              />
              <br />
              <input
                type="password"
                value={this.state.password}
                onChange={this.update("password")}
                placeholder="Password"
              />
              <br />
              <input
                type="password"
                value={this.state.password2}
                onChange={this.update("password2")}
                placeholder="Confirm Password"
              />
              <br />
              <input
                type="text"
                value={this.state.insurance}
                onChange={this.update("insurance")}
                placeholder="Insurance"
              />
              <br />
              <input type="submit" value="Submit" />
              <br/> 
              <h1 className="static-already">
                Already have an account! Log in 
                <Link to={"/login"}> Here!</Link> 
              </h1>
            
              {this.renderErrors()}
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SignupForm);
