import './App.css';
import { useState } from 'react';
import axios from 'axios';

function App() {
  // get state for all employees and task
  const [allEmployees, getEmployees] = useState([]);
  const [allTasks, getTasks] = useState([]);

  // set states for add a task
  const [description, setDescription] = useState('');
  const [assignTo, setAssignTo] = useState('');
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
  // set state for edit employee
  // const [editEmployee, setEditEmployee] = useState({
  //   id: '',
  //   employee_first_name: '',
  //   employee_last_name: '',
  //   department_name: ''
  // });
  const [deleteEmployeeId, setDeleteEmployeeId] = useState('');


  // onChange handler for each input for task
  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };
  const handleAssignToChange = (event) => {
    setAssignTo(event.target.value);
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
      assigned_to: assignTo,
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
  // get one employee request API call
  const getOneEmployee = async () => {
    try {
      const response = await axios.get(`http://localhost:4000/employees/${employee.id}`);
      setEmployee(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  // get one task request API call
  const getOneTask = async () => {
    try {
      const response = await axios.get(`http://localhost:4000/tasks/${task.id}`);
      setTask(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  const handleDeleteEmployee = async (employeeId) => {
    try {
      await axios.delete(`http://localhost:4000/employees/${employeeId}`);
      console.log('Employee deleted'); // Optional: Display a success message
      // Perform any additional actions after deleting the employee
    } catch (error) {
      console.error(error);
    }
  };

  // const handleUpdateEmployee = async (employeeId, updatedEmployee) => {
  //   try {
  //     const response = await axios.put(`http://localhost:4000/employees/${employeeId}`, updatedEmployee);
  //     console.log(response.data); // Optional: Display the response data
  //     // Perform any additional actions after updating the employee
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };


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
          Assigned to:
          <input type="text" value={assignTo} onChange={handleAssignToChange} />
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
        <p>Completion status: {task.completion_status ? 'Complete' : 'Incomplete'}</p>
      </div>

      {/* <h2>Edit employee</h2>
      <form onSubmit={handleUpdateEmployee}>
      <label onSubmit={handleSubmitTasks}>
          First Name:
          <input type="text" value={firstName} onChange={handleFirstNameChange} />
        </label>
        <br/>
        <label>
          Last Name:
          <input type="text" value={lastName} onChange={handleLastNameChange} />
        </label>
        <br/>
        <label>
          Department:
          <input type="text" value={department} onChange={handleDepartmentChange} />
        </label>
        <br/>
        <button type="submit">Update Employee</button>
      </form> */}

      <h2>Delete Employee</h2>

      <input
        type="text"
        value={deleteEmployeeId}
        onChange={(e) => setDeleteEmployeeId(e.target.value)}
      />
      <button onClick={() => handleDeleteEmployee(deleteEmployeeId)}>Delete Employee</button>

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
