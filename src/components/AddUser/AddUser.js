import React, {useState } from 'react'

import './AddUser.css'

function AddUser() {

  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [email, setEmail] = useState('')

  const onSubmitHandler = (event) => {
    event.preventDefault()

    const user = { name, surname, email }

    fetch('https://reqres.in/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
    })
      .then(response => {
        if (response.ok) {
        setName('')
        setSurname('')
        setEmail('')
        alert('User added successfully!')
        }
      })
  }

  return (
    <div className="AddUser">
      <h2>Add User</h2>
      <form onSubmit={onSubmitHandler}>
        <div className="Line">
          <div className="Column">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={event => setName(event.target.value)}
              required>
            </input>
          </div>
          <div className="Column">
            <label>Surname</label>
            <input
              type="text"
              name="surname"
              value={surname}
              onChange={event => setSurname(event.target.value)}
              required>
            </input>
          </div>
        </div>
        <div className="Line">
          <div className="Column">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={event => setEmail(event.target.value)}
              required>
            </input>
          </div>
        </div>
        <button type="submit">
          Add+
        </button>
      </form>
    </div>
  )
}
export default AddUser