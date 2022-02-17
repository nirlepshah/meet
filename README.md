# meet APP

## Project Objective

To build a serverless, progressive web application (PWA) with React using a test-driven development (TDD) technique.

## User Stories:

○ As a user, I would like to be able to filter events by city so that I can see the list of events that take place in that city. <br>
○ As a user, I would like to be able to show/hide event details so that I can see more/less information about an event <br>
○ As a user, I would like to be able to specify the number of events I want to view in the app so that I can see more or fewer events in the events list at once. <br>
○ As a user, I would like to be able to use the app when offline so that I can see the events I viewed the last time I was online. <br>
○ As a user, I would like to be able to add the app shortcut to my home screen so that I can open the app faster. <br>
○ As a user, I would like to be able to see a chart showing the upcoming events in each city so that I know what events are organized in which city <br>

## Scenarios:

FEATURE 2: SHOW/HIDE AN EVENT'S DETAILS

User Story: As a user, I would like to be able to click the show/hide event details button, so that I can see more/less information about a particular event.

Scenario 1: An event element card remains collapsed by default

- Given the user has not clicked the toggle button
- When the user is on the main page
- Then the event element card will remain in the collapsed state

Scenario 2: User can expand an event card to see additional details

- Given the user wanted to see more details about an event
- when the user clicks on the toggle button
- Then the event card will be expanded to display additional details

Scenario 3 - User can collapse an event card to hide additional details.

- Given a user wanted to hide additional event details
- When a user clicks on the toggle button
- Then the event card will be collapsed again

FEATURE 3: SPECIFY THE NUMBER OF EVENTS

User Story: As a user, I would like to be able to enter the number of events that I want to view in the app so that I can manage the number of events to be displayed at a time

Scenario1: When the user hasn’t specified a number, 32 is the default number

- Given the user has not entered any positive number in the input element
- When the user is on the main page
- Then the default number of events that will be displayed on the main page is 32

Scenario 2: User can change the number of events they want to see

- Given the user has the option to change the number of events to be displayed
- When the user enters the positive number in the input element
- Then that exact number of events will be displayed

FEATURE 4: USE THE APP WHEN OFFLINE

User story: As a user, I would like to be able to navigate the app when offline so that I can retrieve event information that I viewed the last time when I was online.
Scenario 1: Show cached data when there’s no internet connection

- Given the user has no internet connection
- When the user tries to access the meet app
- Then all the information stored in the cache will be displayed to the user

Scenario 2: Show error when the user changes the settings (city, time range)

- Given the user has no internet connection
- When the user tries to modify the app information
- Then the error message will be displayed stating internet connection is required to modify the data

FEATURE 5: DATA VISUALIZATION

User story: As a user, I would like to be able to see a chart displaying the upcoming events in each city so that I can categorize events by city.
Scenario 1: Show a chart with the number of upcoming events in each city

- Given the user is on the main page
- When the user scrolls to the end of the page
- Then the user will see a chart displaying the upcoming events per city

## Key Features:

○ Filter events by city. <br>
○ Show/hide event details. <br>
○ Specify number of events. <br>
○ Use the app when offline. <br>
○ Add an app shortcut to the home screen. <br>
○ View a chart showing the number of upcoming events by city.<br>
