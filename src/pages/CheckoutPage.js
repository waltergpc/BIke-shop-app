import React from 'react'
import styled from 'styled-components'
import { PageHero, StripeCheckout } from '../components'
// extra imports
import { useCartContext } from '../context/cart_context'
import { Link, useNavigate } from 'react-router-dom'
import { useUserContext } from '../context/user_context'
import { useAuth0 } from '@auth0/auth0-react'

const CheckoutPage = () => {
  let navigate = useNavigate()
  const { user } = useAuth0()

  if (!user) {
    navigate('/')
  }
  return (
    <Wrapper className='page'>
      <PageHero title='checkout' />
    </Wrapper>
  )
}
const Wrapper = styled.div``
export default CheckoutPage
