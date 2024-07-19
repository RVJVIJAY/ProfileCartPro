import React from 'react'
import propTypes from 'prop-types'
const Childprop = (props) => {
  return (
    /* it return value as array so we need to validate the type of data */
    <div>
      {props.children}   
    </div>
  )
}

export default Childprop

Childprop.propTypes={
  children:propTypes.array
}