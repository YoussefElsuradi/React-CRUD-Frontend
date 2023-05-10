import './App.css';
import { useState } from 'react';
import axios from 'axios';

function App() {
  const [allEmployees, getEmployees] = useState([]);
  const [allTasks, getTasks] = useState([]);

  const fetchAllTasks = () => {
    axios.get('http://localhost:4000/tasks')
      .then(response => {
        getTasks(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  };


  // Function to handle button click
  const fetchAllEmployees = () => {
    axios.get('http://localhost:4000/employees')
      .then(response => {
        getEmployees(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div className='App'>
      <button onClick={fetchAllEmployees}>Fetch Employees</button>
      <button onClick={fetchAllTasks}>Fetch Task</button>

      <ul>
        {allEmployees.map(allEmployees => (
          <li key={allEmployees.id}>
            {allEmployees.id} {allEmployees.employee_first_name} {allEmployees.employee_last_name} - {allEmployees.department_name}
          </li>
        ))}
      </ul>
      <ul>
        {allTasks.map(allTasks => (
          <li key={allTasks.id}>
            {allTasks.description} - Priority: {allTasks.priority_level} - Completion: {allTasks.completion_status ? 'Complete' : 'Incomplete'}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
