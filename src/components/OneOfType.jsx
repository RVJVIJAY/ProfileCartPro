import React from 'react'
import propTypes from 'prop-types'
const OneOfType = ({value}) => {
  return (
    <div>
      
    </div>
  )
}

export default OneOfType

OneOfType.propTypes={
 value: propTypes.oneOfType([propTypes.string,propTypes.number,propTypes.bool])
}