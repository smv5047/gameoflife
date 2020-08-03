import React from "react";
import "nes.css/css/nes.min.css";

function ControlPanel(props) {
  //   const [dropdownOpen, setOpen] = useState(false);

  return (
    <div className="flex">
      <div className="flex-half">
        <button
          type="button"
          className="nes-btn is-primary"
          onClick={props.handleNext}
        >
          <i className="material-icons">Next Generation</i>
        </button>
        {props.isRunning ? (
          <button
            type="button"
            className="nes-btn is-error"
            onClick={props.handleStop}
          >
            <i className="material-icons">Stop</i>
          </button>
        ) : (
          <button
            type="button"
            class="nes-btn is-success"
            onClick={props.handleStart}
          >
            <i className="material-icons">Play</i>
          </button>
        )}
        <button className="nes-btn" href="#" onClick={props.handleClear}>
          Clear
        </button>
        <button
          className="nes-btn"
          href="#"
          onClick={() => props.handleConfig("random")}
        >
          Randomize
        </button>
        {/* <select onClick={props.handleConfig}>
          <option value="human">Human</option>
          <option value="beehive">Beehive</option>
          <option value="beacon">Beacon</option>

          <option value="random">Random</option>
        </select> */}
      </div>
      <div className="slider flex">
        <label htmlFor="size">Grid Slider</label>
        <input
          type="range"
          step="10"
          id="size"
          min="10"
          max="50"
          onChange={props.handleSize}
        />
      </div>
      {/* <div className="slider reversed flex">
        <label htmlFor="speed">speed</label>
        <nput
          type="range"
          step="10"
          id="size"
          min="10"
          max="1000"
          onChange={props.handleSpeed}
        />
      </div> */}
    </div>
  );
}

export default ControlPanel;
