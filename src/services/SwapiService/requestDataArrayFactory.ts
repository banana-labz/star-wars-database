import createError from "./createError"

const requestDataArrayFactory = <From, To>(url: string, convertData: (data: From) => To) => (
  () => (
    fetch(url).then(response => {
      if (!response.ok) {
        throw createError(url, response.status)
      }
      return response.json()
    }).then<To[]>(json => json.results.map(convertData))
  )
)

export default requestDataArrayFactory
