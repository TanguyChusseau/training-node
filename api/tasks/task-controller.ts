import { INIT_TASKS, Task } from './domain/task'
import { Request } from 'koa'

let tasks = INIT_TASKS

export class TaskController {
  getTasks(request: Request) {
    request.response.body = tasks
    request.response.status = 200
  }

  addTask(request: Request) {
    const newTask: Task = request.body
    newTask.id = Math.floor(Math.random() * 200) + 1
    tasks.push(newTask)
    request.response.body = tasks
    request.response.status = 200
  }

  deleteTask(request: Request) {
    let idToDelete = request.query.id
    if (!tasks.find((task) => task.id === parseInt(idToDelete, 10))) {
      request.response.status = 404
      return
    }
    tasks = tasks.filter(({ id }) => id !== parseInt(idToDelete, 10))
    request.response.body = tasks
    request.response.status = 200
  }
}
