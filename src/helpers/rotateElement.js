// TODO: comment the code to explain the calcul
export default function({ offsetX, offsetY, width, height, rotationValue }) {
  const middleX = height / 2;
  const middleY = width / 2;

  const x = (offsetY * 100) / middleX / 10 - 10;
  const y = (offsetX * 100) / middleY / -10 + 10;

  console.log('x: ', (x / 10) * rotationValue);

  return { x, y };
}
