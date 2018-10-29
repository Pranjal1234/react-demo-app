import React, { Component } from 'react';


export default class ListView extends Component {
    render() {
        let frameworkList = this.props.frameworks.map((framework, index) => <li className="list-group-item"><p>{framework.name}</p></li>)
        return (<ul className="list-group list-group-flush">
            {frameworkList}
        </ ul>)
    }
}