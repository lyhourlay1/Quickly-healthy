import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Switch } from "react-router-dom";
import NavBarContainer from "./nav/navbar_container";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import ProfileContainer from "./profile/profile_container";
import AppointmentFormContainer from "./appointment/appointment_form_container"
import Splash from "./splash/splash";
import './reset.css';
import HomeContainer from "./home/home_container";



const App = () => (
  <div className="page-container">
    <NavBarContainer />
    <Switch>
      {/* <AuthRoute exact path="/" component={MainPage} /> */}
      <AuthRoute exact path="/" component={Splash} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />

      <ProtectedRoute exact path="/home" component={HomeContainer} />
      <ProtectedRoute exact path="/profile" component={ProfileContainer} />
      <ProtectedRoute exact path="/appointmentForm" component={AppointmentFormContainer} />
    </Switch>
  </div>
);

export default App;
