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
        <h3>No employee assigned</h3>
      )}
      <Link to={`/edittask/${task.id}`}>Edit task information</Link>
      <br />
      <Link to={`/tasks`}>View all tasks</Link>
    </div>
  );
};

export default TaskView;





