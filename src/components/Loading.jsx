import React from 'react'
import { Spinner } from 'react-bootstrap'

const Loading = () => {
  return (
    <>
      <Spinner animation="border" />
      <p>Cargando</p>
    </>
  )
}

export default Loading