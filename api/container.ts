import { TaskController } from './tasks/task-controller'
import { Sequelize } from 'sequelize'

export function createFactory() {
  const controller = {
    taskController: new TaskController(),
    connectBDD: new Sequelize("mybdd", "root", "root", { dialect: "mysql",  host: "localhost" })

  }
  return { ...controller }
}

export default createFactory()
