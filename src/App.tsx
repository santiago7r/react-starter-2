import { useReducer } from 'react';
import './App.css';
import PostList from './react-query/PostList';
import TodoForm from './react-query/TodoForm';
import TodoList from './react-query/TodoList';
import Counter from './state-management/Counter';
import LoginStatus from './state-management/LoginStatus';
import TaskList from './state-management/TaskList';
import taskListReducer from './state-management/reducers/taskListReducer';
import TasksContext from './state-management/contexts/tasksContext';
import NavBar from './state-management/NavBar';
import HomePage from './state-management/HomePage';

function App() {
  const [tasks, dispatch] = useReducer(taskListReducer, []);

  return (
    <TasksContext.Provider value={{ tasks, dispatch}}>
      <NavBar />
      <HomePage />
    </TasksContext.Provider>
  )
}

export default App;
