import React, { Component } from 'react'

import AddUser from '../AddUser/AddUser'
import User from '../User/User'

class Users extends Component {

  constructor(props) {
    super(props)
    this.state = {
      users: [
        { id: 1, name: 'João', surname: 'Silva', email: 'joao@mail.com' },
        { id: 2, name: 'Maria', surname: 'Santos', email: 'maria@mail.com' }
      ]
    }

    this.addUser = this.addUser.bind(this)
  }

  addUser(user) {
    const users = [...this.state.users, user]
    this.setState({ users: users })
  }

  removeUser(user) {
    if (window.confirm(`Are you sure you want to remove "${user.name} ${user.surname}"?`)) {

      fetch(`https://reqres.in/api/users/${user.id}`, {
        method: 'DELETE'
      })
        .then(response => {
          if (response.ok) {
            console.log(response)
            let users = this.state.users.filter(u => u.id !== user.id)
            this.setState({ users: users })
          }
        })
    }
  }

  componentDidMount() { // GET requisition using fetch.

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
        this.setState({ users }) // Simplify
      })

  }

  render() {
    return (
      <>
        <AddUser addUser={this.addUser} />

        {this.state.users.map(user => (
          <User key={user.id}
            user={user}
            removeUser={this.removeUser.bind(this, user)}
          />
        ))}
      </>
    )
  }
}

export default Users