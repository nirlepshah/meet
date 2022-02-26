import React from "react";
import { shallow } from "enzyme";
import Event from "../Event";
import { mockData } from "../mock-data";

describe('<EventList /> component', () => {
    let EventWrapper;
    beforeAll(() => {
        EventWrapper = shallow(<Event event={mockData[1]} />);
    });

    test('Render event', () => {
        expect(EventWrapper.find('.event')).toHaveLength(1);
    });

    test('Render summary', () => {
        expect(EventWrapper.find('.summary')).toHaveLength(1);
    });


    test('Render location', () => {
        expect(EventWrapper.find('.location')).toHaveLength(1);
    });

    test('Render show details button', () => {
        expect(EventWrapper.find('.show-details')).toHaveLength(1);
    });
    test('Render details when the button is clicked', () => {
        EventWrapper.setState({
            collapsed: true
        });
        EventWrapper.find('.show-details').simulate('click');
        expect(EventWrapper.state('collapsed')).toBe(false);
    });
    test('Hide  details when the button is clicked', () => {
        EventWrapper.setState({
            collapsed: false
        });
        EventWrapper.find('.hide-details').simulate('click');
        expect(EventWrapper.state('collapsed')).toBe(true);
    });
})