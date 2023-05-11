import './App.css';
import { Routes, Route } from 'react-router-dom';
import {
  HomePageContainer,
  AllEmployeesContainer,
  EmployeeContainer,
  AllTasksContainer,
  TaskContainer,
  NewTaskContainer,
  EditTaskContainer
} from './components/containers';

function App() {
  return (
    <div classname="App">
      {/* <header className="App-header">
        <h1>Employee Management app </h1>
      </header> */}
      <Routes>
        <Route exact path="/" element={<HomePageContainer />} />
        <Route exact path="/employees" element={<AllEmployeesContainer />} />
        <Route exact path="/employee/:id" element={<EmployeeContainer />} />
        <Route exact path="/tasks" element={<AllTasksContainer />} />
        <Route exact path="/newtask" element={<NewTaskContainer />} />
        <Route exact path="/task/:id" element={<TaskContainer />} />
        <Route exact path="/edittask/:id" element={<EditTaskContainer />} />
      </Routes>
    </div>
  );
}

export default App;
