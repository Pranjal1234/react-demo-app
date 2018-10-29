import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ListView from "./components/listView/index";
import DetailView from "./components/detailView/index";

let frameworks = [{
    name: 'React',
    description: 'A library'
  },
    {
        name: 'Angular',
        description: 'A framework'
    }, {
        name: 'VUE',
        description: 'A framework'
    }, {
        name: 'AngularJS',
        description: 'A framework'
    }, {
        name: 'Ember',
        description: 'A framework'
    }, {
        name: 'jQuery',
        description: 'hmmm'
    }]

class App extends Component {
  constructor(props) {
    super(props)
      this.state = {
        selectedItem: frameworks[0]
      }
  }
  render() {
    return (
        <div className='App'>
            <div className='d-flex flex-row'>
                <div className='w-25'
                <ListView frameworks={frameworks} /></div>

                <div className='w-75'
                     <DetailView {...this.state.selectedItem} />

            </div>
        </div>
    );
  }
}

export default App;
