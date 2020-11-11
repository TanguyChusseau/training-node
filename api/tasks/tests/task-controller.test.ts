import { createFactory } from '../../container'
import { CreateTask, INIT_TASKS } from '../domain/task'
import { Request } from 'koa'
import { StubbedInstance, stubInterface } from 'ts-sinon'

let taskController = createFactory().taskController

describe('Unit | Controller | TaskController', () => {
  let request: StubbedInstance<Request>
  let tasks = INIT_TASKS

  beforeEach(() => {
    request = stubInterface<Request>()
    tasks = INIT_TASKS
  })

  describe('#getTasks', () => {
    describe('when tasks list exists', () => {
      it('should return 200 OK with tasks list', () => {
        //When
        taskController.getTasks(request)
        //Then
        ecxpect(request.response.status).toStrictEqual(200)
        expect(request.response.body).toBe(tasks)
      })
    })
  })

  describe('#addTask', () => {
    describe('when a new task is added', () => {
      it('should return 200 OK with updated tasks list', () => {
        //Given
        const newTask: CreateTask = {
          label: 'test'
        }
        //When
        request.body = newTask
        taskController.addTask(request)
        //Then
        expect(request.response.status).toStrictEqual(200)
        expect(request.response.body[request.response.body.length - 1].label).toStrictEqual(newTask.label)
      })
    })
  })

  describe('#deleteTask', () => {
    describe('when task to delete does not exist', () => {
      it('should throw 404 Not Found', () => {
        //Given
        request.query.id = 4
        //When
        taskController.deleteTask(request)
        //Then
        expect(request.response.status).toStrictEqual(404)
      })
    })

    describe('when task to delete exists', () => {
      it('should return 200 OK with updated tasks list', () => {
        //Given
        request.query.id = 3
        //When
        taskController.deleteTask(request)
        //Then
        expect(request.response.status).toStrictEqual(200)
        expect(request.response.body.length).toStrictEqual(tasks.length - 1)
      })
    })
  })
})
