import React from 'react'
import styled from 'styled-components'
import { PageHero, StripeCheckout } from '../components'
// extra imports
import { useCartContext } from '../context/cart_context'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'

const CheckoutPage = () => {
  let navigate = useNavigate()
  const { user } = useAuth0()
  const { cart } = useCartContext()

  if (!user) {
    navigate('/')
  }
  return (
    <main>
      <PageHero title='checkout' />
      <Wrapper className='page'>
        {cart.length < 1 ? (
          <div className='empty'>
            <h2>Your cart is empty</h2>
            <Link to='/products' className='btn'>
              Back to all bikes
            </Link>
          </div>
        ) : (
          <StripeCheckout />
        )}
      </Wrapper>
    </main>
  )
}
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  .empty {
    text-align: center;
  }
`

export default CheckoutPage
