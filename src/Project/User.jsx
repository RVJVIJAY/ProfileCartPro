import React from 'react'
import propTypes from 'prop-types'
const User = (props) => {
    const {name,status,img,role,skils,distict}=props;
  return (
    <div className='card-container'>
      <div className='img-container'>
        <img src={img} alt='no img is there'/>
        <div className={`status ${status ? 'online' : 'offline'}`}>
                    {status ? 'ONLINE' : 'OFFLINE'}
                </div>
      </div>
      <div className='user-details'>
      <h1>{name}</h1>
      <h2>{distict}</h2>
      <h3>{role}</h3>
      <ul className='skills-list'>
        {
          skils.map((item,index)=>(
            <li key={index}>{item}</li>
          )

          )
        }
      </ul>
      </div>
      
    </div>
  )
}

export default User

User.propTypes={
  name:propTypes.string.isRequired,
  status:propTypes.bool.isRequired,
  img:propTypes.string.isRequired,
  role:propTypes.string.isRequired,
  skils:propTypes.arrayOf(propTypes.string).isRequired,
  distict:propTypes.string.isRequired
}