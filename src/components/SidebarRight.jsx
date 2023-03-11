import React from "react";
import { RangeSlider } from "./minMaxRange/RangeSlider";

export const SidebarRight = ({ filterValue, setFilterValue }) => {
  return (
    <aside className="fixed top-0 right-0 w-64 text-left bg-teal-100 px-4 pt-16 h-screen z-40 ">
      {Object.keys(filterValue).map((slider, index) => {
        return (
          <RangeSlider
            key={index}
            title={filterValue[slider].title}
            min={filterValue[slider].min}
            max={filterValue[slider].max}
            sliderKey={slider}
            filterValue={filterValue}
            setFilterValue={setFilterValue}
          />
        );
      })}
    </aside>
  );
};
