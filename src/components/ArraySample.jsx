import React from 'react'
import propTypes from 'prop-types'
const ArraySample = (props) => {
    const {items}=props
  return (
    <div>
      <ul>
        {items.map((item)=>(
            <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default ArraySample

ArraySample.propTypes={
    items:propTypes.arrayOf(
        propTypes.shape({
            id: propTypes.number,
            name: propTypes.string
        }
        )
    ).isRequired
}

