import React, { Component } from "react";




class NumberOfEvents extends Component {

    render() {
        return (
            <div className="NumberOfEvents">

                <p>Number of events to show:</p>
                <input type="number"
                    value={this.props.numberOfEvents}
                    className="number-of-events"
                    onChange={(e) => this.props.updateNumberOfEvents(e)} />

            </div>
        );
    }
}

export default NumberOfEvents;