import { TaskModel } from "./models/task.model"

export interface ResponseBody {
  data: TaskModel[] | null
  error: boolean
  res: any
}