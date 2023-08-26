import React from 'react'

const Button = (props: { name: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal }) => {
  return (
    <div className='custom-button primary'><div>{props?.name}</div></div>
  )
}

export default Button