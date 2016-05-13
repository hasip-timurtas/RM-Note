import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

import SingleNote from './SingleNote.jsx';

export default class SearchNote extends TrackerReact(React.Component) {

    constructor() {
        super();
        this.state = {
            searchText: '',
            datam: []
        }
    }

    UpdateSearch(event) {
        this.setState({
            searchText: event.target.value
        });

        this.loadNotesFromDB();
    }

    loadNotesFromDB() {
        var searchText = this.state.searchText;

        if (searchText) {
            var results = Notes.find({
                    ownerid: Meteor.userId(),
                    title: {$regex: searchText + "*", $options: "i"}
                }
            );

            this.setState({
                datam: results
            });
        }
    }

    render() {
        var notes = this.state.datam.map(note => {
            return <SingleNote notem={note} key={note._id} />;
        });

        return (
            <div>

                <input type="text"
                       className="form-control searchNote"
                       onChange={this.UpdateSearch.bind(this)}
                       placeholder="Search"
                       ref="searchText"
                       value={this.state.searchText}
                />

                    {notes}
            </div>
        )
    }
}