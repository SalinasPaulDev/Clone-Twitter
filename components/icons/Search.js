import * as React from "react"

const SvgComponent = (props) => (
  <svg height={21} width={21} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g
      fill="none"
      fillRule="evenodd"
      stroke="#0099ff"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx={8.5} cy={8.5} r={5} />
      <path d="M17.571 17.5 12 12" />
    </g>
  </svg>
)

export default SvgComponent
