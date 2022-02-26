import React, { Component } from "react";
import { ErrorAlert } from './Alert';



class NumberOfEvents extends Component {

    render() {
        return (
            <div className="NumberOfEvents">
                <p>Number of events to show:</p>
                <input type="number"
                    value={this.props.numberOfEvents}
                    className="number-of-events"
                    onChange={(e) => this.props.updateNumberOfEvents(e)} />
                <ErrorAlert text={this.props.errorText} />

            </div>
        );
    }
}

export default NumberOfEvents;