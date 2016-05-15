import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

import SingleNote from './SingleNote.jsx';

export default class RecentlyAdded extends TrackerReact(React.Component) {

    constructor() {
        super();
        this.state = {
            datam: Notes.find({owner_id: Meteor.userId()})
        }
    }

    showNote(note) {
        this.props.showNote(note);
    }

    render() {
        var notes = this.state.datam.map(note => {
            return <SingleNote notem={note} key={note._id}
                               SelectedNotem={this.props.selectedNote}
                               showNote={this.showNote.bind(this)}
            />;
        });

        return (
            <div className="list-group">
                <a href="#" className="list-group-item disabled">
                    <strong>Lastest Notes</strong>
                </a>
                {notes}
            </div>

        )
    }
}