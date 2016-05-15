import React from 'react';

export default class ShowNote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.selectedNotem.title,
            content: this.props.selectedNotem.content
        };
    }

    deleteNote() {
        var noteId = this.props.selectedNotem._id;
        Notes.remove(noteId);
    }

    updateNote() {
        console.log(this.props.selectedNote1);
        Notes.update({_id: this.props.selectedNote1.noteId},
            {
                $set: {
                    title: this.props.selectedNote1.title,
                    content: this.props.selectedNote1.content
                }
            });
    }

    render() {
        //console.log(this.props.selectedNotem);
        return (
            <div className="show-note">

                <input className="form-control"
                       type="text"
                       value={this.props.selectedNote1.title}
                       ref="editInput"
                       className="form-control"
                       onChange={this.props.titleChange.bind(this)}
                />

                    <textarea className="form-control note-content"
                              placeholder="content" rows="15"
                              value={this.props.selectedNote1.content}
                              readonly={true}
                              onChange={this.props.contentChange.bind(this)}>
                    </textarea>


                <div className="alert alert-info" role="alert">
                    Entry Date : <strong>{/* note.entry_Date */}</strong>

                    <button type="button"
                            className="btn btn-default delete-note"
                            onClick={this.deleteNote.bind(this)}
                    >Delete
                    </button>
                    <button type="button"
                            className="btn btn-default update-note"
                            onClick={this.updateNote.bind(this)}
                    >Update
                    </button>
                    <button type="button" className="btn btn-default share-note">Share</button>
                </div>
            </div>
        )

    }
}