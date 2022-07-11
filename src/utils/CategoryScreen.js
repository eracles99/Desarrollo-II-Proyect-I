import React from 'react'

export const CategoryScreen = (props) => {
  return (
    <div >
        <div className="container text-center">
          <h1 className='fw-bold' style={{ fontSize: '55px' }}>{props.Category}</h1>
        </div>
    </div>
  )
}
