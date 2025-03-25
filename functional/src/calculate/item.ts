type Obj<T> = { [key: string]: T }
type Item<T> = T & { id: string }

export function add_item<T>(cart: Obj<T>, item: Item<T>): Obj<T> {
  const copy = structuredClone(cart)
  if (!Object.hasOwn(copy, item.id)) {
    copy[item.id] = item
  }
  return copy
}

export function has_item<T>(cart: Obj<T>, item: Item<T>): boolean {
  return Object.hasOwn(cart, item.id)
}

export function remove_item<T>(cart: Obj<T>, item: Item<T>): Obj<T> {
  const copy = structuredClone(cart)
  if (Object.hasOwn(copy, item.id)) {
    delete copy[item.id]
  }
  return copy
}
