export const formatPrice = (num) => {
  const formatted = Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(num / 100)
  return formatted
}

export const getUniqueValues = () => {}
