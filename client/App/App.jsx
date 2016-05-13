import React from 'react';

import RecentlyAdded from './Components/RecentlyAdded.jsx';
import SearchNote from './Components/SearchNote.jsx';

Notes = new Meteor.Collection("notes");

export default class App extends React.Component {
    render() {

        return (
            <div className="row">
                <div className="col-md-8">
                    <SearchNote />
                    <hr/>
                    {/* Edit Note Buraya Gelecek!!!*/}
                </div>
                <div className="col-md-4">
                    <RecentlyAdded />
                </div>

                <div>
                    {Meteor.userId() ? "Login Oldu" : "Olmadıı"}
                </div>
            </div>

        )
    }
}