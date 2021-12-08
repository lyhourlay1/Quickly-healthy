import React from 'react'
class DateIndexItem extends React.Component{
    constructor(props){
        super(props)
        this.handleClickRenderSlots= this.handleClickRenderSlots.bind(this)
    }

    handleClickRenderSlots(e){
        e.preventDefault()
    }

    render(){
        
        return(
            <div onClick={this.handleClickRenderSlots}>
                {this.props.date.split(" ")[2]}
                <div>
                    {this.props.slots.map(slot=> <button >{slot}</button>)}  
                </div>
            </div>
        )
    }
}

export default DateIndexItem