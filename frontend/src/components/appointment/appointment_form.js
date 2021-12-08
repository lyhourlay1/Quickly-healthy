import React from 'react'
const availabilites = {"Tue Dec 07 2021": [9,10,11], "Wed Dec 08 2021": [9,10,11,12]}
class AppointmentForm extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            name: this.props.currentUser.handle,
            reason:"",
            date: ""
        }
   }

    updateDate(field){
         return (e)=>{
            this.setState({[field]: e.target.value})
        } 
    }
    render(){
        let todayYr = new Date(Date.now()).getFullYear().toString()
        let todayMn = (new Date(Date.now()).getMonth()+1).toString()
        let todayDt = new Date(Date.now()).getDate().toString()
        if (todayDt.length<2){
            todayDt = "0" + todayDt
        }
        if(todayMn.length<2){
            todayMn = "0"+ todayMn
        }
        let today = todayYr + "-" + todayMn + "-" + todayDt
        let min = todayYr + "-01" + "-01"
        let max = (new Date(Date.now()).getFullYear()+1).toString()
        
        return(
            <div>
                <input type="date" value={today} min={min} max={max} onChange={this.update('date')}/>
                <div>
                    <div>
                        Name
                    </div>
                    <input type="text" value={this.state.name} onChange={this.update('name')} id='text-box'/>
                </div>
                <div>
                    <div>
                        Reason
                    </div>
                    <input type="text" value={this.state.reason} onChange={this.update('reason')} id='text-box'/>
                </div>
            </div>
        )
    }
}

export default AppointmentForm

{/* <div className="calender">
    <h2 class="dom-heading dom-heading-1">Mon &nbsp;Tue &nbsp;Wed &nbsp;Thur &nbsp;Fri </h2>
</div> */}
{/* <div >
    <div class="rectangle">
        <div class="rectangle-1">
            <div class="rectangle-2">
            <h2 class="dom-heading dom-heading-1">01 &nbsp;02 &nbsp;03 &nbsp;04 &nbsp;05 &nbsp;06 &nbsp;07</h2>
            <h2 class="dom-heading dom-heading-2">08 &nbsp;09 &nbsp;10 &nbsp;11 &nbsp;12 &nbsp;13 &nbsp;14</h2>
            <h2 class="dom-heading dom-heading-3">15 &nbsp;16 &nbsp;17 &nbsp;18 &nbsp;19 &nbsp;20 &nbsp;21</h2>
            <h2 class="dom-heading dom-heading-4">22 &nbsp;23 &nbsp;24 &nbsp;25 &nbsp;26 &nbsp;27 &nbsp;28</h2>
            <h2 class="dom-heading dom-heading-5">29 &nbsp;30 &nbsp;31</h2>
            </div>
        </div>
        </div>
        <div class="rectangle-3">
        <h2 class="dom-heading dom-heading-6">November</h2>
        </div>
</div> */}