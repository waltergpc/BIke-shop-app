import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import heroBcg from '../assets/bike-about.jpeg'
import heroBcg2 from '../assets/bike-hero2.jpeg'

const Hero = () => {
  return (
    <Wrapper className="section-center">
      <article className="content">
        <h1>Up and down on every hill!</h1>
        <p>
          Welcome to Bike terrain shop, well established bike dealer and service
          shop where you will find everything you need for your next adventure,
          we have a something for every need so please check out our stuff and
          don't hesitate to come around for a demo ride or a super sweet
          service!
        </p>
        <Link to="products" className="btn hero-btn">
          Go to Shop
        </Link>
      </article>
      <article className="img-container">
        <img src={heroBcg} alt="downhill bike" className="main-img" />
        <img src={heroBcg2} alt="trail-riding" className="accent-img" />
      </article>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  min-height: 60vh;
  display: grid;
  place-items: center;
  .img-container {
    display: none;
  }

  p {
    line-height: 2;
    max-width: 45em;
    margin-bottom: 2rem;
    color: var(--clr-grey-5);
    font-size: 1rem;
  }
  @media (min-width: 992px) {
    height: calc(100vh - 5rem);
    grid-template-columns: 1fr 1fr;
    gap: 8rem;
    h1 {
      margin-bottom: 2rem;
    }
    p {
      font-size: 1.25rem;
      padding-right: 2em;
    }
    .hero-btn {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
    }
    .img-container {
      display: block;
      position: relative;
    }
    .main-img {
      width: 100%;
      height: 340px;
      position: relative;
      border-radius: var(--radius);
      display: block;
      object-fit: cover;
    }
    .accent-img {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 64%;
      transform: translateX(-40%);
      border-radius: var(--radius);
      margin-left: 1em;
    }
    .img-container::before {
      content: '';
      position: absolute;
      width: 10%;
      height: 80%;
      background: var(--clr-grey-9);
      bottom: 0%;
      left: -8%;
      border-radius: var(--radius);
    }
  }
`

export default Hero
