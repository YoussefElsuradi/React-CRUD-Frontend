import React from "react";
import { Link } from "react-router-dom";

const TaskView = (props) => {
  const { task, employee } = props;

  return (
    <div>
      <h1>{task.description}</h1>
      {task.assigned_to ? (
        <h3>
          {employee.employee_first_name} {employee.employee_last_name}
        </h3>
      ) : (
        <h3>Unassigned</h3>
      )}
      <Link to={`/edittask/${task.id}`}>Edit task information</Link>
      <br />
      <Link to={`/tasks`}>View all tasks</Link>
      <Link to="/">
        <button>Go to Home Page</button>
      </Link>
    </div>
  );
};

export default TaskView;





