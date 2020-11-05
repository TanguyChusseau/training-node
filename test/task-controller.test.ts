import { createFactory } from '../model/factory/container'
import { INIT_TASKS } from '../model/task'

let taskController = createFactory().controller.taskController

describe('My task controller', () => {
  it('(Get) should return list task ', () => {
    let mockRequest = { body: {} }
    taskController.getTasks(mockRequest)
    expect(mockRequest.body).toBe(INIT_TASKS)
  })
  it('(Put) should return list task  with the new task ', () => {
    let mockRequest = {
      body: {},
      request: {
        body: {
          id: 69,
          label: 'test'
        }
      }
    }
    taskController.addTask(mockRequest)
    expect(mockRequest.body).not.toBe({})
  })
})
