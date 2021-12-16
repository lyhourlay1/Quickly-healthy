import React from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import './session.css'
import Footer from '../footer/footer'


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
      this.props.history.push("/login");
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

    this.props.signup(user);
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
      <div className="signup-form-container">
        <form onSubmit={this.handleSubmit} className="form-session">
          <div className="session-box">
            <div className="inputs">
              <h1>Welcome to Quickly Healthy!</h1>
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
                placeholder="Name"
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
              <div className="insurance-list" htmlFor="insurance-list">
                Who is your insurance provider?
              </div>
              <select onChange={this.update("insurance")}>
                <option selected disabled hidden>
                  choose one...
                </option>
                <option value="None">None</option>
                <option value="Aetna">Aetna</option>
                <option value="Blue Cross Blue Shield">
                  Blue Cross Blue Shield
                </option>
                <option value="Blue Shield of CA">Blue Shield of CA</option>
                <option value="Cigna">Cigna</option>
                <option value="UnitedHealthCare">UnitedHealthCare</option>
                <option value="Kaiser Permanente">Kaiser Permanente</option>
                <option value="Medicare">Medicare</option>
                <option value="Medi-Cal">Medi-Cal</option>
                <option value="Sutter Health">Sutter Health</option>
                <option value="Health Net">Health Net</option>
                <option value="Centene">Centene</option>
                <option value="CVS Health">CVS Health</option>
                <option value="Humana">Humana</option>
              </select>
              <br />
              <input type="submit" value="Submit" />
              <br />
              <h1 className="static-already">
                Already have an account? Log in {` `}
                <Link to={"/login"}>here!</Link>
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

export default withRouter(SignupForm);
