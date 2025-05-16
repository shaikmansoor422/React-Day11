import React from "react";
import "./Counter.css"

class Counter extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
    }


    incrFunc = () => {
        this.setState({ count: this.state.count + 1 })
    }

    clearFunc = () => {
        this.setState({ count: 0 })
    }

    decrFunc = () => {
        this.setState({ count: this.state.count - 1 })
    }
    render() {

        return (<>
        <h3 id="heading">Simple counter App</h3>
                <div id="count_container">
                    <div id="num">
                        <h1 >{this.state.count}</h1>
                        </div>
                    <div id="button_container">
                        <button onClick={this.incrFunc}>Incr +</button>
                        <button onClick={this.clearFunc}>Clear </button>
                        <button onClick={this.decrFunc}>Decre -</button>
                    </div>
                </div>
                
        </>)
    }
}

export default Counter



