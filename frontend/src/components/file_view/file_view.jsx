import React from 'react';
import './file_view.css'


export default class FileView extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (!this.props.file)
            return null;

        let file = this.props.file;
        if (file.mimetype === "text/plain")
            file.mimetype = "text/html";

        return <div className="file-view">
            <iframe src={`data:${file.mimetype};base64,${file.data}`} className="iframe-view"/>
        </div>
    }
}