import { CreateTask } from '../api/tasks/domain/task'

const request = require('supertest')
const server = require('../server')

afterAll(() => {
  server.close()
  console.info(' server closed !')
})
describe('#Get', () => {
  describe('when tasks list exist', () => {
    it('should return 200 with the list', async () => {
      //Given
      //When
      const res = await request(server).get('/tasks')
      //Then
      expect(res.statusCode).toEqual(200)
    })
  })
})

describe('#Post', () => {
  describe('when a new task is added', () => {
    it('should return 200 OK with updated tasks list', async () => {
      //Given
      const newTask: CreateTask = {
        label: 'test'
      }
      //When
      const res = await request(server).post('/tasks').send(newTask)
      //Then
      expect(res.statusCode).toEqual(200)
    })
  })
})

describe('#Delete', () => {
  describe('when a task to delete does not exist', () => {
    it('should return 404 Not Found', async () => {
      //Given
      const idToDelete = 4
      const url = '/tasks/' + idToDelete
      //When
      const res = await request(server).delete(url).query({ id: idToDelete })
      //Then
      expect(res.statusCode).toEqual(404)
    })
  })
  describe('when a task to delete does not exist', () => {
    it('should return 200 Ok with updated list', async () => {
      //Given
      const idToDelete = 3
      const url = '/tasks/' + idToDelete
      //When
      const res = await request(server).delete(url).query({ id: idToDelete })
      //Then
      expect(res.statusCode).toEqual(200)
    })
  })
})
