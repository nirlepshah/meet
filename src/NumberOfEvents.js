import React, { Component } from 'react';

class NumberOfEvents extends Component {
    state = {
        numberOfEvents: 32,
        errorText: '',
    }
    handleInputChanged = (event) => {

        const value = event.target.value;

        if (value < 1 || value > 32) {
            this.setState({
                numberOfEvents: '',
                errorText: 'Please enter a number between 1 and 32'
            })
        } else {
            this.setState({
                numberOfEvents: value,
                errorText: '',
            });
        }

    };
    render() {
        return (
            <div className="NumberOfEvents">

                <p><b>Number of Events:</b></p>
                <input
                    type="number"
                    name="number"
                    className="number-of-events"
                    value={this.state.NumberOfEvents}
                    onChange={(e) => this.handleInputChanged(e)}
                />

            </div>
        );
    }

}
export default NumberOfEvents;