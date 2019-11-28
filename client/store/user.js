import axios from 'axios'
import history from '../history'

const GET_ACCESS = 'GET_ACCESS'
const GET_CONTENT = 'GET_CONTENT'

export const setAccess = access => ({type: GET_ACCESS, access})
const setContent = content => ({type: GET_CONTENT, content})

export const lock = () => async dispatch => {
  try {
    await axios.get('/api/content/lock')
    dispatch(setAccess(false))
  } catch (err) {
    console.error(err)
  }
}
export const unlock = () => async dispatch => {
  try {
    await axios.get('/api/content/unlock')
    dispatch(setAccess(true))
  } catch (err) {
    console.error(err)
  }
}
export const getStatus = () => async dispatch => {
  try {
    const {data} = await axios.get('/api/content/status')
    dispatch(setContent(data))
    if (data[0].locked) {
      dispatch(setAccess(false))
    } else {
      dispatch(setAccess(true))
    }
  } catch (err) {
    console.error(err)
  }
}

/**
 * REDUCER
 */
export default function(state = {}, action) {
  switch (action.type) {
    case GET_ACCESS:
      return {...state, access: action.access}
    case GET_CONTENT:
      return {...state, content: action.content}

    default:
      return state
  }
}
