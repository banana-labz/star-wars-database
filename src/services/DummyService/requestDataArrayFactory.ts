const DELAY = 1337

const requestDataArrayFactory = <T>(arr: T[]) => () => (
  new Promise<T[]>((resolve, reject) => {
    setTimeout(() => {
      resolve(arr)
    }, DELAY * Math.random())
  })
)

export default requestDataArrayFactory
