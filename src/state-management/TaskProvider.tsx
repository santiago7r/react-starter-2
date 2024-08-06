import { ReactNode, useReducer } from "react";
import taskListReducer from "./reducers/taskListReducer";
import TasksContext from "./contexts/tasksContext";

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