function first() {
  second()
}

function second() {
  third()
}

function third() {
  errorFunction()
}

function errorFunction() {
  const error = new Error('exception')
  throw error
}

try {
  first()
} catch (error) {
  if (error instanceof Error) {
    console.error(error.stack)
  } else {
    throw error
  }
}
