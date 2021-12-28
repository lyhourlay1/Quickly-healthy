import React from 'react'
import {Link} from 'react-router-dom'
import "../doctor_profile/doctor_profile.css";
import "../app.css"

class AppointmentForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            availabilites: "",
            name: props.currentUser.handle,
            reason: "",
            date: "",
            selectedSlot: "",
            doctor: this.props.doctor,
            grid: this.generateCalenderList(0)
        }

        this.month = "";
        this.handleClickCreateAppointment = this.handleClickCreateAppointment.bind(this)
        this.generateCalenderList = this.generateCalenderList.bind(this)

        this.chosenButton = null;
        this.onmouseenterbutton = this.onMouseEnterButton.bind(this);
        this.onmouseleavebutton = this.onMouseLeaveButton.bind(this);
        this.onclickbutton = this.onClickButton.bind(this);
    }

    componentDidMount() {
        this.props.fetchDoctor(this.props.doctorId);
    }

    onMouseEnterButton(e) {
        if (e.currentTarget !== this.chosenButton)
            e.currentTarget.classList.toggle("hover-effect")
    }

    onMouseLeaveButton(e) {
        if (e.currentTarget !== this.chosenButton)
            e.currentTarget.classList.toggle("hover-effect")
    }

    onClickButton(e) {
        if (this.chosenButton && this.chosenButton !== e.currentTarget)
            this.chosenButton.classList.toggle("hover-effect")
        this.chosenButton = this.chosenButton === e.currentTarget ? null : e.currentTarget;
    }

    componentDidUpdate(prevProps) {
        if (prevProps.doctor.availabilityString !== this.props.doctor.availabilityString) {
            this.setState({'grid': this.generateCalenderList(0)})
        }
    }

    update(field) {
        return (e) => {
            e.preventDefault();
            this.setState({[field]: e.target.value})
        }
    }

    handleClickUpdate(field, date) {
        return (e) => {
            e.preventDefault();
            this.setState({[field]: e.currentTarget.value, ['date']: date})
        }

    }

    handleClickNext(field) {
        this.month = this.month + 1;
        let newGrid = this.generateCalenderList(+1);
        this.setState({[field]: newGrid});

    }

    handleClickBack(field) {
        this.month = this.month - 1;
        let newGrid = this.generateCalenderList(-1);
        this.setState({[field]: newGrid});
    }

    handleClickCreateAppointment(e) {
        e.preventDefault()
        if (this.chosenButton){
            this.chosenButton.classList.toggle("hover-effect")
            this.chosenButton = null;
        }
        this.props.createAppointment({
            user_id: this.props.currentUser.id,
            name: this.state.name,
            reason: this.state.reason,
            selectedSlot: this.state.selectedSlot,
            date: this.state.date,
            doctor_id: this.props.doctor._id
        })
            .then(() => {
                this.props.fetchDoctor(this.props.doctorId);
            });

        this.setState({["selectedSlot"]: "", ['reason']: ''});

        this.props.createAlert("success", "You have created an appointment");
    }

    generateCalenderList(num) {
        let availabilites = this.props.doctor.availabilityString

        let days = {"Mon": [], "Tue": [], "Wed": [], "Thu": [], "Fri": [], "Sat": [], "Sun": []}
        let today = new Date(Date.now());
        let thisMonth = today.getMonth();

        if (!this.month) {
            this.month = thisMonth
        }
        let thisYear = today.getFullYear();

        let firstDayOfMonth = new Date(thisYear, this.month, 1)
        let firstDayStr = firstDayOfMonth.toDateString().split(" ")
        days[firstDayStr[0]].push(firstDayOfMonth.toDateString())
        let firstDay = new Date(thisYear, this.month, 1)

        while (firstDay.toDateString().split(" ")[0] !== "Mon") {
            let firstDate = new Date(firstDay.setDate(firstDay.getDate() - 1)).toDateString()
            let firstDateArr = firstDate.split(" ")
            days[firstDateArr[0]].push(firstDate)
        }
        let i = 0;
        while (firstDayOfMonth.toDateString().split(" ")[0] !== "Sun" || i < 30) {
            let date = new Date(firstDayOfMonth.setDate(firstDayOfMonth.getDate() + 1)).toDateString()
            let dateArr = date.split(" ")
            days[dateArr[0]].push(date)
            i++
        }
        let arrayOfDays = []
        for (let [key, value] of Object.entries(days)) {
            arrayOfDays.push(value)
        }
        let transposeArr = []
        for (let i = 0; i < arrayOfDays[0].length; i++) {
            for (let j = 0; j < arrayOfDays.length; j++) {
                transposeArr.push(arrayOfDays[j][i])
            }
        }

        let schedules = []
        for (let i = 0; i < transposeArr.length; i++) {
            let obj;
            if (availabilites[transposeArr[i]]) {
                obj = {day: `${transposeArr[i]}`, slots: availabilites[transposeArr[i]]}
            } else {
                obj = {day: `${transposeArr[i]}`, slots: []}
            }
            schedules.push(obj)
        }
        return schedules
    }

    render() {
        if (!this.props.doctor) {
            return null;
        }
        let submissionForm = <div></div>
        if (this.state.selectedSlot) {
            submissionForm = (
                <div className="submission-form">
                    <div>
                        Appointment on {this.state.date} at{" "}
                        {this.state.selectedSlot >= 12
                            ? this.state.selectedSlot > 12
                                ? (this.state.selectedSlot % 12) + " PM"
                                : this.state.selectedSlot + " PM"
                            : this.state.selectedSlot + " AM"}{" "}
                        with Dr. {this.props.doctor.name}
                    </div>
                    <div>
                        <label>Reason:</label>
                        <textarea
                            type="text"
                            value={this.state.reason}
                            onChange={this.update("reason")}
                            rows="5"
                            placeholder="reason..."
                        />
                    </div>
                    <Link to={`/home`}>Cancel</Link>
                    {this.state.reason.length >0 ? (
                        <button onClick={this.handleClickCreateAppointment}>
                            Submit
                        </button>
                    ) : null}
                </div>
            );
        }
        return (
            <div className="form-container">
                <div
                    className="month-year">{this.state.grid[15].day.split(" ")[1]} {this.state.grid[15].day.split(" ")[3]}</div>
                <div className="grid-flex">
                    <div className="grid">Monday</div>
                    <div className="grid">Tuesday</div>
                    <div className="grid">Wednesday</div>
                    <div className="grid">Thursday</div>
                    <div className="grid">Friday</div>
                    <div className="grid">Saturday</div>
                    <div className="grid">Sunday</div>
                    {this.state.grid.map((date, idx) =>
                        <div key={idx} className="grid">
                            {date.day.split(" ")[2]}
                            <div className="timeslots-container">
                                {date.slots.map((slot, idx) => {
                                    let ending = slot >= 12 ? "PM" : "AM";
                                    return slot <= 12
                                        ? <div className="button-container"
                                               onMouseEnter={this.onmouseenterbutton}
                                               onMouseLeave={this.onmouseleavebutton}
                                               onClick={this.onclickbutton}
                                               key={idx}>
                                            <button className="button-appt" onClick={this.handleClickUpdate('selectedSlot', date.day)}
                                                    value={slot}>{`${slot} ${ending}`}</button>
                                        </div>
                                        : <div className="button-container"
                                               onMouseEnter={this.onmouseenterbutton}
                                               onMouseLeave={this.onmouseleavebutton}
                                               onClick={this.onclickbutton}
                                               key={idx}>
                                            <button className="button-appt" onClick={this.handleClickUpdate('selectedSlot', date.day)}
                                                    value={slot}>{`${slot % 12} ${ending}`}</button>
                                        </div>

                                })}
                            </div>
                        </div>)}
                </div>

                {submissionForm}

                <div className="toggle-buttons">
                    <button onClick={() => this.handleClickBack('grid')}>Back</button>
                    <button onClick={() => this.handleClickNext('grid')} className="next-button">Next</button>
                </div>

            </div>
        )
    }
}

export default AppointmentForm