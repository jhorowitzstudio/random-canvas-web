/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import xmlserializer from 'xmlserializer';
import imageLayer from '../../../helpers/imageLayer';
import {
  trimCanvasWidth,
  trimCanvasHeight
} from '../../../helpers/canvasSizeCorrector';

export default class extends Component {
  // save = () => {
  //   const { files } = this.props;
  //   const svg = document.getElementById('imagewall');
  //   // eslint-disable-next-line no-undef
  //   const serializer = new XMLSerializer() || xmlserializer;
  //   const svgBlob = new Blob([serializer.serializeToString(svg)], {
  //     type: 'image/svg+xml'
  //   });

  //   const zip = new JSZip(); // create zip
  //   zip.file('canvas.svg', svgBlob, { base64: true }); // create canvas file
  //   const img = zip.folder('images'); // create folder
  //   files.forEach((file, index) => {
  //     img.file(`${file.name} ${index}`, file.blob); // save uploaded images
  //   });

  //   zip.generateAsync({ type: 'blob' }).then(content => {
  //     saveAs(content, 'files.zip');
  //   });
  //   // endzip
  // };

  save = () => {
    const svg = document.getElementById('imagewall');
    // eslint-disable-next-line no-undef
    const serializer = new XMLSerializer() || xmlserializer;
    const svgBlob = new Blob([serializer.serializeToString(svg)], {
      type: 'image/svg+xml'
    });
    const url = URL.createObjectURL(svgBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'imagewall.svg';
    link.innerHTML = 'Click to download';
    function fn() {
      document.getElementById('download-div').innerHTML = '';
    }
    document.body.addEventListener('click', fn, true);
      document.getElementById('download-div').innerHTML = '';
    document.getElementById('download-div').appendChild(link);
  };

  render() {
    const {
      imageHeight,
      imageWidth,
      imageBorder,
      files,
      trimHeight,
      trimWidth,
      borderColor
    } = this.props;
    let { canvasHeight, canvasWidth } = this.props;
    if (trimHeight)
      canvasHeight = trimCanvasHeight(canvasHeight, imageHeight, imageBorder);
    if (trimWidth)
      canvasWidth = trimCanvasWidth(canvasWidth, imageWidth, imageBorder);
    const images = imageLayer({
      canvasHeight,
      canvasWidth,
      imageHeight,
      imageWidth,
      imageBorder,
      numberOfFiles: files.length
    });
    return (
      <div>
        <button type="submit" onClick={this.save}>
          Generate Download Link
        </button>
        <span id="download-div" />
        <div id="stats">
          <p>
            Actual Canvas Dimensions: {canvasWidth} x {canvasHeight} height
          </p>
          <p>
            Image Dimensions: {imageWidth} x {imageHeight} height, with a{' '}
            {imageBorder} border
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
          style={{ backgroundColor: borderColor }}
          height={canvasHeight}
          preserveAspectRatio="xMinYMax meet"
        >
          {images &&
            images.map(({ x, y, fileIndex }) => {
              return (
                <image
                  aria-label="image"
                  className="image"
                  width={imageWidth}
                  height={imageHeight}
                  key={`${x}+${y}`}
                  x={x}
                  y={y}
                  xlinkHref={files.length && files[fileIndex].blob}
                  alt="random"
                />
              );
            })}
        </svg>
      </div>
    );
  }
}
