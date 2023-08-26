import React from 'react'

const Button = (props: { name: string }) => {
  return (
    <div className='custom-button primary'><div>{props?.name}</div></div>
  )
}

export default Button