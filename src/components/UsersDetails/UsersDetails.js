import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import './UserDetails.css'

function UserDetails() {

  const { id } = useParams()

  const [user, setUser] = useState({})

  useEffect(() => {
    fetch(`https://reqres.in/api/users/${id}`)
      .then(response => response.json())
      .then(data => {
        if (data.data) {
          setUser({
            id: data.data.id,
            name: data.data.first_name,
            surname: data.data.last_name,
            email: data.data.email,
            avatar: data.data.avatar
          })
        }
      })
  }, [id])

  if (user.name !== undefined) {
    return <div className="UserDetails">
      <h1>{user.name} {user.surname}</h1>
      <img src={user.avatar} alt={user.name} />
      <p>{user.email}</p>
      <Link to="/users">Back</Link>
    </div>
  }

  return (
    <div className="UserDetails">
      <h1>User not found!</h1>
      <Link to="/users">Back</Link>
    </div>
  );
}

export default UserDetails;