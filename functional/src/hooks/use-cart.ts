import { useState } from 'react'
import { add_item, has_item, remove_item } from '../calculate/item'
import { calculate_supply_price, calculate_tax_price } from '../calculate/tax'

type Cart<T> = { [key: string]: T }

export const useCart = <T extends { id: string }>(initialState?: Cart<T>) => {
  const [cart, setCart] = useState<Cart<T>>(initialState ?? {})

  const addItem = (item: T) => {
    setCart((prev) => add_item(prev, item))
  }

  const hasItem = (item: T) => {
    return has_item(cart, item)
  }

  const removeItem = (item: T) => {
    setCart((prev) => remove_item<T>(prev, item))
  }

  const getItemList = () => {
    return Object.entries(cart).map(([key, value]) => ({ key, item: value }))
  }

  const getTotalPrice = (key: keyof T) => {
    return Object.values(cart).reduce(
      (prev, cur) => prev + (cur[key] as number),
      0
    )
  }

  const getTaxInfo = (price: number, per: number) => {
    const supplyPrice = calculate_supply_price(price, per)
    const tax = calculate_tax_price(supplyPrice, per)
    return { supplyPrice, tax }
  }

  return {
    addItem,
    hasItem,
    removeItem,
    getItemList,
    getTotalPrice,
    getTaxInfo,
  }
}
