import React from "react";
import { Link } from "react-router-dom";
import logo from '../img/logo192.png';

const TaskView = (props) => {
  const { task, employee } = props;

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="navbar-links">
        <Link to={`/tasks`}>
          <button className="button2">View all tasks</button>
        </Link>
        <Link to="/">
          <button className="button2">Go to Home Page</button>
        </Link>
        </div>
      </nav>
    <div>
      <h1>{task.description}</h1>
      {task.assigned_to ? (
        <h3>
          Employee: {employee.employee_first_name} {employee.employee_last_name}
        </h3>
      ) : (
        <h3>Unassigned</h3>
      )}
      <Link to={`/edittask/${task.id}`} className="link">Edit task information</Link>
      <br />
    </div>
    </div>
  );
};

export default TaskView;





