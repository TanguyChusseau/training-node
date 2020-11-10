import { TaskController } from '../../api/controller/task-controller'

export function createFactory() {
  const controller = {
    taskController: new TaskController()
  }
  return { ...controller }
}

export default createFactory()
