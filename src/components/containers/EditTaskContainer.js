import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Navigate, Link } from 'react-router-dom';

import { fetchTaskThunk, editTaskThunk, fetchAllEmployeesThunk } from '../../store/thunks';

const EditTaskContainer = ({
  task,
  allEmployees,
  editTask,
  fetchTask,
  fetchEmployee
}) => {
  const [state, setState] = useState({
    id: '',
    description: '',
    priority_level: '',
    completion_status: false,
    assigned_to: null,
    redirect: false,
    redirectId: null,
    error: ''
  });

  useEffect(() => {
    fetchTask();
    fetchEmployee();
    setState({
      description: task.description,
      priority_level: task.priority_level,
      assigned_to: task.assigned_to
    });
  }, []);

  const handleChange = event => {
    setState({
      ...state,
      [event.target.name]: event.target.value
    });
  };

  const handleSelectChange = event => {
    if (event.target.value === "employee") {
      setState({ ...state, assigned_to: null });
    } else {
      setState({ ...state, assigned_to: event.target.value });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (state.description === '') {
      setState({ ...state, error: 'Error: description cannot be empty' });
      return;
    }

    let updatedTask = {
      id: task.id,
      description: state.description,
      priority_level: state.priority_level,
      completion_status: state.handleSelectChange,
      assigned_to: state.assigned_to
    };

    try {
      await editTask(updatedTask);
      setState({ ...state, redirect: true, error: '' });
    } catch (error) {
      console.error(error);
    }

    setState({
      ...state,
      redirect: true,
      redirectId: task.id
    });
  };

  useEffect(() => {
    return () => {
      setState({ redirect: false, redirectId: null });
    };
  }, []);

  let assignedEmployee = task.assigned_to;

  let otherEmployees = allEmployees.filter(
    employee => employee.id !== assignedEmployee
  );

  let thisEmployee = allEmployees.filter(
    employee => employee.id === assignedEmployee
  );

  if (state.redirect) {
    return <Navigate to={`/tasks/${state.redirectId}`} />;
  }

  return (
    <div>
      <form style={{ textAlign: 'center' }} onSubmit={handleSubmit}>
        <label style={{ color: '#11153e', fontWeight: 'bold' }}>
          Description:{' '}
        </label>
        <input
          type="text"
          name="description"
          value={state.description || ''}
          placeholder={task.description}
          onChange={handleChange}
        />
        <br />

        <label style={{ color: '#11153e', fontWeight: 'bold' }}>
          Priority Level:{' '}
        </label>
        <input
          type="number"
          name="priority_level"
          value={state.priority_level || ''}
          placeholder={task.priority_level}
          onChange={handleChange}
        />
        <br />

        <label style={{ color: '#11153e', fontWeight: 'bold' }}>
          Completion Status:{' '}
        </label>
        <input
          type="bool"
          name="completion_status"
          value={state.completion_status || ''}
          placeholder={task.completion_status}
          onChange={handleChange}
        />
        <br />

        <select onChange={handleSelectChange}>
        {task.employee !== null ? (
          thisEmployee.map(employee => (
            <option value={task.assigned_to}>
              {employee.employee_first_name + ' (current)'}
            </option>
          ))
        ) : (
          <option value="employee">Employee</option>
        )}
            {otherEmployees.map(employee => {
            return (
            <option value={employee.id} key={employee.id}>
            {employee.employee_first_name}
            </option>
            );
            })}
            {task.employee !== null && <option value="employee">Employee</option>}
            </select>  

            <button type="submit">Submit</button>
  </form>

  {state.error !== '' && <p>{state.error}</p>}

  {task.assigned_to !== null ? (
  <div>
    <span style={{ display: 'inline-block', marginRight: '10px' }}>
      Current employee:
    </span>
    {thisEmployee.map(employee => (
      <div key={employee.id} style={{ display: 'inline-block' }}>
        <Link to={`/employees/${task.assigned_to}`}>
          {employee.employee_first_name}
        </Link>
        <button
          onClick={async () => {
            await editTask({ id: task.id, assigned_to: null });
            fetchTask(task.id);
          }}
        >
          Unassign
        </button>
      </div>
    ))}
  </div>
) : (
  <div>No employee currently assigned</div>
)}

  <div>
    {' '}
    Other employees:
    {otherEmployees.map(employee => {
      return (
        <div key={employee.id}>
          <Link to={`/employees/${employee.id}`}>
            <h4>{employee.employee_first_name}</h4>
          </Link>
          <button
            onClick={async () => {
              await editTask({ id: task.id, assigned_to: employee.id });
              fetchTask(task.id);
            }}
          >
            Assign this employee
          </button>
        </div>
      );
    })}
  </div>
</div>);
};

const mapState = (state) => {
return {
task: state.task,
allEmployees: state.allEmployees
};
};

const mapDispatch = (dispatch) => {
return {
editTask: (task) => dispatch(editTaskThunk(task)),
fetchTask: (id) => dispatch(fetchTaskThunk(id)),
fetchEmployee: () => dispatch(fetchAllEmployeesThunk())
};
};

export default connect(mapState, mapDispatch)(EditTaskContainer);