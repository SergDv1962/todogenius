import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../utils/routes';

const ErrorPage = () => {
  const { error } = useSelector(state => state.registered);

  return (
    <div className='page-error'>
      <p>This is ErrorPage.</p> 
      <p>Message: <b style={{color:'red'}}>{error}</b></p>
      <Link onClick={(state) => state.registered.error = null} to={ROUTES.HOME} className='btn btn-blue'>Come back</Link>
    </div>
  )
}

export default ErrorPage
