// src/components/PriceRangeSlider.js

import React, { useState, useEffect } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "bootstrap/dist/css/bootstrap.min.css";

const PriceRangeSlider = () => {
  const [range, setRange] = useState([0, 100]); // Initial range values
  const [startValue, setStartValue] = useState(range[0]);
  const [endValue, setEndValue] = useState(range[1]);
  const [useInput, setUseInput] = useState(false);

  const handleSliderChange = (newRange) => {
    // if (!useInput) {
    setRange(newRange);
    setStartValue(newRange[0]);
    setEndValue(newRange[1]);
    // }
  };
  const handleStartInputChange = (e) => {
    const newValue = parseInt(e.target.value) || 0;
    setStartValue(newValue);
    setRange([newValue, endValue]);
    setUseInput(true);
  };

  const handleEndInputChange = (e) => {
    const newValue = parseInt(e.target.value) || 0;
    setEndValue(newValue);
    setRange([startValue, newValue]);
    setUseInput(true);
  };

  const handleRadioChange = (e) => {
    // setUseInput(e.target.value === 'input');
    setUseInput(true);
  };

  useEffect(() => {
    // Update the slider when input values change
    setRange([startValue, endValue]);
  }, [startValue, endValue]);

  return (
    <div className="main-container">
      <div className="content d-flex flex-column">
        <div className="mb-3">
          <p className="mb-2">
            Price Ranges: ${range[0]} - ${range[1]}
          </p>
          <Slider
            min={0}
            max={1000}
            range
            value={range}
            onChange={handleSliderChange}
            // disabled={useInput} // Disable the slider if using input
          />
        </div>

        <div className="">
          <input
            type="text"
            value={startValue}
            onChange={handleStartInputChange}
            className="form-control"
            // style={{ width: '45%' }}
            // disabled={!useInput} // Disable input if using slider
          />
          <span className="align-self-center mx-2">-</span>
          <input
            type="text"
            value={endValue}
            onChange={handleEndInputChange}
            className="form-control"
            // style={{ width: '45%' }}?+
            // disabled={!useInput} // Disable input if using slider
          />
        </div>
        {/* <div className="mt-3">
              <label className="mr-3">
                <input
                  type="radio"
                  value="input"
                  checked={!useInput}
                  onChange={handleRadioChange}
                />
                Use Slider
              </label>
              <label>
                <input
                  type="radio"
                  value="input"
                  checked={useInput}
                  onChange={handleRadioChange}
                />
                Use Input
              </label>
            </div> */}
      </div>
    </div>
  );
};

export default PriceRangeSlider;
