import React, { Component } from 'react';

class ListItem extends Component{
    render(){
        return(
            <li>{ this.props.name } - { this.props.result }</li>
        );
    }
}

class History extends Component{
    render() {
        let _mockHistory = [
            {
                "name": "Murph",
                "result": "32:18",
                "notes": "painful, but fun"
            },
            {
                "name": "Tabata Something Else",
                "type": "reps",
                "result": "421",
                "notes": ""
            }
        ]

        let hist = _mockHistory;
        let formatedLi = [];
        for (var i = 0; i < hist.length; i++) {
            let histObj = {
                name: hist[i].name,
                result: hist[i].result
            };
            formatedLi.push(<ListItem {...histObj} key={i}/>);
        }

        return(
            <div>
                <h2>Historial</h2>
                <ul>
                    { formatedLi }
                </ul>
            </div>
        );
    }
}

export default History;