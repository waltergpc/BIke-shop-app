export const formatPrice = (num) => {
  const formatted = Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(num / 100)
  return formatted
}

export const getUniqueValues = (arr, key) => {
  let unique = arr.map((item) => item[key])
  if (key === 'size') {
    unique = unique.flat()
  }
  return ['all', ...new Set(unique)]
}
