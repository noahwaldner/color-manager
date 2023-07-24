import React from "react";

function Settings(props) {
  const fill = props.fill || "currentColor";
  const secondaryfill = props.secondaryfill || fill;
  const width = props.width || "100%";
  const height = props.height || "100%";

  return (
    <svg
      className={props.className}
      height={height}
      width={width}
      viewBox="0 0 12 12"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill={secondaryfill} stroke={secondaryfill} strokeWidth="1">
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          x1="2.5"
          x2="2.5"
          y1="11.5"
          y2="9.5"
        />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          x1="2.5"
          x2="2.5"
          y1="3.5"
          y2="0.5"
        />
        <line
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          x1="9.5"
          x2="9.5"
          y1="0.5"
          y2="2.5"
        />
        <line
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          x1="9.5"
          x2="9.5"
          y1="8.5"
          y2="11.5"
        />
        <circle
          cx="2.5"
          cy="7.5"
          fill="none"
          r="2"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle
          cx="9.5"
          cy="4.5"
          fill="none"
          r="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}

export default Settings;
