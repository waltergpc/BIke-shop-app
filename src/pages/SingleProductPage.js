import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useProductsContext } from '../context/products_context'
import { products_url as url } from '../utils/constants'
import { formatPrice } from '../utils/helpers'
import {
  Loading,
  Error,
  ProductImages,
  AddToCart,
  Stars,
  PageHero,
} from '../components'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const SingleProductPage = () => {
  const { id } = useParams()
  let navigate = useNavigate()
  const {
    singleProductLoading: loading,
    singleProductError: error,
    singleProduct,
    fetchSingleProduct,
  } = useProductsContext()

  useEffect(() => {
    fetchSingleProduct(`${url}/${id}`)
    console.log(singleProduct)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        navigate('/')
      }, 3000)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error])

  if (loading) {
    return <Loading />
  }

  if (error) {
    return <Error />
  }

  return <h4>{singleProduct.name}</h4>
}

const Wrapper = styled.main`
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .price {
    color: var(--clr-primary-5);
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }

  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
`

export default SingleProductPage
