import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch} from 'react-router-dom'
import {Main, Data} from './components'
import {getStatus} from './store/user'
import history from './history'
/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.getStatus()
  }
  render() {
    return (
      <div>
        <Route exact path="/gate" component={Main} />
        <Route exact path="/data" component={Data} />
        <Route
          exact
          path="/"
          component={() => {
            history.push('/gate')
            return <div>Loading...</div>
          }}
        />
      </div>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {}
}

const mapDispatch = dispatch => {
  return {
    getStatus() {
      dispatch(getStatus())
    }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes))
