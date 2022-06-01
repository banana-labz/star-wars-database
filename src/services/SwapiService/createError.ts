const createError = (url: string, status: number) => new Error(
  `Could not fetch ${url}, received ${status}`
)

export default createError