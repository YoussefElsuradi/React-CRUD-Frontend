import './App.css';
import { Routes, Route } from 'react-router-dom';
import {
  HomePageContainer,
  AllEmployeesContainer,
  EmployeeContainer,
  AllTasksContainer,
  TaskContainer
} from './components/containers';

function App() {
  return (
    <div classname="App">
      {/* <header className="App-header">
        <h1>Employee Management app </h1>
      </header> */}
      <Routes>
        <Route path="/" element={<HomePageContainer />} />
        <Route path="/employees" element={<AllEmployeesContainer />} />
        <Route path="/employee" element={<EmployeeContainer />} />
        <Route path="/tasks" element={<AllTasksContainer />} />
        <Route path="/task" element={<TaskContainer />} />
      </Routes>
    </div>
  );
}

export default App;
