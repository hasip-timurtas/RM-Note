import React from 'react';

import RecentlyAdded from './Components/RecentlyAdded.jsx';
import SearchNote from './Components/SearchNote.jsx';
import ShowNote from './Components/ShowNote.jsx';

Notes = new Meteor.Collection("notes");

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            selectedNote: {_id:null, text:'',content:''}
        }
    }

    showNote(note)
    {
        console.log(note);
        currentNote = {
            _id : note.props.notem._id,
            title : note.props.notem.title,
            content: note.props.notem.content
        };

        this.setState({selectedNote: currentNote})
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