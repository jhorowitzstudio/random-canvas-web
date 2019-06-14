import chroma from 'chroma-js';

export default function brickLayer({
  staggerBricks,
  canvasHeight,
  canvasWidth,
  brickHeight,
  brickWidth,
  brickMortar,
  firstColor,
  secondColor,
  colorArray,
  saturation,
  lightness,
  colorHueMode,
  colorMode
}) {
  if (brickWidth > canvasWidth || brickHeight > canvasHeight) return false;
  const coordinates = [];
  const xStart = -brickWidth / 2;
  const yIncrement = Math.round(brickHeight + brickMortar);
  const xIncrement = Math.round(brickWidth + brickMortar);
  const yStartMaximum = canvasHeight - brickHeight;
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
      if (staggerBricks && i % 2 !== 0) {
        coordinates.push({ x, y, fill });
      } else {
        coordinates.push({ x: x + brickWidth / 2, y, fill });
      }
    }
    i += 1;
  }
  return coordinates;
}
