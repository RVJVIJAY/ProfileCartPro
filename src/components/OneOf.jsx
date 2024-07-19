import React from 'react'
import propTypes from 'prop-types'
const OneOf = ({color}) => {
  return (
    <div style={{backgroundColor: color ,width:200 ,height:200,color:"white"}}>
      <p>the color name is {color}</p>
    </div>
  )
}

export default OneOf

OneOf.propTypes={
    color:propTypes.oneOf(["red","yellow","black"]).isRequired
}
