import React from 'react';
import './Playground.css';
import {connect} from 'react-redux';
import {pointIncrease} from '../../redux/actions';

class Playground extends React.Component {
  constructor() {
    super();
    this.state = {
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
      const colorCube = this.getRgbColorStyle();
      const cubeKey = this.getReactKey(colorCube);
      cubes.push({cubeKey, cube: this.getCube(colorCube, cubeKey)});
    }
    return cubes;
  }

  getReactKey(colorCube) {
    const colorCubeValues = Object.values(colorCube);
    let colorCubeSum = colorCubeValues.reduce((previous, current) => previous + current, 0);
    return (colorCubeSum += this.getRandom(colorCubeSum));
  }

  getPlaygroundSizes(cubeSize = 40) {
    return {
      width: this.playground.current.offsetWidth - cubeSize,
      height: this.playground.current.offsetHeight - cubeSize
    };
  }

  getCube({r, g, b}, cubeKey) {
    const {width, height} = this.getPlaygroundSizes();
    const cubeStyles = {
      left: this.getRandom(width),
      top: this.getRandom(height),
      background: `rgb(${r}, ${g}, ${b})`
    };
    return (
      <div
        key={cubeKey}
        className="cube"
        style={cubeStyles}
        onClick={() => {
          this.onDeleteCube(cubeKey);
          this.generateNewCubes();
          this.scoreСalculation();
        }}
      ></div>
    );
  }
  scoreСalculation() {
    this.props.pointIncrease({points: this.props.points + 1});
  }

  onDeleteCube(cubeKey) {
    this.setState((prevState) => ({
      ...prevState,
      cubes: prevState.cubes.filter((cube) => cube.cubeKey !== cubeKey)
    }));
  }

  getRgbColorStyle() {
    const rgbMax = 255;
    const rgb = {
      r: this.getRandom(rgbMax),
      g: this.getRandom(rgbMax),
      b: this.getRandom(rgbMax)
    };
    return rgb;
  }

  getRandom(value) {
    return Math.floor(Math.random() * value);
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
      <div className="playground" ref={this.playground}>
        {this.props.isGameStarted && this.state.cubes.map((cube) => cube.cube)}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isGameStarted: state.isGameStarted,
    points: state.points
  };
};

const mapDispatchToState = {
  pointIncrease
};

export default connect(mapStateToProps, mapDispatchToState)(Playground);
