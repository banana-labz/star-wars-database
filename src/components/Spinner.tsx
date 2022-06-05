import React from "react"

const basicStyle = {
  "@keyframes spin": {
    "0%": {
      transform: "rotate(0deg)",
    },
    "100%": {
      transform: "rotate(360deg)",
    },
  },
  border: "8px solid #323232",
  borderTop: "8px solid #FFBB00",
  borderRight: "8px solid #FFBB00",
  borderLeft: "8px solid #FFBB00",
  borderRadius: "50%",
  animation: "spin 1.5s linear infinite",
}

export type SpinnerProps = {
  width?: number
  height?: number
  className?: React.HTMLAttributes<HTMLDivElement>["className"]
}

const Spinner = ({
  width = 64,
  height = 64,
  className,
}: SpinnerProps) => {
  const style = {
    ...basicStyle,
    width: `${width}px`,
    height: `${height}px`,
  }

  return (
    <i style={style} className={className} />
  )
}

export default Spinner