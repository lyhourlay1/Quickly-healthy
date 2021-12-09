import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Switch } from "react-router-dom";
import NavBarContainer from "./nav/navbar_container";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import ProfileContainer from "./user_profile/user_profile_container";
import AppointmentFormContainer from "./appointments/appointment_form_container"
import Splash from "./splash/splash";
import HomeContainer from "./home/home_container";
import DoctorProfileContainer from "./doctor_profile/doctor_profile_container";
import Modal from "./modals/modal";
import './reset.css';


const App = () => (
  <div className="page-container">
    <Modal />
    <NavBarContainer />
    <Switch>
      {/* <AuthRoute exact path="/" component={MainPage} /> */}
      <AuthRoute exact path="/" component={Splash} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />

      <ProtectedRoute exact path="/doctors/:id" component={DoctorProfileContainer} />
      <ProtectedRoute exact path="/home" component={HomeContainer} />
      <ProtectedRoute exact path="/profile" component={ProfileContainer} />
      <ProtectedRoute exact path="/appointmentForm" component={AppointmentFormContainer} />
    </Switch>
  </div>
);

export default App;
