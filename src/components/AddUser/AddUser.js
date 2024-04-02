import React, { Component } from 'react'

import './AddUser.css'

class AddUser extends Component {

  constructor(props) {
    super(props)

    this.state = { 
      user: { name: '', surname: '', email: '' } 
    }

    this.onChangeHandler = this.onChangeHandler.bind(this)
    this.onSubmitHandler = this.onSubmitHandler.bind(this)
  }

  onChangeHandler(event) {
    const { name, value } = event.target
    this.setState({ user: { ...this.state.user, [name]: value } })
  }

  onSubmitHandler(event) {
    event.preventDefault()
    const id = Math.floor(Math.random() * 1000)
    const user = { ...this.state.user, id }

    this.setState({ user: { name: '', surname: '', email: '' } })
    this.props.adicionarUser(user)
  }

  render() {
    return (
      <div className="AddUser">
        <h2>Add User</h2>
        <form onSubmit={this.onSubmitHandler}>
          <div className="Linha">
            <div className="Coluna">
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={this.state.user.name}
                onChange={this.onChangeHandler}
                required>
              </input>
            </div>
            <div className="Coluna">
              <label>Surname</label>
              <input
                type="text"
                name="surname"
                value={this.state.user.surname}
                onChange={this.onChangeHandler}
                required>
              </input>
            </div>
          </div>
          <div className="Linha">
            <div className="Coluna">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={this.state.user.email}
                onChange={this.onChangeHandler}
                required>
              </input>
            </div>
          </div>
          <button type="submit">
            Add
        </button>
        </form>
      </div>
    )
  }
}

export default AddUser