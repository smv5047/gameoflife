import React, { useEffect, useState, useRef } from "react";
import "../App.css";

function Grid() {
  //   let ctx = canvas.getContext("2d");
  //array of
  const [locations, setLocations] = useState([]);
  //use to track state if game is running
  const [isLive, setIsLive] = useState(false);
  //used to track gridsize
  const [gridSize, setGridSize] = useState(250);
  //Generations
  const [generations, setGenerations] = useState(1);

  const canvasRef = useRef(null);

  //Helper Functions//
  function handleClear() {
    setLocations([]);
  }

  function handlePlay() {
    setIsLive(true);
  }

  function handleStop() {
    setIsLive(false);
  }

  function handleGridSize(size) {
    setGridSize(size);
  }

  function handleChange(e) {
    setGridSize(e.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
  }

  //Setting Grid
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.beginPath();
    for (let i = 0; i < gridSize; i = i + 10) {
      for (let j = 0; j < gridSize; j = j + 10) {
        ctx.rect(i, j, 10, 10);
        ctx.stroke();
      }
    }

    ctx.fillRect(10, 10, 10, 10);
    // ctx.clearRect(0, 0, 10, 10);
    // locations.forEach((location) => draw(ctx, location));
  }, [gridSize]);

  return (
    <div>
      <h2>Generation: {generations}</h2>
      <canvas
        ref={canvasRef}
        width={gridSize}
        height={gridSize}
        // onClick={handleCanvasClick}
      />
      <form onSubmit={handleSubmit}>
        <label for="gridsize">
          <span className="nes-text is-primary">Board Size: </span>{" "}
        </label>
        <div className="nes-select">
          <select name="gridsize" onChange={(e) => handleChange(e)}>
            <option value="250">25x25</option>
            <option value="500">50x50</option>
            <option value="750">75x75</option>
            <option value="1000">100x100</option>
          </select>
        </div>
        {/* <input type="submit" value="Submit" /> */}
      </form>
      <button
        type="button"
        className="nes-btn is-success"
        // onClick={handleStart}
      >
        START
      </button>
      <button
        type="button"
        className="nes-btn is-error"
        // onClick={handleStop}
      >
        STOP
      </button>
      <button
        type="button"
        className="nes-btn is-primary"
        onClick={handleClear}
      >
        CLEAR
      </button>
    </div>
  );
}

export default Grid;
