import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
const ErrorPage = () => {
  return (
    <Wrapper className="page-100">
      <section>
        <h3>404 Page not found</h3>
        <Link className="btn" to="/">
          Back home
        </Link>
      </section>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  background: var(--clr-primary-10);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  h3 {
    text-transform: none;
    margin-bottom: 2rem;
  }
`

export default ErrorPage
