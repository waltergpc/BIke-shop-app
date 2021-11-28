import React from 'react'
import { useFilterContext } from '../context/filter_context'
import GridView from './GridView'
import ListView from './ListView'

const ProductList = () => {
  const { filteredProducts } = useFilterContext()
  return <GridView products={filteredProducts}></GridView>
}

export default ProductList
