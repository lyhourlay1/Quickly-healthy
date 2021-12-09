import React from "react";
import {AuthRoute, ProtectedRoute} from "../util/route_util";
import {Switch} from "react-router-dom";
import NavBarContainer from "./nav/navbar_container";

import TweetsContainer from "./tweets/tweets_container";
import MainPage from "./main/main_page";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import Profile from './profile/profile'
import TweetsComposeContainer from "./tweets/tweets_compose_container";


const App = () => (
    <div>
        <NavBarContainer/>
        <Switch>
            <AuthRoute exact path="/" component={MainPage}/>
            <AuthRoute exact path="/login" component={LoginFormContainer}/>
            <AuthRoute exact path="/signup" component={SignupFormContainer}/>

            <ProtectedRoute exact path="/tweets" component={TweetsContainer}/>
            <ProtectedRoute exact path="/profile" component={Profile}/>
            <ProtectedRoute exact path="/new_tweet" component={TweetsComposeContainer}/>
        </Switch>
    </div>
);

export default App;
