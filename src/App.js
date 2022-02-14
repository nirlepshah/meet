import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents, extractLocations } from './api';
import './App.css'

class App extends Component {
  state = {
    events: [], //create "events" state 
    locations: [] // create "locations" state
  }

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({ events, locations: extractLocations(events) });
      }
    });
  }

  componentWillUnmount() {
    this.mounted = false;
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


        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
        <NumberOfEvents />


        <EventList events={this.state.events} />

      </div>
    );
  }
}
export default App;