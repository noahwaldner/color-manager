import React from "react";

function DeleteForever(props) {
  const fill = props.fill || "currentColor";
  const secondaryfill = props.secondaryfill || fill;
  const strokewidth = props.strokewidth || 1;
  const width = props.width || "100%";
  const height = props.height || "100%";

  return (
    <svg
      className={props.className}
      height={height}
      width={width}
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        fill={secondaryfill}
        stroke={secondaryfill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokewidth}
      >
        <path
          d="M54,19V56a5,5,0,0,1-5,5H15a5,5,0,0,1-5-5V19"
          fill="none"
          stroke={fill}
        />
        <polyline fill="none" points="22 13 22 3 42 3 42 13" stroke={fill} />
        <line fill="none" stroke={fill} x1="60" x2="4" y1="13" y2="13" />
        <line fill="none" x1="40" x2="24" y1="29.961" y2="45.961" />
        <line fill="none" x1="40" x2="24" y1="45.961" y2="29.961" />
      </g>
    </svg>
  );
}

export default DeleteForever;
