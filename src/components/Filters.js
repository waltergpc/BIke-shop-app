import React from 'react'
import styled from 'styled-components'
import { useFilterContext } from '../context/filter_context'
import { getUniqueValues, formatPrice } from '../utils/helpers'

const Filters = () => {
  const {
    filters: {
      text,
      category,
      brand,
      size,
      minPrice,
      maxPrice,
      price,
      shipping,
    },
    updateFilters,
    clearFilters,
    allProducts,
  } = useFilterContext()

  const categories = getUniqueValues(allProducts, 'category')
  const brands = getUniqueValues(allProducts, 'brand')
  const sizes = getUniqueValues(allProducts, 'size')

  return (
    <Wrapper>
      <div className="content">
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="form-control">
            <input
              type="text"
              name="text"
              placeholder="search"
              className="search-input"
              value={text}
              onChange={updateFilters}
            />
          </div>
          <div className="form-control">
            <h5>Purpose</h5>
            <div>
              {categories.map((purpose, index) => {
                return (
                  <button
                    type="button"
                    key={index}
                    onClick={updateFilters}
                    name="category"
                    className={category === purpose ? 'active' : null}
                  >
                    {purpose}
                  </button>
                )
              })}
            </div>
          </div>
          <div className="form-control">
            <h5>Brand</h5>
            <select
              name="brand"
              value={brand}
              onChange={updateFilters}
              className="brand"
            >
              {brands.map((b) => {
                return (
                  <option key={b} value={b}>
                    {b}
                  </option>
                )
              })}
            </select>
          </div>
          <div className="form-control">
            <h5>Sizes</h5>
            <div className="sizes">
              {sizes.map((s) => {
                return (
                  <button
                    key={s}
                    name="size"
                    className={size === s ? 'size-btn active' : 'size-btn'}
                    data-size={s}
                    onClick={updateFilters}
                  >
                    {s}
                  </button>
                )
              })}
            </div>
          </div>
          <div className="form-control">
            <h5>Price</h5>
            <p className="price">0 - {formatPrice(price)}</p>
            <input
              type="range"
              name="price"
              onChange={updateFilters}
              min={minPrice}
              max={maxPrice}
              value={price}
            />
          </div>
          <div className="form-control shipping">
            <label htmlFor="shipping">free shipping</label>
            <input
              type="checkbox"
              name="shipping"
              onChange={updateFilters}
              checked={shipping}
            />
          </div>
        </form>
        <button type="button" className="clear-btn" onClick={clearFilters}>
          Clear Filters
        </button>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .form-control {
    margin-bottom: 1.25rem;
    h5 {
      margin-bottom: 0.5rem;
    }
  }
  .search-input {
    padding: 0.5rem;
    width: 90%;
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    letter-spacing: var(--spacing);
    margin-right: 0.5em;
  }
  .search-input::placeholder {
    text-transform: capitalize;
  }

  button {
    display: block;
    margin: 0.5em 0;
    padding: 0.25rem 0;
    text-transform: capitalize;
    background: transparent;
    border: none;
    border-bottom: 1px solid transparent;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-5);
    cursor: pointer;
  }
  .active {
    border-color: var(--clr-grey-5);
  }
  .brand {
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    padding: 0.25rem;
  }
  .sizes {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }
  .size-btn {
    display: inline-block;
    width: fit-content;
    height: 1rem;
    padding: 0.5em;
    border-radius: 5%;
    color: black;
    border: 1px solid var(--clr-grey-5);
    margin-right: 0.5rem;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.5rem;
      color: var(--clr-white);
    }
  }

  .active {
    opacity: 1;
  }

  .price {
    margin-bottom: 0.25rem;
  }
  .shipping {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    text-transform: capitalize;
    column-gap: 0.5rem;
    font-size: 1rem;
  }
  .clear-btn {
    background: var(--clr-red-dark);
    color: var(--clr-white);
    padding: 0.25rem 0.5rem;
    border-radius: var(--radius);
  }
  @media (min-width: 768px) {
    .content {
      position: sticky;
      top: 1rem;
    }
  }
`

export default Filters
