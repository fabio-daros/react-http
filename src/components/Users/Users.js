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

    this.adicionarUser = this.adicionarUser.bind(this)
  }

  adicionarUser(user) {
    const users = [...this.state.users, user]
    this.setState({ users: users })
  }

  removerUser(user) {
    if (window.confirm(`Are you sure you want to remove "${user.name} ${user.surname}"?`)) {
      let users = this.state.users
      users = users.filter(x => x.id !== user.id)
      this.setState({ users: users })
    }
  }

  render() {
    return (
      <>
        <AddUser adicionarUser={this.adicionarUser} />

        {this.state.users.map(user => (
          <User key={user.id}
            user={user}
            removerUser={this.removerUser.bind(this, user)}
          />
        ))}
      </>
    )
  }
}

export default Users