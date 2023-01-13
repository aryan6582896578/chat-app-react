import React from "react";
// function App(props) {
//   return (
//     <>
//       <div className="navbar">
//         <nav>
//           <h1>The time is {props.date.toLocaleTimeString()}</h1>
//         </nav>
//       </div>
//     </>
//   );
// }
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  tick() {
    this.setState({ date: new Date() });
  }
  render() {
    return (
      <>
        <div className="navbar">
          <nav>
            <h1>The time is {this.state.date.toLocaleTimeString()}</h1>
          </nav>
        </div>
      </>
    );
  }
}

export default Clock;
