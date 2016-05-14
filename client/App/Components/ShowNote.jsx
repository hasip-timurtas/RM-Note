import React from 'react';

export default class ShowNote extends React.Component {

    deleteNote() {
        var noteId = this.props.selectedNote.props.notem._id;
        Notes.remove(noteId);
    }

    render() {
        var note;
        if (!this.props.selectedNote.props) {
            return null;
        } else {

            note = this.props.selectedNote.props.notem;
            return (
                <div className="show-note">
                    <input className="form-control note-title" type="text" placeholder="title"
                           value={note.title}/>
                <textarea className="form-control note-content" placeholder="content" rows="15"
                          value={note.content}/>
                    <div className="alert alert-info" role="alert">
                        Entry Date : <strong>{/* note.entry_Date */}</strong>
                        <button type="button" className="btn btn-default delete-note"
                                onClick={this.deleteNote.bind(this)}
                        >Delete
                        </button>
                        <button type="button" className="btn btn-default update-note">Update</button>
                        <button type="button" className="btn btn-default share-note">Share</button>
                    </div>
                </div>
            )
        }
    }
}