import React from "react";
import { Link } from "react-router-dom";

const TaskView = (props) => {
  const { task } = props;
  
  return (
    <div>
      <h1>{task.description}</h1>
      {task.assigned_to ? (
        <h3>{task.assigned_to.employee_first_name} {task.assigned_to.employee_last_name}</h3>
      ) : (
        <h3>No employee assigned</h3>
      )}
      <Link to={`/edittask/${task.id}`}>Edit task information</Link>
      <br/>
      <Link to={`/tasks`}>View all tasks</Link>
    </div>
  );
};

export default TaskView;






