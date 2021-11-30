import React from 'react'
import styled from 'styled-components'
const PageHero = ({ title, product }) => {
  return (
    <Wrapper>
      <div className='section-center'>
        {product ? <h3>{product}</h3> : <h3>{title}</h3>}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background: var(--clr-black);
  width: 100%;
  min-height: 15vh;
  display: flex;
  align-items: center;

  color: var(--clr-primary-7);
  a {
    color: var(--clr-primary-3);
    padding: 0.5rem;
    transition: var(--transition);
  }
  a:hover {
    color: var(--clr-primary-1);
  }
`

export default PageHero
