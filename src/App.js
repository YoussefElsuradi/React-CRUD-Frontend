import './App.css';
import { useState } from 'react';
import axios from 'axios';

function App() {
  // get state for all employees and task
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

  // set state for one employee
  const [employee, setEmployee] = useState({
    id: '',
    employee_first_name: '',
    employee_last_name: '',
    department_name: '',
  });

  // set state for one task
  const [task, setTask] = useState({
    id: '',
    assigned_to: 0,
    description: '',
    priority_level: 0,
    completion_status: false
  });


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
  // get request AI call
  const getOneEmployee = async () => {
    try {
      const response = await axios.get(`http://localhost:4000/employees/${employee.id}`);
      setEmployee(response.data);
    } catch (error) {
      console.error(error);
    }
  };


  const getOneTask = async () => {
    try {
      const response = await axios.get(`http://localhost:4000/tasks/${task.id}`);
      setTask(response.data);
    } catch (error) {
      console.error(error);
    }
  }


  return (
    <div className='App'>
      <button onClick={fetchAllEmployees}>Fetch Employees</button>
      <button onClick={fetchAllTasks}>Fetch Task</button>

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
      {/* Search employee */}
      <h2>Search for a employee</h2>
      <input
        type="text"
        value={employee.id}
        onChange={(e) => setEmployee({ ...employee, id: e.target.value })}
      />
      <button onClick={getOneEmployee}>Search Employee</button>
      <div>
        <p>ID: {employee.id}</p>
        <p>First Name: {employee.employee_first_name}</p>
        <p>Last Name: {employee.employee_last_name}</p>
        <p>Department: {employee.department_name}</p>
      </div>
      <h2>Search for a Task</h2>
      <input
        type="text"
        value={task.id}
        onChange={(e) => setTask({ ...task, id: e.target.value })}
      />
      <button onClick={getOneTask}>Search Task</button>
      <div>
        <p>ID: {task.id}</p>
        <p>Assign to: {task.assigned_to}</p>
        <p>Description: {task.description}</p>
        <p>Priority: {task.priority_level}</p>
      </div>


      <ul>
        <h3> All Employees</h3>
        {allEmployees.map(allEmployees => (
          <li key={allEmployees.id}>
            ID: {allEmployees.id}, First Name: {allEmployees.employee_first_name}, Last Name: {allEmployees.employee_last_name}, Department: {allEmployees.department_name}
          </li>
        ))}
      </ul>
      <p> </p>
      <ul>
        <h3> All Task</h3>
        {allTasks.map(allTasks => (
          <li key={allTasks.id}>
            ID: {allTasks.id}, Assign To: {allTasks.assigned_to}, Description: {allTasks.description}, Priority: {allTasks.priority_level}, Completion: {allTasks.completion_status ? 'Complete' : 'Incomplete'}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
