import brickDimensions from './brickDimensions';

export const colorModes = {
  rgb: '',
  lab: '',
  lrgb: '',
  hsl: '',
  lch: ''
};

export const colorHueModes = {
  'two-point scale': '',
  'totally-random RGB': '',
  'controlled-random HSL': '',
  'choose color from multiple': ''
};

export const initialState = {
  staggerBricks: true,
  brickHeight: brickDimensions.Standard.height,
  brickWidth: brickDimensions.Standard.width,
  brickMortar: brickDimensions.Standard.mortar,
  canvasHeight: 800,
  canvasWidth: 1000,
  lineThickness: 1,
  brickDimensionsPopup: false,
  canvasDimensionsPopup: false,
  firstColor: '#000000',
  secondColor: '#FFFFFF',
  mortarColor: '#FFFFFF',
  colorArray: [],
  saturation: 0.8,
  lightness: 0.75,
  colorHueMode: 'two-point scale',
  colorMode: 'rgb',
  trimHeight: true,
  trimWidth: true
};
