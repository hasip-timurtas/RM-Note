import React from 'react';

import RecentlyAdded from './Components/RecentlyAdded.jsx';
import SearchNote from './Components/SearchNote.jsx';
import ShowNote from './Components/ShowNote.jsx';

Notes = new Meteor.Collection("notes");

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            selectedNote: []
        }
    }

    showNote(note)
    {
        this.setState({selectedNote: note})
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-8">
                    <SearchNote selectedNote={this.state.selectedNote}/>
                    <hr/>
                    <ShowNote selectedNote={this.state.selectedNote} />
                </div>
                <div className="col-md-4">
                    <RecentlyAdded selectedNote={this.state.selectedNote}
                                   showNote={this.showNote.bind(this)}
                    />
                </div>

                <div>
                    {Meteor.userId() ? "Login Oldu" : "Olmadıı"}
                </div>


            </div>

        )
    }
}