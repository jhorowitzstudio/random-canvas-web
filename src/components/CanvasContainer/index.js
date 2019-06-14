import React from 'react';
import { connect } from 'react-redux';
import Canvas from './Canvas';


const ColorPickersContainer = props => (
  <div>
    <h2>Canvas</h2>
    <Canvas {...props} />
  </div>
);

const mapStateToProps = ({
  files,
  canvasHeight,
  canvasWidth,
  imageHeight,
  imageWidth,
  imageBorder,
  trimHeight,
  trimWidth,
  borderColor
}) => ({
  files,
  canvasHeight,
  canvasWidth,
  imageHeight,
  imageWidth,
  imageBorder,
  trimHeight,
  trimWidth,
  borderColor
});

export default connect(mapStateToProps)(ColorPickersContainer);
