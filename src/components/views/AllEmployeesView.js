import { Link } from 'react-router-dom';

const AllEmployeesView = (props) => {
  let { employees, deleteEmployee } = props;

  if (!employees.length) {
    return (
      <div>
        <p>There are no Employees</p>
        <Link to="/newemployee">
          <button>Add New Employee</button>
        </Link>
      </div>
    );
  }

  return (
    <div>
      {employees.map((employee) => {
        let first_name = employee.employee_first_name;
        return (
          <div key={employee.id}>
            <Link to={`/employees/${employee.id}`}>
              <h1>{first_name}</h1>
            </Link>
            <button onClick={() => deleteEmployee(employee.id)}>Delete</button>
          </div>
        );
      })}
      <Link to="/newemployee">
        <button>Add New Employee</button>
      </Link>
      <Link to="/">
        <button>Go to Home Page</button>
      </Link>
    </div>
  );
};

export default AllEmployeesView;