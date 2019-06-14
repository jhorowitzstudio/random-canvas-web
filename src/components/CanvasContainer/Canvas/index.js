/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import imageLayer from '../../../helpers/imageLayer';
import {
  trimCanvasWidth,
  trimCanvasHeight
} from '../../../helpers/canvasSizeCorrector';

export default class extends Component {
  render() {
    const {
      imageHeight,
      imageWidth,
      imageMortar,
      trimHeight,
      trimWidth,
      firstColor,
      saturation,
      colorArray,
      lightness,
      secondColor,
      colorMode,
      colorHueMode,
      mortarColor,
      staggerImages,
      save
    } = this.props;
    let { canvasHeight, canvasWidth } = this.props;
    if (trimHeight)
      canvasHeight = trimCanvasHeight(canvasHeight, imageHeight, imageMortar);
    if (trimWidth)
      canvasWidth = trimCanvasWidth(canvasWidth, imageWidth, imageMortar);
    const images = imageLayer({
      staggerImages,
      canvasHeight,
      canvasWidth,
      imageHeight,
      imageWidth,
      imageMortar,
      firstColor,
      secondColor,
      colorArray,
      saturation,
      lightness,
      colorHueMode,
      colorMode
    });
    return (
      <div>
        <button type="submit" onClick={save}>
          Generate Download Link
        </button>
        <span id="download-div" />
        <div id="stats">
          <p>
            Actual Canvas Dimensions: {canvasWidth} x {canvasHeight} height
          </p>
          <p>
            Image Dimensions: {imageWidth} x {imageHeight} height, with a{' '}
            {imageMortar} mortar
          </p>
          <button
            style={{ marginBottom: 30 }}
            type="submit"
            onClick={() => this.setState({ _: Math.random() })}
          >
            Refresh
          </button>
        </div>
        <svg
          id="imagewall"
          width={canvasWidth}
          style={{ backgroundColor: mortarColor }}
          height={canvasHeight}
          preserveAspectRatio="xMinYMax meet"
        >
          {images &&
            images.map(({ x, y, fill }) => (
              <rect
                className="image"
                width={imageWidth}
                height={imageHeight}
                key={`${x}+${y}`}
                x={x}
                y={y}
                fill={fill}
              />
            ))}
        </svg>
      </div>
    );
  }
}
