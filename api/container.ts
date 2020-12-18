import { TaskController } from './tasks/task-controller'

export function createFactory() {
  const controller = {
    taskController: new TaskController()
  }
  return { ...controller }
}

export default createFactory()
