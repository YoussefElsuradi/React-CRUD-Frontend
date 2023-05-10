import './App.css';
import { useState } from 'react';
import axios from 'axios';

function App() {
  // set state for all employees and task
  const [allEmployees, getEmployees] = useState([]);
  const [allTasks, getTasks] = useState([]);

  // set states for add a task
  const [description, setDescription] = useState('');
  const [priorityLevel, setPriorityLevel] = useState(0);
  const [completionStatus, setCompletionStatus] = useState(false);

  // set states for add a employee
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [department, setDepartment] = useState('');

  // onChange handler for each input for task
  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };
  const handlePriorityLevelChange = (event) => {
    setPriorityLevel(event.target.value);
  };
  const handleCompletionStatusChange = (event) => {
    setCompletionStatus(event.target.checked);
  };

  // onChange handler for each input for employee
  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };
  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };
  const handleDepartmentChange = (event) => {
    setDepartment(event.target.value);
  };

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
  // submit
  const handleSubmitTasks = (event) => {
    event.preventDefault();

    const newTask = {
      description: description,
      priority_level: priorityLevel,
      completion_status: completionStatus
    };

    axios.post('http://localhost:4000/tasks', newTask)
      .then(response => {
        // Handle successful response
        console.log(response.data);
        // Clear the form inputs
        setDescription('');
        setPriorityLevel(0);
        setCompletionStatus(false);
      })
      .catch(error => {
        // Handle error
        console.error(error);
      });
  };
  const handleSubmitEmployees = (event) => {
    event.preventDefault();

    const newEmployee = {
      employee_first_name: firstName,
      employee_last_name: lastName,
      department_name: department
    };

    axios.post('http://localhost:4000/employees', newEmployee)
      .then(response => {
        // Handle successful response
        console.log(response.data);
        // Clear the form inputs
        setFirstName('');
        setLastName('');
        setDepartment('');
      })
      .catch(error => {
        // Handle error
        console.error(error);
      });
  };


  return (
    <div className='App'>
      <button onClick={fetchAllEmployees}>Fetch Employees</button>
      <button onClick={fetchAllTasks}>Fetch Task</button>

      <h1> Add a new Task</h1>
      <form onSubmit={handleSubmitTasks}>
        <label>
          Description:
          <input type="text" value={description} onChange={handleDescriptionChange} />
        </label>
        <br />
        <label>
          Priority Level:
          <input type="number" value={priorityLevel} onChange={handlePriorityLevelChange} />
        </label>
        <br />
        <label>
          Completion Status:
          <input type="checkbox" checked={completionStatus} onChange={handleCompletionStatusChange} />
        </label>
        <br />
        <button type="submit">Add Task</button>
      </form>

      <h1> Add a new Employee</h1>
      <form onSubmit={handleSubmitEmployees}>
        <label>
          First Name:
          <input type="text" value={firstName} onChange={handleFirstNameChange} />
        </label>
        <br />
        <label>
          Last Name:
          <input type="text" value={lastName} onChange={handleLastNameChange} />
        </label>
        <br />
        <label>
          Department:
          <input type="text" value={department} onChange={handleDepartmentChange} />
        </label>
        <br />
        <button type="submit">Add Employee</button>
      </form>


      <ul>
        <h3> All Employees</h3>
        {allEmployees.map(allEmployees => (
          <li key={allEmployees.id}>
            {allEmployees.id} {allEmployees.employee_first_name} {allEmployees.employee_last_name} - {allEmployees.department_name}
          </li>
        ))}
      </ul>
      <p> </p>
      <ul>
          <h3> All Task</h3>
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
