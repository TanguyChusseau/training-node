import { INIT_TASKS, Task } from '../../model/task'

let tasks = INIT_TASKS

class TaskController {
  getTasks(request) {
    request.body = tasks
  }

  addTask(request) {
    const newTask: Task = request.request.body
    newTask.id = Math.floor(Math.random() * 200) + 1
    tasks.push(newTask)
    request.body = tasks
  }

  deleteTask(request) {
    tasks = tasks.filter(({ id }) => id !== parseInt(request.params.id, 10))
    request.body = tasks
  }
}

export const taskController = new TaskController()
