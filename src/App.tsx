import { useReducer } from 'react';
import './App.css';
import AuthProvider from './state-management/AuthProvider';
import TasksContext from './state-management/contexts/tasksContext';
import HomePage from './state-management/HomePage';
import NavBar from './state-management/NavBar';
import taskListReducer from './state-management/reducers/taskListReducer';

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
