class CustomError extends Error {
  constructor(name, status, ...params) {
    super(...params)

    // if (Error.captureStackTrace) {
    //   Error.captureStackTrace(this, CustomError)
    // }

    this.name = name
    this.status = status
    this.date = new Date()
  }
}

try {
  throw new CustomError('BAD REQUEST', 400, 'hello world!')
} catch (error) {
  console.log(
    `[${error.date.toISOString()}:${error.status}:${error.name}]`,
    error.message
  )

  console.log(error)
}
