import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { mockData } from './mock-data';

class App extends Component {

  state = {
    numberOfEvents: 32,
  };
  render() {
    return (
      <div className="App">
        <CitySearch />
        <NumberOfEvents numberOfEvents={this.state.numberOfEvents} />
        <EventList events={mockData} />


      </div>
    );
  }
}
export default App;