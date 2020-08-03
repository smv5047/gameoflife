import { useState, useEffect, useRef } from "react";
import setGridConfig from "../utils/setGridConfig";

export const canvasWidth = 800;
export const canvasHeight = 800;

export function useCanvas() {
  const [resolution, setResolution] = useState(10);
  const [currentGen, setCurrentGen] = useState(0);
  const canvasRef = useRef(null);

  const COLS = Math.floor(canvasWidth / resolution);
  const ROWS = Math.floor(canvasHeight / resolution);

  // create array of cells representing canvas height/width/resolution
  const [emptyGrid] = useState(
    new Array(COLS).fill(null).map(() => new Array(ROWS).fill(0))
  );

  const [gridArr, setGridArr] = useState(
    setGridConfig("human", canvasWidth, canvasHeight, resolution)
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // plot grid based on grid array
    function render(grid, context) {
      for (let col = 0; col < grid.length; col++) {
        for (let row = 0; row < grid[col].length; row++) {
          const cell = grid[col][row];

          context.beginPath();
          context.rect(
            col * resolution,
            row * resolution,
            resolution,
            resolution
          );
          if (cell) {
            var randomColor = "blue";
            var color = randomColor;
            context.fillStyle = `${color}`;
          } else {
            context.fillStyle = "black";
          }

          context.fill();
          context.lineWidth = 2;
          context.strokeStyle = "#212529";
          context.stroke();
        }
      }
    }
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);

    render(gridArr, ctx);
  }, [gridArr, resolution, currentGen]);

  return [
    canvasRef,
    canvasWidth,
    canvasHeight,
    resolution,
    setResolution,
    emptyGrid,
    gridArr,
    setGridArr,
    currentGen,
    setCurrentGen,
  ];
}
