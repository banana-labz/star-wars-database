import createError from "./createError"

const requestDataArrayFactory = <From, To>(url: string, convertData: (data: From) => To) => (
  () => {
    const resultURL = `${process.env.REACT_APP_API_URL}/${url}`
    return (
      fetch(resultURL).then(response => {
        if (!response.ok) {
          throw createError(resultURL, response.status)
        }
        return response.json()
      }).then<To[]>(json => json.results.map(convertData))
    )
  }
)

export default requestDataArrayFactory
