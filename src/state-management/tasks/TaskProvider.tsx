import { ReactNode, useReducer } from "react";
import TasksContext from "./tasksContext";


export interface Task {
  id: number;
  title: string;
}

interface AddTask {
  type: 'ADD',
  task: Task
}

interface DeleteTask {
  type: 'DELETE',
  taskId: number
}

export type TaskAction = AddTask | DeleteTask;

const taskListReducer = (state: Task[], action: TaskAction): Task[] => {
  switch (action.type) {
      case 'ADD':
          return [action.task, ...state];
      case 'DELETE':
          return state.filter(t => t.id !== action.taskId)
  }
}

interface TaskProviderType {
    children: ReactNode;
}


const TaskProvider = ({children}: TaskProviderType) => {
  const [tasks, tasksDispatch] = useReducer(taskListReducer, []);

  return (
    <TasksContext.Provider value={{ tasks, dispatch: tasksDispatch}}>
        {children}
    </TasksContext.Provider>
  )
}

export default TaskProvider;