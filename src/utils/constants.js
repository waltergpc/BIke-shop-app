import React from 'react'
import { GiThreeFriends, GiDutchBike } from 'react-icons/gi'
import { BiWrench } from 'react-icons/bi'
export const links = [
  {
    id: 1,
    text: 'home',
    url: '/',
  },
  {
    id: 2,
    text: 'about',
    url: '/about',
  },
  {
    id: 3,
    text: 'bikes',
    url: '/products',
  },
]

export const services = [
  {
    id: 1,
    icon: <GiDutchBike />,
    title: 'Bike Stock',
    text: 'We sell bikes and accesories to make your ride as sweet as possible, our stock includes MTB, road, commute and all essentials.',
  },
  {
    id: 2,
    icon: <BiWrench />,
    title: 'Service and Detail',
    text: 'Come in with our technicians for a mid-year service, with different options. We service forks and shocks also. Rough riding? ask about our detail services.',
  },
  {
    id: 3,
    icon: <GiThreeFriends />,
    title: 'Community',
    text: 'At Bike terrain we want to make a great community, please join us in our weekly ride to different places. specifications and expertise will change on a weekly basis.',
  },
]

export const products_url = 'http://localhost:5000/api/v1/bikes'
