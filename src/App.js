import React from 'react';
import './App.css';

// function Helloworld(props) {
//   return (
//     <div className="hello">
//       <h3>{props.text}</h3>
//       <p>{props.subtitle}</p>
//     </div>
//   )
// }

class Helloworld extends React.Component {

  state = {
    show: true
  }

  toggleShow = () => {
    this.setState({show: !this.state.show})
  }

  render() {
    if (this.state.show) {
      return (
        <div className="hello">
          <h3>{this.props.text}</h3>
          <p>{this.props.subtitle}</p>
          <button onClick={this.toggleShow}>Toggle show</button>
        </div>
      )
    } else {
      return (
        <div className="hello">
          <h1>There are not elements</h1>
          <button onClick={this.toggleShow}>Toggle show</button>
        </div>
      )
    }
  }
}

function App() {
  return (
    <div>
      This is my component:
      <Helloworld text="Hello Fazt" subtitle="Lorem ipsum" />
      <Helloworld text="Second component" subtitle="This is another subtitle" />
      <Helloworld text="Third component" subtitle="Just another subtitle" />
    </div>
  );
}

export default App;
