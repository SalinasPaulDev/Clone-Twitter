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
      <path d="M10 4.5H5.5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V11" />
      <path d="M17.5 3.467a1.462 1.462 0 0 1-.017 2.05L10.5 12.5l-3 1 1-3 6.987-7.046a1.409 1.409 0 0 1 1.885-.104zM15.5 5.5l.953 1" />
    </g>
  </svg>
)

export default SvgComponent