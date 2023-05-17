import { Link } from "react-router-dom";

const EmployeeView = (props) => {
  const { employee, editTask, allTasks } = props;
  let assignedTasks = allTasks.filter((task) => task.assigned_to === employee.id);
  let availableTasks = allTasks.filter((task) => task.assigned_to !== employee.id);

  const handleTaskAssignment = async (taskId, assignedTo) => {
    await editTask({ id: taskId, assigned_to: assignedTo });
    window.location.reload();
  };

  return (
    <div>
      <h1>{employee.employee_first_name}</h1>
      <h3>{employee.department_name}</h3>
      <Link to={`/editemployee/${employee.id}`}>Edit employee information</Link>
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly" }}>
        <div>
          Assigned tasks:
          {assignedTasks.map((task) => {
            return (
              <div key={task.id}>
                <Link to={`/tasks/${task.id}`}>
                  <h4>{task.description}</h4>
                </Link>
                <button onClick={() => handleTaskAssignment(task.id, null)}>x</button>
              </div>
            );
          })}
        </div>
        <div>
          Available tasks:
          {availableTasks.map((task) => {
            return (
              <div key={task.id}>
                <Link to={`/tasks/${task.id}`}>
                  <h4>{task.description}</h4>
                </Link>
                <button onClick={() => handleTaskAssignment(task.id, employee.id)}>+</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default EmployeeView;