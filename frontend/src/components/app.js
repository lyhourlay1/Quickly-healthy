import React from "react";
import { Route } from "react-router";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Switch } from "react-router-dom";
import NavBarContainer from "./nav/navbar_container";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import ProfileContainer from "./user_profile/user_profile_container";
import Splash from "./splash/splash";
import HomeContainer from "./home/home_container";
import DoctorProfileContainer from "./doctor_profile/doctor_profile_container";
import EditAppointmentProfileContainer from "./doctor_profile/edit_appointment_profile_container";
import Modal from "./modals/modal";
import Footer from './footer/footer';
import './reset.css';


const App = () => (
  <div className="page-container">
    <Modal />
    <NavBarContainer />
    <Switch>
      <ProtectedRoute exact path="/doctors/:doctor_id/edit_appt/:appointment_id" component={EditAppointmentProfileContainer} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <ProtectedRoute path="/home" component={HomeContainer} />
      <ProtectedRoute path="/profile" component={ProfileContainer} />
      <ProtectedRoute path="/doctors/:id" component={DoctorProfileContainer} />
      <AuthRoute exact path="/" component={Splash} />
    </Switch>
    <Route path="/" component={Footer} />
  </div>
);

export default App;
