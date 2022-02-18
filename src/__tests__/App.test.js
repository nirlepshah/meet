import React from "react";
import { shallow, mount } from "enzyme";
import App from '../App';
import EventList from '../EventList';
import CitySearch from '../CitySearch';
import NumberOfEvents from '../NumberOfEvents';
import { mockData } from '../mock-data';
import { extractLocations, getEvents } from '../api'

describe('<App/ > component', () => {
    let AppWrapper;
    beforeAll(() => {
        AppWrapper = shallow(<App />)
    })
    test('render list of events', () => {

        expect(AppWrapper.find(EventList)).toHaveLength(1);
    });
    test('render CitySearch', () => {

        expect(AppWrapper.find(CitySearch)).toHaveLength(1);
    });
    test('render NumberOfEvents', () => {
        expect(AppWrapper.find(NumberOfEvents)).toHaveLength(1);
    });

});
// task 4.4 new scope for integration testing 

describe('<App /> integration', () => {

    // Test to check events is declared as state in App. js and passed as prop to EventList component 

    test('App passes "events" state as a prop to EventList', () => {
        const AppWrapper = mount(<App />); // full rendering of the component 
        const AppEventsState = AppWrapper.state('events');
        expect(AppEventsState).not.toEqual(undefined);
        expect(AppWrapper.find(EventList).props().events).toEqual(AppEventsState);
        AppWrapper.unmount();
    });

    // Test to check locations is declared as state in App. js and passed as prop to CitySearch component

    test('App passes "locations" state as a prop to CitySearch', () => {
        const AppWrapper = mount(<App />); // full rendering of the component
        const AppLocationsState = AppWrapper.state('locations'); // const to hold the "locations" state 
        expect(AppLocationsState).not.toEqual(undefined); // check whether state is not undefined
        expect(AppWrapper.find(CitySearch).props().locations).toEqual(AppLocationsState); // compare whether "locations" state is passed as prop 
        AppWrapper.unmount(); //clean-up DOM after the test using unmount()
    });

    // test to get list of events per city name selected by the user
    test('get list of events matching the city selected by the user', async () => {
        const AppWrapper = mount(<App />); // fully rendering App component
        const CitySearchWrapper = AppWrapper.find(CitySearch); //  variable to hold CitySearch component
        const locations = extractLocations(mockData); // variable to get unique locations
        CitySearchWrapper.setState({ suggestions: locations }); // assigning value to the suggestions state of CitySearch component
        const suggestions = CitySearchWrapper.state('suggestions'); // variable to hold CitySearch component state
        const selectedIndex = Math.floor(Math.random() * (suggestions.length));// variable to hold the index of the selected suggestion form the suggestions array 
        const selectedCity = suggestions[selectedIndex]; // variable to hold  "selectedIndex" index of "suggestions" array
        // handleItemClicked() method is called and selected city is passed as argument, await keyword is addedd as it has async code to run and whenever there is await keyword async has to be added before the test
        await CitySearchWrapper.instance().handleItemClicked(selectedCity);
        const allEvents = await getEvents(); // getEvents is an async API function - This function is used to extract all the events from the API asynchronously
        const eventsToShow = allEvents.filter(event => event.location === selectedCity); //eventsToShow will store list of all the events that have same location/city
        // test will compare state of the events with events obtained through filter based on city and stored in eventsToShow variable
        expect(AppWrapper.state('events')).toEqual(eventsToShow);
        AppWrapper.unmount(); //clean-up DOM after the test using unmount()
    });
    //Test to "See all cities"
    test('get list of all events when user selects "See all cities"', async () => {
        const AppWrapper = mount(<App />);// full render the App component 
        const suggestionItems = AppWrapper.find(CitySearch).find('.suggestions li');
        await suggestionItems.at(suggestionItems.length - 1).simulate('click');
        const allEvents = await getEvents();
        expect(AppWrapper.state('events')).toEqual(allEvents);
        AppWrapper.unmount();
    })
    test('pass NumberOfEvents state to 32', () => {
        const AppWrapper = mount(<App />);
        const AppNumberOfEventsState = AppWrapper.state('numberOfEvents');
        expect(AppNumberOfEventsState).not.toEqual(undefined);
        expect(AppWrapper.find(NumberOfEvents).props().numberOfEvents).toEqual(32);
        AppWrapper.unmount();
    });

});