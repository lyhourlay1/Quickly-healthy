import React from 'react';
import {connect} from 'react-redux';
import './file_view.css'
import {fetchDoctor} from "../../actions/doctor_actions";

const mapStateToProps = (state, ownProp) => {
    let id = ownProp.match && ownProp.match.params.id || "";
    let viewType = ownProp.match && ownProp.match.type || "";
    let person = id && state.entities[viewType][id];
    let files = person && person.files || {};

    return {
        id: id,
        viewType: viewType,
        person: person,
        files: files
    }
};

const mapDispatchToProps = (dispatch, ownProp) => {
    let id = ownProp.match && ownProp.match.params.id || "";
    let viewType = ownProp.match && ownProp.match.type || "";
    return {
        fetchFiles: () => (viewType === "doctors") ? dispatch(fetchDoctor(id)) : null
    }
};

class FileView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
    }

    render() {
        if (!this.props.files || this.props.files && Object.keys(this.props.files).length === 0)
            return null;
        return <iframe src={`data:text/html;base64,${this.props.data}`} width="400" height="400" />
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FileView);