import { CreateTask } from '../api/tasks/domain/task'

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
      //Given
      const newTask: CreateTask = {
        label: 'test'
      }
      //When
      const res = request(server).post('/task').send(newTask)
      //Then
      expect(res.statusCode).toEqual(200)
    })
  })
})
