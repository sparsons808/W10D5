import React from 'react';

// const Clock = () => <h1>hello from clock</h1>;

class Clock extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            start: new Date()
        };

        this.tick = this.tick.bind(this);
    }

    tick () {
        this.setState({start: new Date()})
    }

    componentDidMount() {
        setInterval(this.tick, 1000);
    }

    render() {
        
        const months = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"]

        const days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"]

        return (

            <div className="clock">
                <p>Time: {this.state.start.getHours()}:{this.state.start.getMinutes()}:{this.state.start.getSeconds()}</p>
                <p>Date: {days[this.state.start.getDay()]} {months[this.state.start.getMonth()]} {this.state.start.getDate()} {this.state.start.getUTCFullYear()}</p>

            </div>
        )
    }
}

export default Clock;

