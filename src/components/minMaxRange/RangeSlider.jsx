import React from "react";
import "./RangeSlider.css";
import { intToString } from "./../utils";
export const RangeSlider = ({
  min,
  max,
  title,
  sliderKey,
  filterValue,
  setFilterValue,
}) => {
  const [minValue, setMinValue] = React.useState(
    filterValue ? filterValue[sliderKey].min : min
  );
  const [maxValue, setMaxValue] = React.useState(
    filterValue ? filterValue[sliderKey].max : max
  );

  React.useEffect(() => {
    if (filterValue) {
      setMinValue(filterValue[sliderKey].vmin);
      setMaxValue(filterValue[sliderKey].vmax);
    }
  }, [filterValue]);

  const handleMinChange = (e) => {
    e.preventDefault();
    const newMinVal = Math.min(+e.target.value, maxValue);
    if (!filterValue) setMinValue(newMinVal);
    setFilterValue({
      ...filterValue,
      [sliderKey]: {
        ...filterValue[sliderKey],
        vmin: newMinVal,
        vmax: maxValue,
      },
    });
    console.log(filterValue);
  };

  const handleMaxChange = (e) => {
    e.preventDefault();
    const newMaxVal = Math.max(+e.target.value, minValue);
    if (!filterValue) setMaxValue(newMaxVal);
    setFilterValue({
      ...filterValue,
      [sliderKey]: {
        ...filterValue[sliderKey],
        vmin: minValue,
        vmax: newMaxVal,
      },
    });
    console.log(newMaxVal);
  };

  const minPos = ((minValue - min) / (max - min)) * 100;
  const maxPos = ((maxValue - min) / (max - min)) * 100;

  return (
    <div className="main-slider">
      <div>{title}</div>
      <div className="slider-wrapper">
        <div className="input-wrapper">
          <input
            className="input"
            type="range"
            value={minValue}
            min={min}
            max={max}
            onChange={handleMinChange}
          />
          <input
            className="input"
            type="range"
            value={maxValue}
            min={min}
            max={max}
            onChange={handleMaxChange}
          />
        </div>

        <div className="control-wrapper">
          <div className="control" style={{ left: `${minPos}%` }} />
          <div className="rail">
            <div
              className="inner-rail"
              style={{ left: `${minPos}%`, right: `${100 - maxPos}%` }}
            />
          </div>
          <div className="control" style={{ left: `${maxPos}%` }} />
        </div>
      </div>
      <div className="min-max-cover">
        <span>{intToString(filterValue[sliderKey].vmin)}</span>
        <span>{intToString(filterValue[sliderKey].vmax)}</span>
      </div>
    </div>
  );
};
