import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {kick, unkick} from '../socket'
import {lock, unlock} from '../store/user'
class Data extends Component {
  constructor() {
    super()
    this.state = {editing: false}
    this.kickUsers = this.kickUsers.bind(this)
    this.unkickUsers = this.unkickUsers.bind(this)
  }
  kickUsers() {
    this.setState({editing: true})
    kick()
    this.props.lock()
  }
  unkickUsers() {
    this.props.unlock()
    unkick()
    this.setState({editing: false})
  }
  render() {
    const {content} = this.props
    const {editing} = this.state
    if (content) {
      return (
        <div>
          <div>
            <h1>Data</h1>
            {content.map(c => {
              const {email, note, id} = c
              return (
                <div key={id}>
                  <h3>{email}</h3>
                  <h5>{note}</h5>
                </div>
              )
            })}
          </div>
          {!editing ? (
            <button onClick={this.kickUsers}>Lock Page</button>
          ) : (
            <button onClick={this.unkickUsers}>Unlock Page</button>
          )}
        </div>
      )
    } else {
      return <div>Loading...</div>
    }
  }
}
const mapState = state => {
  return {
    content: state.user.content,
    access: state.user.access
  }
}
const mapDispatch = dispatch => {
  return {
    lock() {
      dispatch(lock())
    },
    unlock() {
      dispatch(unlock())
    }
  }
}
export default withRouter(connect(mapState, mapDispatch)(Data))
