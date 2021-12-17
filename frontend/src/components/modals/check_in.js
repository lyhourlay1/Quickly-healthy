import React from "react"
import './check_in.css'


class CheckIn extends React.Component{
    constructor(props){
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    componentDidMount(){
        this.props.fetchUserAppointments(this.props.appointment.user_id)
    }

    handleSubmit(e){
        e.preventDefault()
        this.props.checkInAppointment(this.props.appointment._id).then(
            ()=> {
                this.props.fetchUserAppointments(this.props.appointment.user_id).then(
                    ()=>this.props.closeModal()
                )
            })       
    }

    render(){
        let { closeModal} = this.props;
        let ifYes = <div id="if-yes">
           <label className= "label-if-yes">if yes, please specify 
                <input type="text" className= "input-if-yes"/>             
            </label>
        </div>
        return (
            <form onSubmit= {this.handleSubmit}>

                <div className="appointment-details-modal-background">
                    <div className="appointment-details" id= "check-in-details">
                        <div><button onClick={closeModal}>close</button></div>
                        <div className ="form-divider-container">
                            <div className= "question"><p>Are you feeling sick today?</p></div>
                            <div className="yes-no">
                                <label>
                                    <input type="radio" name="choice-sick" required/>Yes
                                </label>
                                <label>
                                    <input type="radio" name="choice-sick"/>No
                                </label>
                            </div>  
                        </div>                    
                        <div className ="form-divider-container">
                            <div className= "question"><p>Have you been in contact with anyone who was diagnosed with Covid-19?</p></div>
                            <div className="yes-no">
                                <label>
                                    <input type="radio" name="choice-contact" required/>Yes
                                </label>
                                <label>
                                    <input type="radio" name="choice-contact"/>No
                                </label>
                            </div>   
                        </div>                             
                        <div className ="form-divider-container">
                            <div className= "question"><p>Have you traveled outside of the U.S for the past 6 months?</p></div>
                            <div className="yes-no">
                                <label>
                                    <input type="radio" name="choice-travel" required/>Yes
                                </label>
                                <label>
                                    <input type="radio" name="choice-travel"/>No
                                </label>
                            </div>  
                        </div>                             
                        <div className ="form-divider-container">
                            <div className= "question"><p>Are you currently pregnant?</p></div>
                            <div className="yes-no">
                                <label>
                                    <input type="radio" name="choice-pregnant" required/>Yes
                                </label>
                                <label>
                                    <input type="radio" name="choice-pregnant"/>No
                                </label>
                            </div>   
                        </div>                    
                        <div>
                            <div className ="form-divider-container">
                                <div className= "question"><p>Do you have any known allergies?</p></div>
                                <div className="yes-no">
                                    <label>
                                        <input type="radio" name="choice-allergy" required/>Yes
                                    </label>
                                    <label>
                                        <input type="radio" name="choice-allergy"/>No
                                    </label>
                                </div>   
                            </div>                
                            {ifYes}    
                        </div>                    
                                        
                        <div>
                            <div className ="form-divider-container">
                                <div className= "question"><p>Do you have any genetic diseases?</p></div>
                                <div className="yes-no">
                                    <label>
                                        <input type="radio" name="choice-genetic" required/>Yes
                                    </label>
                                    <label>
                                        <input type="radio" name="choice-genetic"/>No
                                    </label>
                                </div>
                            </div>                
                            {ifYes}    
                        </div>                    
                        <div>
                            <div className ="form-divider-container">
                                <div className= "question"><p>Are you taking any medications?</p></div>
                                <div className="yes-no">
                                    <label>
                                        <input type="radio" name="choice-med" required/>Yes
                                    </label>
                                    <label>
                                        <input type="radio" name="choice-med"/>No
                                    </label>
                                </div> 
                            </div>                
                            {ifYes}    
                        </div>
                        <input type="submit" value="Submit" />
                        {/* <button onClick= {this.handleSubmit}> Submit </button> */}
                    </div>
                </div>
            </form>
        )
    }
}

export default CheckIn