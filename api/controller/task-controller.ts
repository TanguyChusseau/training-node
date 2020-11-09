import { INIT_TASKS, Task } from '../../model/task'

let tasks = INIT_TASKS

export class TaskController {
  getTasks(request: any) {
    request.response.body = tasks
  }

  addTask(request: any) {
    const newTask: Task = request.request.body
    newTask.id = Math.floor(Math.random() * 200) + 1
    tasks.push(newTask)
    request.response.body = tasks
  }

  deleteTask(request: any) {
    tasks = tasks.filter(({ id }) => id !== parseInt(request.params.id, 10))
    request.response.body = tasks
  }
}
