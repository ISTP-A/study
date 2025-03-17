const error = Error('error')
console.log(error)

const evalError = EvalError('eval error')
console.log(evalError)

const rangeError = RangeError('range error')
console.log(rangeError)

const syntaxError = SyntaxError('syntax error')
console.log(syntaxError)

const refrenceError = ReferenceError('refrence error')
console.log(refrenceError)

const typeError = TypeError('type error')
console.log(typeError)

const urlError = URIError('url error')
console.log(urlError)

const aggregateError = AggregateError(
  [
    error,
    evalError,
    rangeError,
    syntaxError,
    refrenceError,
    typeError,
    urlError,
  ],
  'aggregateError error'
)
console.log(aggregateError)
