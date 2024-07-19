import React from 'react'
import propTypes from 'prop-types'
const StudentData = (props) => {
  return (
    <div>
      <table>
        <tbody>
            <tr>
                <th>
                    Name
                </th>
                <td>
                    {props.name}
                </td>
            </tr>
            <tr>
                <th>Age</th>
                <td>{props.age}</td>
            </tr>
            <tr>
                <th>Ismarried</th>
                <td>{props. ismarried ? "yes" :"no"}</td>
            </tr>
        </tbody>
      </table>
    </div>
  )
}

export default StudentData

StudentData.propTypes={
    name:propTypes.string,
    age:propTypes.number,
    ismarried:propTypes.bool
}

StudentData.defaultProps={
    name:"nothing specified",
    age:0,
    ismarried:false
}