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

function App() {
  const [tasks, tasksDispatch] = useReducer(taskListReducer, []);
  const [user, loginDispatch] = useReducer(loginReducer, '');

  return (
    <AuthContext.Provider value={{ user, dispatch: loginDispatch}}>
      <TasksContext.Provider value={{ tasks, dispatch: tasksDispatch}}>
        <NavBar />
        <HomePage />
      </TasksContext.Provider>
    </AuthContext.Provider>
  )
}

export default App;
