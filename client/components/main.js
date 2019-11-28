import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {getStatus} from '../store/user'

class Main extends Component {
  constructor() {
    super()
  }
  componentDidMount() {
    this.props.getStatus()
  }

  render() {
    const {access} = this.props
    console.log(access)
    if (access !== undefined) {
      return (
        <div>
          {!access ? <h3>Page Locked</h3> : <a href="/data">View Data</a>}
        </div>
      )
    } else {
      return (
        <div>
          <h1>Loading...</h1>
        </div>
      )
    }
  }
}
const mapState = state => {
  return {
    access: state.user.access
  }
}
const mapDispatch = dispatch => {
  return {
    getStatus() {
      dispatch(getStatus())
    }
  }
}
export default withRouter(connect(mapState, mapDispatch)(Main))
