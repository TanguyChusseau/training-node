export interface Task {
  id: number
  label: string
}

export interface CreateTask {
  label: string
}

export const INIT_TASKS: Task[] = [
  {
    id: 1,
    label: 'Groceries'
  },
  {
    id: 2,
    label: 'Training Vue'
  },
  {
    id: 3,
    label: 'Training Node'
  }
]
