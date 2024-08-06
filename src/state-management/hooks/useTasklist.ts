import { useContext } from "react";
import TasksContext from "../contexts/tasksContext";


const useTasklist = () => useContext(TasksContext);

export default useTasklist;