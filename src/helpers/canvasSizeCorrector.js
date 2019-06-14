export const trimCanvasHeight = (canvasDim, imageDim, mortar) =>
  canvasDim - (canvasDim % (imageDim + mortar)) - mortar;

export const trimCanvasWidth = (canvasDim, imageDim, mortar) =>
  canvasDim - (canvasDim % (imageDim + mortar)) - mortar;
