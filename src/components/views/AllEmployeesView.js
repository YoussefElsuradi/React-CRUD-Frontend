import { Link } from 'react-router-dom';
import logo from '../img/logo192.png';

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
      <nav className="navbar">
        <div className="navbar-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="navbar-links">
        <Link to="/newemployee">
        <button className="button2">Add New Employee</button>
      </Link>
      <Link to="/">
        <button className="button2">Go to Home Page</button>
      </Link>
        </div>
      </nav>
      
    <div>
      {employees.map((employee) => {
        let first_name = employee.employee_first_name;
        return (
          <div key={employee.id}>
            <Link to={`/employees/${employee.id}`} className="link">
              {first_name}
            </Link>
            <button onClick={() => deleteEmployee(employee.id)} className="button1">Delete</button>
          </div>
        );
      })}
    </div>
    </div>
  );
};

export default AllEmployeesView;