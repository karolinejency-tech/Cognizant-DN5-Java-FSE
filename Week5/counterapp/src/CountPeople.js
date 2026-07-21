import React from "react";

class CountPeople extends React.Component {

    constructor() {
        super();

        this.state = {
            entrycount: 0,
            exitcount: 0
        };
    }

    updateEntry = () => {
        this.setState((prevState) => ({
            entrycount: prevState.entrycount + 1
        }));
    }

    updateExit = () => {
        this.setState((prevState) => ({
            exitcount: prevState.exitcount + 1
        }));
    }

    render() {
        return (
            <div style={{ textAlign: "center", marginTop: "40px" }}>
                <h1>Mall Entry Counter</h1>

                <h3>People Entered: {this.state.entrycount}</h3>
                <button onClick={this.updateEntry}>
                    Login
                </button>

                <br /><br />

                <h3>People Exited: {this.state.exitcount}</h3>
                <button onClick={this.updateExit}>
                    Exit
                </button>
            </div>
        );
    }
}

export default CountPeople;