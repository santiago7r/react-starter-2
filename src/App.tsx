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
import loginReducer from './state-management/reducers/loginReducer';
import AuthContext from './state-management/contexts/authContext';
import AuthProvider from './state-management/AuthProvider';

function App() {
  const [tasks, tasksDispatch] = useReducer(taskListReducer, []);

  return (
    <AuthProvider>
      <TasksContext.Provider value={{ tasks, dispatch: tasksDispatch}}>
        <NavBar />
        <HomePage />
      </TasksContext.Provider>
    </AuthProvider>
  )
}

export default App;
