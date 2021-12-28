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
import './app.css'
import {connect} from "react-redux";
import {deleteAlert, createAlert} from "../actions/alert_actions";


const mSTP = (state, ownProps)=> ({
    alert: state.ui.alerts
})

const mDTP = dispatch => ({
    createAlert: (type, message) => dispatch(createAlert(type, message)),
    deleteAlert: () => dispatch(deleteAlert())
})

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    alertClose(){
        if (Object.keys(this.props.alert).length) {
            this.props.deleteAlert()
        }
    }

    alert() {
        return Object.keys(this.props.alert).length ? <div className={`alert alert-block alert-${this.props.alert.type} fade in`}>
            <button type="button" className="close" onLoad={setTimeout(this.alertClose.bind(this), 5000)}
                    onClick={this.alertClose.bind(this)}>×
            </button>
            {this.props.alert.message}
        </div> : null
    }

    render() {
        return <div className="page-container">
            {this.alert()}
            <Modal/>
            <NavBarContainer/>
            <Switch>
                <AuthRoute exact path="/" component={Splash}/>
                <ProtectedRoute exact path="/doctors/:doctor_id/edit_appt/:appointment_id"
                                component={EditAppointmentProfileContainer}/>
                <AuthRoute exact path="/login" component={LoginFormContainer}/>
                <AuthRoute exact path="/signup" component={SignupFormContainer}/>
                <ProtectedRoute path="/home" component={HomeContainer}/>
                <ProtectedRoute path="/profile" component={ProfileContainer}/>
                <ProtectedRoute path="/doctors/:id" component={DoctorProfileContainer}/>
            </Switch>
            <Route path="/" component={Footer}/>
        </div>
    }
}

export default connect(mSTP, mDTP)(App)
