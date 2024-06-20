import React from 'react'
import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <div>
      <h1>NotFoundPage 404 error</h1>
      <Link to={'/'} className='btn btn-primary'>Regresar a inicio</Link>
    </div>
  )
}

export default NotFoundPage