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
    const cubes = this.initCubes();
    this.setState((prevState) => ({...prevState, cubes}));
  }

  initCubes(amountCubes = 6) {
    let cubes = [];
    for (let i = 0; i < amountCubes; i++) {
      const colorCube = this.getColorStyle();

      cubes.push({colorCube, cube: this.getCube(colorCube)});
    }
    return cubes;
  }

  getPlaygroundSizes(cubeSize = 40) {
    return {
      width: this.playground.current.offsetWidth - cubeSize,
      height: this.playground.current.offsetHeight - cubeSize
    };
  }

  getCube(color) {
    const {width, height} = this.getPlaygroundSizes();
    const cubeStyles = {
      left: this.getRandom(width),
      top: this.getRandom(height),
      backgroundColor: `#${color}`
    };
    return <div key={color} className="cube" style={cubeStyles} onClick={() => this.onDeleteCube(color)}></div>;
  }

  onDeleteCube(color) {
    this.setState((prevState) => ({...prevState, cubes: prevState.cubes.filter((cube) => cube.colorCube !== color)}));
  }

  getColorStyle() {
    return this.getRandom(1000000);
  }

  getRandom(value) {
    return Math.round(Math.random() * value);
  }

  render() {
    return (
      <div className="main">
        <div className="main__playground" ref={this.playground}>
          {this.state.cubes.map((cube) => cube.cube)}
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
