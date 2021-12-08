import React from 'react'
import DateIndexItem from './date_index_item'
import './appointment_form.css'
const availabilitesInt = {10: [9,10,11], 12: [9,10,11,12]}

process.env.TZ = 'America/Los Angeles' 
class AppointmentForm extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            availabilites:"",
            name: this.props.currentUser.handle,
            reason:"",
            date: "",
        }
        this.grid = this.generateCalenderList();
    }

    update(field){
         return (e)=>{
            this.setState({[field]: e.target.value})
        } 
    }

    generateCalenderList(){
        const availabilites = {"Tue Dec 07 2021": [9,10,11], "Wed Dec 08 2021": [9,10,11,12]}
        let days ={"Mon": [], "Tue":[], "Wed":[], "Thu":[], "Fri":[], "Sat":[], "Sun":[]}
        let today= new Date(Date.now())
        let thisMonth = today.getMonth()
        let thisYear = today.getFullYear()
        let firstDayOfMonth = new Date(thisYear, thisMonth, 1)
        let firstDayStr = firstDayOfMonth.toDateString().split(" ")
        days[firstDayStr[0]].push(firstDayOfMonth.toDateString())
        let firstDay= new Date(thisYear, thisMonth, 1)
        while(firstDay.toDateString().split(" ")[0]!=="Mon"){
            let firstDate = new Date(firstDay.setDate(firstDay.getDate()- 1)).toDateString()
            let firstDateArr= firstDate.split(" ")
            days[firstDateArr[0]].push(firstDate)
        }
        let i=0;
        while(firstDayOfMonth.toDateString().split(" ")[0]!== "Sun" || i< 30 ){
            let date = new Date(firstDayOfMonth.setDate(firstDayOfMonth.getDate()+ 1)).toDateString()
            let dateArr = date.split(" ")
            days[dateArr[0]].push(date)
            i++
        }
        let arrayOfDays =[]
        for (let [key, value] of Object.entries(days)) {
        arrayOfDays.push(value)
        }
        let transposeArr=[]
        for(let i=0; i< arrayOfDays[0].length; i++){
            for(let j=0; j<arrayOfDays.length; j++){
                transposeArr.push(arrayOfDays[j][i])
            }
        }

        let schedules = []  
        for(let i=0; i< transposeArr.length ;i++){
            // console.log(oneD[i])
            let obj;
            if(availabilites[transposeArr[i]]) {
                obj = {day: `${transposeArr[i]}`, slots: availabilites[transposeArr[i]]}
            }else{
                obj = {day: `${transposeArr[i]}`, slots: []}
            }
            schedules.push(obj)
        }
        return schedules
    }
    render(){
        
        let display = (<div></div>)
        if(this.state.availabilites.length===0){
            display = (<h1> No Slots available</h1>) 
        }
        else{
            display = (
                <div>
                    <div>
                        Name:
                        <input type="text" value={this.state.name} onChange={this.update('name')}/>
                    </div>
                    <div>
                        Reason:
                        <input type="text" value={this.state.reason} onChange={this.update('reason')}/>
                    </div>
                </div>
            )
        }
        return(
            <div>
                {/* <input type="date" value={today} min={min} max={max} onChange={this.update('date')}/> */}
                {display}
                <div className= "grid-flex">
                    <div className= "grid">Monday</div>
                    <div className= "grid">Tuesday</div>
                    <div className= "grid">Wednesday</div>
                    <div className= "grid">Thursday</div>
                    <div className= "grid">Friday</div>
                    <div className= "grid">Saturday</div>
                    <div className= "grid">Sunday</div>
                    {this.grid.map((date, idx)=> <DateIndexItem date = {date.day} slots={date.slots} key={idx}/>) }                
                </div>

            </div>
        )
    }
}

export default AppointmentForm