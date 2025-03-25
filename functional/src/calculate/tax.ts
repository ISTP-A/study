export function calculate_tax_price(supply_price: number, per: number) {
  return Math.round(supply_price * (per / 100))
}

export function calculate_supply_price(price: number, per: number) {
  return Math.round(price / (1 + per / 100))
}
