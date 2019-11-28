let admin = ''
module.exports = io => {
  io.on('connection', socket => {
    console.log(`A socket connection to the server has been made: ${socket.id}`)

    socket.on('disconnect', () => {
      console.log(`Connection ${socket.id} has left the building`)
    })

    socket.on('lock-page', () => {
      console.log(`data has been locked by ${socket.id} until finished`)
      socket.broadcast.emit('kick')
    })
    socket.on('unlock-page', () => {
      console.log(`data has been unlocked by ${socket.id}`)
      socket.broadcast.emit('unkick')
    })
  })
}
