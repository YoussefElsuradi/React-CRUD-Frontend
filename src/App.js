import './App.css';
import { Routes, Route } from 'react-router-dom';
import ErrorBoundary from './ErrorBoundary';
import {
  HomePageContainer,
  AllEmployeesContainer,
  EmployeeContainer,
  AllTasksContainer,
  TaskContainer,
  NewTaskContainer,
  EditTaskContainer,
  NewEmployeeContainer
} from './components/containers';

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
      <Routes>
        <Route path="/" Component={HomePageContainer} />
        <Route path="/employees" Component={AllEmployeesContainer} />
        <Route path="/employees/:id" Component={EmployeeContainer} />
        <Route path="/tasks" Component={AllTasksContainer} />
        <Route path="/newtask" Component={NewTaskContainer} />
        <Route path="/tasks/:id" Component={TaskContainer} />
        <Route path="/edittask/:id" Component={EditTaskContainer} />
        <Route path="/newemployee" Component={NewEmployeeContainer} />
      </Routes>
      </ErrorBoundary>
    </div>
  );
}

export default App;
