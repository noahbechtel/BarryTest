import io from 'socket.io-client'
import history from './history'
import {getStatus, setAccess} from './store/user'

const socket = io(window.location.origin)

export let access = false

export const kick = () => {
  socket.emit('lock-page')
}
export const unkick = () => {
  socket.emit('unlock-page')
}

socket.on('connect', () => {
  console.log('Connected!')
})

socket.on('kick', () => {
  alert('Editing in progress!')
  history.push('/')
})

socket.on('unkick', () => {
  console.log('you have been unkicked')
  history.push('/')
})

export default socket
