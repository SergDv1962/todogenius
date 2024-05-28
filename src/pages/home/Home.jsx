import React from 'react'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../utils/routes'

const Home = () => {
  return (
    <div>
      <p>Home page</p>
      <Link className='btn btn-blue' to={ROUTES.TODOAPP}>START</Link>
    </div>
  )
}

export default Home
