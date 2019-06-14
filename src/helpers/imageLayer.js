export default function imageLayer({
  canvasHeight,
  canvasWidth,
  imageHeight,
  imageWidth,
  imageBorder,
  numberOfFiles
}) {
  if (imageWidth > canvasWidth || imageHeight > canvasHeight) return false;
  const coordinates = [];
  const xStart = -imageWidth / 2;
  const yIncrement = Math.round(imageHeight + imageBorder);
  const xIncrement = Math.round(imageWidth + imageBorder);
  const yStartMaximum = canvasHeight - imageHeight;
  const xStartMaximum = canvasWidth;
  const randomFileIndex = () => Math.floor(Math.random() * numberOfFiles);
  for (let y = 0; y <= yStartMaximum; y += yIncrement) {
    for (let x = xStart; x <= xStartMaximum; x += xIncrement) {
      coordinates.push({
        x: x + imageWidth / 2,
        y,
        fileIndex: randomFileIndex()
      });
    }
  }
  return coordinates;
}
