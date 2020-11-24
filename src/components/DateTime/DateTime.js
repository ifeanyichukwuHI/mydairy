import React, { Component } from 'react';

class DateTime extends Component {
    constructor(props) {
        super();
        this.state = {
            time: new Date(),
        }
    }

    componentDidMount() {
        this.timerId = setInterval(
            () => this.tick()
            , 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    tick() {
        this.setState({
            time: new Date(),
        })
    }

    render() {
        return (
            <div>
                <div>{this.state.time.toLocaleDateString().split('/').join('-')}</div>
                <div>{this.state.time.toLocaleTimeString()}</div>
            </div>

        )
    }
}


export default DateTime;