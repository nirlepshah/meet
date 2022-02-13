import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents } from './api';

class App extends Component {
  state = {
    events: [], //create "events" state 
    locations: [] // create "locations" state
  }
  // Method to update events state - As state of the component cannot be changed from outside of the component 
  updateEvents = (location) => {
    getEvents().then((events) => {
      const locationEvents = (location === 'all') ?
        events :
        events.filter((event) => event.location === location);
      this.setState({
        events: locationEvents
      });
    });
  }

  render() {
    return (
      <div className="App">
        {/* Pass "locations" as prop in CitySearch component 
        updateEvents method is passed as prop to CitySearch component
        */}

        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
        {/* Pass "state" as prop in EventList component */}
        <EventList events={this.state.events} />
        <NumberOfEvents />

      </div>
    );
  }
}
export default App;