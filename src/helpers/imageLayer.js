import chroma from 'chroma-js';

export default function imageLayer({
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
}) {
  if (imageWidth > canvasWidth || imageHeight > canvasHeight) return false;
  const coordinates = [];
  const xStart = -imageWidth / 2;
  const yIncrement = Math.round(imageHeight + imageMortar);
  const xIncrement = Math.round(imageWidth + imageMortar);
  const yStartMaximum = canvasHeight - imageHeight;
  const xStartMaximum = canvasWidth;
  let scale;
  switch (colorHueMode) {
    case 'two-point scale':
      scale = chroma.scale([firstColor, secondColor]).mode(colorMode);
      break;
    case 'totally-random RGB':
      scale = () => chroma.random();
      break;
    case 'controlled-random HSL':
      scale = random => {
        const hue = Math.floor(random * 360);
        return chroma.hsl(hue, saturation, lightness);
      };
      break;
    case 'choose color from multiple':
      scale = () => {
        if (colorArray === undefined || colorArray.length === 0) return null;
        return colorArray[Math.floor(Math.random() * colorArray.length)];
      };
      break;
    default:
      break;
  }

  let i = 0;
  for (let y = 0; y <= yStartMaximum; y += yIncrement) {
    for (let x = xStart; x <= xStartMaximum; x += xIncrement) {
      const fill = scale(Math.random());
      if (staggerImages && i % 2 !== 0) {
        coordinates.push({ x, y, fill });
      } else {
        coordinates.push({ x: x + imageWidth / 2, y, fill });
      }
    }
    i += 1;
  }
  return coordinates;
}
