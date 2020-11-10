import { createFactory } from '../model/factory/container'
import { CreateTask, INIT_TASKS } from '../model/task'
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
        taskController.getTasks(request)
        expect(request.response.status).toStrictEqual(200)
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
        //Then
        request.body = newTask
        taskController.addTask(request)
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
        //Then
        taskController.deleteTask(request)
        expect(request.response.status).toStrictEqual(404)
      })
    })

    describe('when task to delete exists', () => {
      it('should return 200 OK with updated tasks list', () => {
        //Given
        request.query.id = 3
        //Then
        taskController.deleteTask(request)
        expect(request.response.status).toStrictEqual(200)
        expect(request.response.body.length).toStrictEqual(tasks.length - 1)
      })
    })
  })
})
