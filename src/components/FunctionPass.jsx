import React from 'react'
import propTypes from 'prop-types'
const FunctionPass = ({handleclick}) => {
  return (
    <div>
      <p>child component</p>
      <button onClick={handleclick}>click me </button>
    </div>
  )
}

export default FunctionPass

FunctionPass.propTypes={
    handleclick:propTypes.func.isRequired
}