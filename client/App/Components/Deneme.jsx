import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

export default class SendDataForSearch extends TrackerReact(React.Component){
render(){
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

    return (
        <InstantBox data={tableData} hasip="MHT"/>
    )

}
}

export default class SearchBox extends React.Component {
    doSearch() {
        var query = this.refs.searchInput.getDOMNode().value; // this is the search text
        this.props.doSearch(query);
    }

    render() {
        return <input type="text" ref="searchInput" placeholder="Search Name" value={this.props.query}
                      onChange={this.doSearch}/>
    }
}

export default class DisplayTable extends React.Component {
    render() {
        //making the rows to display
        var rows = [];
        this.props.data.forEach(function (person) {
            rows.push(<tr>
                <td>{person.name}</td>
                <td>{person.roll}</td>
            </tr>)
        });
        //returning the table
        return (
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Roll No</th>
                </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        );
    }
}

export default class InstantBox extends TrackerReact(React.Component) {

    constructor() {
        super();
        this.state = {
            query: '',
            filteredData: this.props.hasip
        }
    }

    doSearch(queryText) {
        console.log(queryText)
        //get query result
        var queryResult = [];
        this.props.data.forEach(function (person) {
            if (person.name.toLowerCase().indexOf(queryText) != -1)
                queryResult.push(person);
        });

        this.setState({
            query: queryText,
            filteredData: queryResult
        })
    }

    render() {
        return (
            <div className="InstantBox">
                <h2>Void Canvas Instant Search</h2>
                <SearchBox query={this.state.query} doSearch={this.doSearch}/>
                <DisplayTable data={this.state.filteredData}/>
            </div>
        );
    }
}

//InstantBox.propTypes = { query: React.PropTypes.number,  filteredData : React.PropTypes.string.isRequired };
