import React from 'react';

import RecentlyAdded from './Components/RecentlyAdded.jsx';
import SearchNote from './Components/SearchNote.jsx';

import InstantBox from './Components/Deneme.jsx';

Notes = new Meteor.Collection("notes");

export default class App extends React.Component {
    render() {

        let tableData=[
            {
                name:'Paul Shan',
                roll: '001'
            },
            {
                name:'John Doe',
                roll: '002'
            },
            {
                name:'Sachin Tendulkar',
                roll: '003'
            }];

        console.log(tableData);
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

                <InstantBox data={tableData} hasip="MHT"/>
            </div>

        )
    }
}