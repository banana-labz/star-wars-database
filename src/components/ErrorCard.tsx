import React from "react"

import deathStar from "assets/images/death-star.png"

type ErrorCardProps = {
  error: React.ErrorInfo
}

const ErrorCard = ({ error }: ErrorCardProps) => (
  <div className="flex flex-col justify-center items-center gap-10 p-12">
    <img
      src={deathStar}
      className="m-auto"
      height={64}
      width={64}
    />
    <p className="w-1/2 text-center">{error.componentStack}</p>
  </div>
)

export default ErrorCard
