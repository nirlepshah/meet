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
    locations: [], // create "locations" state
    numberOfEvents: 32,
    currentLocation: 'all',
  }

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({
          events: events.slice(0, this.state.numberOfEvents),
          locations: extractLocations(events),
        });
      }
    });
  }
  componentWillUnmount() {
    this.mounted = false;
  }

  // Method to update events state - As state of the component cannot be changed from outside of the component 
  updateEvents = (location, numberOfEvents) => {
    getEvents().then((events) => {
      const locationEvents = (location === 'all') ?
        events :
        events.filter((event) => event.location === location);
      this.setState({
        events: locationEvents.slice(0, this.state.numberOfEvents),
        currentLocation: location,
      });
    });
  }
  // updateEvents = async (numberOfEvents) => {
  //   getEvents().then(events => {

  //     if (this.mounted) {
  //       this.setState({
  //         events: events.slice(0, this.state.numberOfEvents),

  //       });
  //     }
  //   });
  // };

  updateNumberOfEvents = async e => {
    const newNumber = e.target.value ? parseInt(e.target.value) : 32;
    if (newNumber < 1 || newNumber > 32) {
      return this.setState({
        numberOfEvents: 0,
      });
    } else {
      this.setState({

        numberOfEvents: newNumber,
      });
      this.updateEvents(this.state.currentLocation, this.state.numberOfEvents);
    }
  };

  render() {
    return (
      <div className="App">


        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
        <NumberOfEvents numberOfEvents={this.state.numberOfEvents} updateNumberOfEvents={this.updateNumberOfEvents} />


        <EventList events={this.state.events} />

      </div>
    );
  }
}
export default App;