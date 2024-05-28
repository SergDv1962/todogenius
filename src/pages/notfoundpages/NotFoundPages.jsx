import React from 'react'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../utils/routes'

const NotFoundPages = () => {
  return (
    <div>
      <p>Not found any pages</p>
      <Link  to={ROUTES.HOME} className='btn btn-blue'>Return</Link>
    </div>
  )
}

export default NotFoundPages
