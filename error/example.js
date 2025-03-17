function calculator(initial = 0, min = -10, max = 100) {
  function validate(num) {
    if (min <= num && num <= max) {
      return num
    }
    throw new RangeError('values must be between minimum and maximum')
  }

  function add(num) {
    console.log('add')
    return calculator(validate(initial + num))
  }

  function sub(num) {
    console.log('sub')
    return calculator(validate(initial - num))
  }

  function mul(num) {
    console.log('mul')
    return calculator(validate(initial * num))
  }

  function div(num) {
    console.log('div')
    if (num === 0) throw new Error('division by zero is not allowed')
    return calculator(validate(initial / num))
  }

  function get() {
    console.log('get')
    return initial
  }

  return { add, mul, div, sub, get }
}

try {
  const cal = calculator(10).sub(10).add(10).div(0).mul(10).get()
  console.log(cal)
} catch (error) {
  console.log(error.stack)
}
