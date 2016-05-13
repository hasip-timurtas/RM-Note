import React from 'react';

export default class SingleNoteForSearch extends React.Component{
    render(){
        return(
            <li>{this.props.note.title}</li>
        )
    }
}