import React from 'react';
import {connect} from 'react-redux';
import './file_view.css'
import {fetchDoctors} from "../../actions/doctor_actions";

const mapStateToProps = (state, ownProp) => {
    let id = ownProp.match && ownProp.match.params.id || ownProp.doctorId || "";
    let viewType = ownProp.match && ownProp.match.type || ownProp.viewType || "";
    let person = id && state.entities.doctor[id];
    let files = person && person.files || {};

    console.log({id, viewType, person, files})

    return {
        id: id,
        viewType: viewType,
        person: person,
        files: files,
        doctors: state.entities.doctor
    }
};

const mapDispatchToProps = (dispatch, ownProp) => {
    let id = ownProp.match && ownProp.match.params.id || ownProp.doctorId || "";
    let viewType = ownProp.match && ownProp.match.type || ownProp.viewType || "";
    return {
        fetchDoctors: () => dispatch(fetchDoctors())
    }
};

class FileView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        this.props.fetchDoctors();
    }

    render() {
        if (!this.props.files || this.props.files && Object.keys(this.props.files).length === 0)
            return <h1>No files found</h1>;
        let files = Object.entries(this.props.files).map(pair => pair[1]);
        let file = files[4];
        console.log(file)
        if (file.mimetype === "text/plain")
            file.mimetype = "text/html";
        //return <iframe src={`data:${file.mimetype};base64,${files[0].data}`} width="400" height="400" />
        return <iframe src={`data:${file.mimetype};base64,${file.data}`} width="200" height="400" />
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FileView);