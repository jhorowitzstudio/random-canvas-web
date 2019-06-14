export const trimCanvasHeight = (canvasDim, imageDim, border) =>
  canvasDim - (canvasDim % (imageDim + border)) - border;

export const trimCanvasWidth = (canvasDim, imageDim, border) =>
  canvasDim - (canvasDim % (imageDim + border)) - border;
