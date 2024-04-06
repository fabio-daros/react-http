import React from 'react'
import { Link } from 'react-router-dom'

import './User.css'

function User(props) {
  return (
    <div className="User">
      <ul>
        <li><strong>ID:</strong> {props.user.id}</li>
        <li><strong>Name:</strong> {props.user.name} {props.user.surname}</li>
        <li><strong>Email:</strong> {props.user.email}</li>
        <li><Link to={`/users/${props.user.id}`}>Details</Link></li>
      </ul>
      <button onClick={props.removeUser}>&times;</button>
    </div>
  )
}

export default User