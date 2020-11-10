import React from 'react';
import './Main.css';

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      start: false,
      cubes: []
    };

    this.playground = React.createRef();
  }

  componentDidMount() {
    this.setState((prevState) => ({...prevState, cubes: this.initCubes()}));
  }

  initCubes(amountCubes = 10) {
    let cubes = [];
    for (let i = 0; i < amountCubes; i++) {
      cubes.push(this.getCube(i));
    }
    return cubes;
  }

  getPlaygroundSizes(cubeSize = 40) {
    return {
      width: this.playground.current.offsetWidth - cubeSize,
      height: this.playground.current.offsetHeight - cubeSize
    };
  }

  getCube(index) {
    const {width, height} = this.getPlaygroundSizes();
    const cubeStyles = {
      left: Math.random() * width,
      top: Math.random() * height
    };
    return <div key={index} className="cube" style={cubeStyles}></div>;
  }

  render() {
    return (
      <div className="main">
        <div className="main__playground" ref={this.playground} onClick={(e) => console.log(e.target.className)}>
          {this.state.cubes}
        </div>
        <div className="main__results">
          <h2>Result</h2>
          <h2>Table</h2>
        </div>
      </div>
    );
  }
}

export default Main;
