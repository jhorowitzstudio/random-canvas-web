import { initialState } from '../constants/defaults';
import {
  TOGGLE_IMAGE_POPUP,
  SET_IMAGE_DIMENSIONS,
  SET_CANVAS_DIMENSIONS,
  TOGGLE_TRIM,
  ADD_TO_FILES,
  REMOVE_FROM_FILES,
  SET_COLOR,
  SAVE_IMAGE
} from '../actions';

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_IMAGE_POPUP:
      return { ...state, imageDimensionsPopup: !state.imageDimensionsPopup };
    case SET_IMAGE_DIMENSIONS:
      return {
        ...state,
        imageHeight: action.payload.height || state.imageHeight,
        imageWidth: action.payload.width || state.imageWidth,
        imageBorder: action.payload.border
      };
    case SET_CANVAS_DIMENSIONS:
      return {
        ...state,
        canvasHeight: action.payload.height || state.canvasHeight,
        canvasWidth: action.payload.width || state.canvasWidth
      };
    case TOGGLE_TRIM:
      return { ...state, [action.payload]: !state[action.payload] };
    case SET_COLOR:
      return { ...state, [action.payload.name]: action.payload.color };
    case SAVE_IMAGE:
      return state;
    case ADD_TO_FILES:
      return { ...state, files: [...state.files, {name: action.payload.name, blob: action.payload.blob}] };
    case REMOVE_FROM_FILES:
      return {
        ...state,
        files: [
          ...state.files.slice(0, action.payload.index),
          ...state.files.slice(action.payload.index + 1)
        ]
      };
    default:
      return state;
  }
}
