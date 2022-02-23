import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import WelcomeScreen from './WelcomeScreen';
import { getEvents, extractLocations, checkToken, getAccessToken } from './api';
import './App.css'


class App extends Component {
  state = {
    events: [], //create "events" state 
    locations: [], // create "locations" state
    numberOfEvents: 32,
    currentLocation: 'all',
    errorText: '',
    showWelcomeScreen: undefined,

  }
  async componentDidMount() {
    const { numberOfEvents } = this.state;
    this.mounted = true;
    const accessToken = localStorage.getItem('access_token');
    const isTokenValid = (await checkToken(accessToken)).error ? false : true;
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get('code');

    this.setState({ showWelcomeScreen: !(code || isTokenValid) });
    if ((code || isTokenValid) && this.mounted) {
      getEvents().then(events => {
        if (this.mounted) {
          this.setState({
            events: events.slice(0, numberOfEvents),
            locations: extractLocations(events),
          });
        }
      });
    }
  }

  // componentDidMount() {
  //   this.mounted = true;
  //   const accessToken = localStorage.getItem('access_token');
  //   const isTokenValid = (await checkToken(accessToken)).error ? false : true;
  //   const searchParams = new URLSearchParams(window.location.search);
  //   const code = searchParams.get('code');
  //   this.setState({ showWelcomeScreen: !(code || isTokenValid) });
  //   if ((code || isTokenValid) && this.mounted) {
  //     getEvents().then((events) => {
  //       if (this.mounted) {
  //         this.setState({
  //           events: events.slice(0, this.state.numberOfEvents),
  //           locations: extractLocations(events),
  //         });
  //       }
  //     });
  //   }
  // }
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


  updateNumberOfEvents = async e => {
    const newNumber = e.target.value ? parseInt(e.target.value) : 32;
    if (newNumber < 1 || newNumber > 32) {
      return this.setState({
        errorText: 'Please choose a number between 1 and 32.',
        numberOfEvents: 0,
      });
    } else {
      this.setState({
        errorText: '',
        numberOfEvents: newNumber,
      });
      this.updateEvents(this.state.currentLocation, this.state.numberOfEvents);
    }
  };

  render() {
    if (this.state.showWelcomeScreen === undefined)
      return <div className="App" />;
    return (
      <div className="App">


        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
        <NumberOfEvents numberOfEvents={this.state.numberOfEvents} updateNumberOfEvents={this.updateNumberOfEvents} errorText={this.state.errorText} />
        <EventList events={this.state.events} />
        <WelcomeScreen showWelcomeScreen={this.state.showWelcomeScreen}
          getAccessToken={() => { getAccessToken() }} />
      </div>
    );
  }
}
export default App;