const cache = new Map<string, Promise<number[]>>()

export const NUMBER_SIZE = 100_000

function factorial(n: number): number {
  let result = 1
  for (let i = 1; i <= n; i++) {
    result *= i
  }
  return result
}

function generateFactorialSeries(value: number, size: number): number[] {
  const result: number[] = []
  for (let i = 0; i < size; i++) {
    result.push(factorial(value + i))
  }
  return result
}

export function fetchData(query: string): Promise<number[]> {
  const value = Math.max(Number(query), 1)

  if (cache.has(query)) {
    return cache.get(query)!
  }

  const promise = new Promise<number[]>((resolve) => {
    resolve(generateFactorialSeries(value, NUMBER_SIZE))
  })

  cache.set(query, promise)
  return promise
}
