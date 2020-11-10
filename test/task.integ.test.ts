import { CreateTask } from '../model/task'

const request = require('supertest')
const server = require('../server')

beforeAll(() => {
  console.log(' Jest Starting ! ')
})

afterAll(() => {
  server.close()
  console.log(' server closed !')
})
describe('#Post', () => {
  describe('when a new task is added', () => {
    it('should return 200 OK with updated tasks list', () => {
      const newTask: CreateTask = {
        label: 'test'
      }
      const res = request(server).post('/task').send(newTask)
      expect(res.statusCode).toEqual(200)
    })
  })
})
