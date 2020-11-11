import React from 'react';
import {connect} from 'react-redux';
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
    const cubes = this.generateCubes();
    this.setState((prevState) => ({...prevState, cubes}));
  }

  generateCubes(amountCubes = 6) {
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
    return (
      <div
        key={color}
        className="cube"
        style={cubeStyles}
        onClick={() => {
          this.onDeleteCube(color);
          this.generateNewCubes();
        }}
      ></div>
    );
  }

  onDeleteCube(color) {
    this.setState((prevState) => ({...prevState, cubes: prevState.cubes.filter((cube) => cube.colorCube !== color)}));
  }

  getColorStyle() {
    const sixDigitNumber = 1000000;
    return this.getRandom(sixDigitNumber);
  }

  getRandom(value) {
    return Math.round(Math.random() * value);
  }

  getAmountNewCubes(minCubes = 1, maxCubes = 3) {
    return Math.floor(Math.random() * maxCubes + minCubes);
  }

  generateNewCubes() {
    const amountCubes = this.state.cubes.length;
    const isEnoughCubes = amountCubes > 3;
    if (isEnoughCubes) {
      return;
    }

    const amountNewCubes = this.getAmountNewCubes(1, 3);

    const newCubes = this.generateCubes(amountNewCubes);
    this.setState((prevState) => ({...prevState, cubes: newCubes.concat(prevState.cubes)}));
  }

  render() {
    return (
      <div className="main">
        <div className="main__playground" ref={this.playground}>
          {this.props.isGameStarted && this.state.cubes.map((cube) => cube.cube)}
        </div>
        <div className="main__results">
          <h2>Result</h2>
          <h2>Table</h2>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    ...state
  };
};

export default connect(mapStateToProps, null)(Main);
