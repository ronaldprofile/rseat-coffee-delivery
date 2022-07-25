export function formatPrice(value: number) {
  return value.toLocaleString("pt-br", {
    minimumFractionDigits: 2 
  })
}