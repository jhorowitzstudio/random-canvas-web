import { initialState } from '../constants/defaults';
import {
  TOGGLE_STAGGER_BRICKS,
  TOGGLE_BRICK_POPUP,
  TOGGLE_CANVAS_POPUP,
  SET_BRICK_DIMENSIONS,
  SET_CANVAS_DIMENSIONS,
  TOGGLE_TRIM,
  SET_COLOR,
  SET_COLOR_MODE,
  SAVE_IMAGE,
  SET_COLOR_HUE_MODE,
  SET_HSL,
  ADD_TO_COLOR_ARRAY,
  REMOVE_FROM_COLOR_ARRAY,
  EDIT_COLOR_IN_ARRAY
} from '../actions';

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_STAGGER_BRICKS:
      return { ...state, staggerBricks: !state.staggerBricks };
    case TOGGLE_BRICK_POPUP:
      return { ...state, brickDimensionsPopup: !state.brickDimensionsPopup };
    case TOGGLE_CANVAS_POPUP:
      return { ...state, canvasDimensionsPopup: !state.canvasDimensionsPopup };
    case SET_BRICK_DIMENSIONS:
      return {
        ...state,
        brickHeight: action.payload.height || state.brickHeight,
        brickWidth: action.payload.width || state.brickWidth,
        brickMortar: action.payload.mortar
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
    case SET_HSL:
      return { ...state, [action.payload.name]: action.payload.value };
    case SET_COLOR_MODE:
      return { ...state, colorMode: action.payload };
    case SET_COLOR_HUE_MODE:
      return { ...state, colorHueMode: action.payload };
    case SAVE_IMAGE:
      return state;
    case ADD_TO_COLOR_ARRAY:
      return { ...state, colorArray: [...state.colorArray, action.payload] };
    case REMOVE_FROM_COLOR_ARRAY:
      return {
        ...state,
        message: action.payload,
        colorArray: [
          ...state.colorArray.slice(0, action.payload.index),
          ...state.colorArray.slice(action.payload.index + 1)
        ]
      };
    case EDIT_COLOR_IN_ARRAY:
      return {
        ...state,
        colorArray: [
          ...state.colorArray.slice(0, action.payload.index),
          action.payload.color,
          ...state.colorArray.slice(action.payload.index + 1)
        ]
      };
    default:
      return state;
  }
}
