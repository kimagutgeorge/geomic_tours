import React from "react";

interface CurvedArrowProps {
  class_name?: string;
}
const CurvedArrow = ({ class_name }: CurvedArrowProps) => {
  return (
    <>
      <svg
        className={class_name}
        viewBox="0 0 22.19 14.87"
        fill="none"
        stroke-width="1"
        stroke-miterlimit="1.5"
      >
        <g transform="translate(-10.87,-11.18)">
          <path
            className={class_name}
            d="M18.61,-33.05a9.86,9.86 0 0 1-7.30,9.52"
            transform="rotate(90)"
          />
          <path
            className={class_name}
            d="M-18.61,-33.05a9.86,9.86 0 0 1-7.30,9.52"
            transform="matrix(0,-1,-1,0,0,0)"
          />
          <rect
            className={class_name}
            x="11.37"
            y="18.61"
            width="21.19"
            height="0.0015"
          />
        </g>
      </svg>
    </>
  );
};
export default CurvedArrow;
