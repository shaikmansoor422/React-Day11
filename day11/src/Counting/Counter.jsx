import React from "react";
import "./Counting.css"

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
            <div id="page" style={{backgroundColor : "black"}}>
                <div id="count_container">
                    <h1 id="heading">{this.state.count}</h1>
                    <div id="button_container">
                        <button onClick={this.incrFunc}>Incr +</button>
                        <button onClick={this.clearFunc}>Clear </button>
                        <button onClick={this.decrFunc}>Decre -</button>
                    </div>
                </div>
            </div>
        </>)
    }
}

export default Counter



