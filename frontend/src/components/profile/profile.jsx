import React from "react";
import {DEFAULT_PROFILE_PICTURE} from "../../util/icons_and_images_util";
import { connect } from "react-redux";
import './profile.css'
import {Link} from "react-router-dom";

/* user_aws_emmet  */


const mapStateToProps = (state) => {
  return {
    currentUser: state.session.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {

  };
};

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.onmouseenter = null;
    this.onmouseleave = null;
    this.onclick = null;
  }

  grid(areas, components, classGrid, classItems) {
    let a = areas.map(r => `'${r}'`)
    let style = {gridTemplateAreas: a.join(' ')}
    return <>
      <div onMouseEnter={this.onmouseenter} onMouseLeave={this.onmouseleave} onClick={this.onclick}
           className={classGrid} style={style}>{
        Object.entries(components).map(
            (obj, i) => {
              let [key, value] = obj;
              let individualItemClass = key && `${key}-grid-item` || "";
              return <div key={i} className={`${classItems} ${individualItemClass}`} style={{gridArea: `${key}`}}>{value}</div>
            })
      }</div>
    </>
  }

  appointment(){
    return <ul className="appointment-list">{
      Array(10).fill(<li className="appointment-items">
        <button className="checkin-button">checkin</button>
        <li>July 10, 2021 09:00 am</li>
        <Link exact to={"/"}>Edit/Delete</Link>
      </li>)
    }</ul>
  }

  render() {

    let areas = ['picture appointment appointment', 'upload upload upload']
    let components = {
      'picture': <img className="profile-img" src={this.state.image || DEFAULT_PROFILE_PICTURE} alt={this.state.name || "Default Name"} />,
      'appointment': this.appointment(),
      'upload': <div>The upload</div>
    }
    return <>
      {this.grid(areas, components, "grid-layout", "grid-items")}
      <h1>Medical Documents Index</h1>
    </>
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(Profile);