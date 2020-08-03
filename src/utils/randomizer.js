export default function Randomizer(
  value,
  canvasWidth,
  canvasHeight,
  resolution
) {
  const COLS = Math.floor(canvasWidth / resolution);
  const ROWS = Math.floor(canvasHeight / resolution);
  let newGrid = new Array(COLS).fill(null).map(() => new Array(ROWS).fill(0));
  let WIDTH = 0;
  let HEIGHT = 0;
  let offsetX = 0;
  let offsetY = 0;

  newGrid = new Array(COLS)
    .fill(null)
    .map(() =>
      new Array(ROWS).fill(null).map(() => Math.floor(Math.random() * 2))
    );

  return newGrid;
}
