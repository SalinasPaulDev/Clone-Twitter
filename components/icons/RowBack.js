import * as React from "react"

const SvgComponent = (props) => (
  <svg height={21} width={21} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g
      fill="none"
      fillRule="evenodd"
      stroke="#0099ff"
      strokeLinecap="round"
      strokeLinejoin="round"
      transform="translate(3 15)"
    >
      <circle cx={8.5} cy={8.5} r={8} />
      <path d="m7.5 11.5-3-3 3-3M12.5 8.5h-8" />
    </g>
  </svg>
)

export default SvgComponent
