import React from 'react';

export default class ShowNote extends React.Component {

    render() {
        return (
            <div className="show-note">
                <input className="form-control note-title" type="text" placeholder="title"
                       value={this.props.selectedNote.title}/>
                <textarea className="form-control note-content" placeholder="content" rows="15"
                          value={this.props.selectedNote.content}/>
                <div className="alert alert-info" role="alert">
                    Entry Date : <strong>Tarih</strong>

                </div>
            </div>

        )
    }
}