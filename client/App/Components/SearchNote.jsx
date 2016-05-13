import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

import SingleNoteForSearch from './SingleNoteForSearch.jsx';

export default class SearchNote extends TrackerReact(React.Component) {

    constructor() {
        super();
        this.state = {
            searchText: '',
            datam :[]
        }
    }

    UpdateSearch(event) {
        this.setState({
            searchText: event.target.value.substr(0, 20)

        });

        console.log(event.target.value);


    }


    searchResults() {
        var ownerId = Meteor.userId();
        var searchText = this.refs.searchText.value.trim();
        if (searchText) {

            var results = Notes.find({
                    owner_id: ownerId,
                    title: {$regex: searchText + "*"}
                }
            );

            return results;
            console.log(results);
        }

        console.log(searchText);

    }

    searchResults2() {
        console.log("Hasip");
        return Notes.find();
    }

    render() {
        /*  let res = this.searchResults();
         if (res.length < 1) {
         return <div> Loading</div>
         }*/

        return (
            <div>


                <input type="text"
                       className="form-control searchNote"
                       onChange={this.UpdateSearch.bind(this)}
                       placeholder="Search"
                       ref="searchText"
                       value={this.state.searchText}

                />

                <div className="list-group">
                    <ul>
                        {/*
                         {this.searchResults().map(kc => {
                         return <SingleNoteForSearch key={kc._id} note={kc}/>
                         })}
                         */}
                    </ul>
                </div>
            </div>
        )
    }
}