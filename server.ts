import app from './app'

const SERVER_PORT: Number = 3001

const server = app.listen(SERVER_PORT, () => {
  console.info(`Server Started on port ${SERVER_PORT}`)
})
module.exports = server
