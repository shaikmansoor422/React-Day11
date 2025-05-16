import React from "react"
import Counter from "./Counting/Counter"
import "./App.css"
class App extends React.Component {
  constructor() {
    super()
    this.state = {
      clr: "black"
    }
  }
  bgChange1 = () => {
    this.setState({ clr: "grey" })
  }
  bgChange2 = () => {
    this.setState({ clr: "black" })
  }
  render() {


    return (
      <>
        <div id="page" style={{ backgroundColor: this.state.clr }}>
          <Counter></Counter>

          <div id="bg_buttons">
            <button id="bg_button" onClick={this.bgChange1}>Grey</button>
            <button id="bg_button" onClick={this.bgChange2}>Black</button>
          </div>
        </div>

      </>
    )
  }

}
export default App