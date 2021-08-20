import React from 'react';


class Clock extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            start: new Date()
        };
        this.interval = null

        this.tick = this.tick.bind(this);
    }

    tick () {
        this.setState({start: new Date()})
    }

    componentDidMount() {
        const id = setInterval(this.tick, 1000);
        this.interval = id;
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        
        const months = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"]

        const days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"]

        return (

            <div className="clock">
                <p>Time: {this.state.start.getHours()}:{this.state.start.getMinutes()}:{this.state.start.getSeconds()}</p>
                <p>Date: {days[this.state.start.getDay()]} {months[this.state.start.getMonth()]} {this.state.start.getDate()} {this.state.start.getUTCFullYear()}</p>
                {/* <button onClick="this.componentWillUnmount()">END ME</button> */}
            </div>
        )
    }
}

export default Clock;

