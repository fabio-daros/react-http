import React, { useState, useEffect } from 'react'

import AddUser from '../AddUser/AddUser'
import User from '../User/User'

function Users() {

  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('https://reqres.in/api/users')
      .then(response => response.json())
      .then(data => {
        console.log(data.data)

        const users = data.data.map(user => ({
          id: user.id,
          name: user.first_name,
          surname: user.last_name,
          email: user.email
        }))

        console.log(users)
        //this.setState({ users: users })
        setUsers(users) // Simplify
      })

  }, []) // Empty array to run only once time

  const addUser = user => {
    setUsers(actualUsers => [...actualUsers, user])
  }

  const removeUser = user => {
    if (window.confirm(`Are you sure you want to remove "${user.name} ${user.surname}"?`)) {

      fetch(`https://reqres.in/api/users/${user.id}`, {
        method: 'DELETE'
      })
        .then(response => {
          if (response.ok) {
            setUsers(users.filter(u => u.id !== user.id))
          }
        })
    }
  }

  return (
    <>
      <AddUser addUser={addUser} />

      {users.map(user => (
        <User key={user.id}
          user={user}
          removeUser={() => removeUser(user)}
        />
      ))}
    </>
  )
}

export default Users