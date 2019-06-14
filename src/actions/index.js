export const TOGGLE_IMAGE_POPUP = 'TOGGLE_IMAGE_POPUP';
export const SET_IMAGE_DIMENSIONS = 'SET_IMAGE_DIMENSIONS';
export const SET_CANVAS_DIMENSIONS = 'SET_CANVAS_DIMENSIONS';
export const TOGGLE_TRIM = 'TOGGLE_TRIM';
export const SET_COLOR = 'SET_COLOR';
export const SAVE_IMAGE = 'SAVE_IMAGE';
export const ADD_TO_FILES = 'ADD_TO_FILES';
export const REMOVE_FROM_FILES = 'REMOVE_FROM_FILES';

export const toggleImageDimensionsPopup = () => ({
  type: TOGGLE_IMAGE_POPUP
});

export const setImageDimensions = dimensions => ({
  type: SET_IMAGE_DIMENSIONS,
  payload: dimensions
});

export const setCanvasDimensions = dimensions => ({
  type: SET_CANVAS_DIMENSIONS,
  payload: dimensions
});

export const toggleTrim = name => ({
  type: TOGGLE_TRIM,
  payload: name
});

export const setColor = ({ name, color }) => ({
  type: SET_COLOR,
  payload: { name, color }
});

export const saveImage = () => ({
  type: SAVE_IMAGE
});

export const addToFiles = ({ file: { name, blob } }) => ({
  type: ADD_TO_FILES,
  payload: { name, blob }
});

export const removeFromFiles = ({ index }) => ({
  type: REMOVE_FROM_FILES,
  payload: { index }
});
