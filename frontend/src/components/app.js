import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Switch } from "react-router-dom";
import NavBarContainer from "./nav/navbar_container";
import TweetsContainer from "./tweets/tweets_container";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import ProfileContainer from "./profile/profile_container";
// import TweetsComposeContainer from "./tweets/tweets_compose_container";
import Splash from "./splash/splash";
import './reset.css';
import Map from "./map/map";





const App = () => (
  <div className="page-container">
    <NavBarContainer />
    <Switch>
      {/* <AuthRoute exact path="/" component={MainPage} /> */}
      <AuthRoute exact path="/" component={Splash} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />

      <ProtectedRoute exact path="/home" component={TweetsContainer} />
      <ProtectedRoute exact path="/profile" component={ProfileContainer} />
      {/* <ProtectedRoute exact path="/new_tweet" component={TweetsComposeContainer} /> */}
    </Switch>
    <Map />
  </div>
);

export default App;
