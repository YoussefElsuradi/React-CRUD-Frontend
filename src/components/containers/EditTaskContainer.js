import { Component } from 'react';
import { connect } from 'react-redux';
import { Navigate, Link } from 'react-router-dom';

import { fetchTaskThunk, editTaskThunk, fetchAllEmployeesThunk  } from '../../store/thunks';

class EditTaskContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            id: "",
            description: "", 
            priority_level: "",
            completion_status: "", 
            assigned_to: null,
            redirect: false, 
            redirectId: null,
            error: ""
          };
    }

    componentDidMount() {
        this.props.fetchTask(this.id);
        this.props.fetchEmployee();
        this.setState({
            description: this.props.task.description, 
            priority_level: this.props.task.priority_level,
            assigned_to: this.props.task.assigned_to, 
        });
      }

    handleChange = event => {
      this.setState({
        [event.target.name]: event.target.value
      });
    }

    handleSelectChange = event => {
      if (event.target.value === "employee") {
        this.setState({assigned_to:null});
      } else {
        this.setState({assigned_to: event.employee.value})
      }
    }

    handleSubmit = event => {
        event.preventDefault();
        if (this.state.description === "") {
          this.setState({error: "Error: description cannot be empty"});
          return;
        }

        let task = {
            id: this.props.task.id,
            description: this.state.description,
            priority_level: this.state.priority_level,
            assigned_to: this.state.assigned_to
        };
        
        this.props.editTask(task);

        this.setState({
          redirect: true, 
          redirectId: this.props.task.assigned_to
        });

    }

    componentWillUnmount() {
        this.setState({redirect: false, redirectId: null});

    }

    render() {
        let { task, allEmployees, editTask, fetchTask} = this.props;
        let assignedEmployee = task.assigned_to;

        let otherEmployees = allEmployees.filter(employee => employee.id!==assignedEmployee);
      
        if(this.state.redirect) {
          return (<Navigate to={`/tasks/${this.state.redirectId}`}/>)
        }

        return (
        <div>
        <form style={{textAlign: 'center'}} onSubmit={(e) => this.handleSubmit(e)}>
            <label style= {{color:'#11153e', fontWeight: 'bold'}}>Description: </label>
            <input type="text" name="description" value={this.state.description || ''} placeholder={task.description} onChange ={(e) => this.handleChange(e)}/>
            <br/>

            <label style={{color:'#11153e', fontWeight: 'bold'}}>Priority Level: </label>
            <input type="number" name="priority_level" value={this.state.priority_level || ''} placeholder={task.priority_level} onChange={(e) => this.handleChange(e)}/>
            <br/>

            <select onChange={(e) => this.handleSelectChange(e)}>
              {task.employee!==null ?
                <option value={task.assigned_to}>{task.employee.employee_first_name+" (current)"}</option>
              : <option value="employee">Employee</option>
              }
              {otherEmployees.map(employee => {
                return (
                  <option value={employee.id} key={employee.id}>{employee.employee_first_name}</option>
                )
              })}
              {task.employee!==null && <option value="employee">Employee</option>}
            </select>
  
            <button type="submit">
              Submit
            </button>

          </form>
          { this.state.error !=="" && <p>{this.state.error}</p> }

          {task.assigned_to !== null ?
            <div> Current employee:  
            <Link to={`/employees/${task.assigned_to}`}>{task.employee.employee_first_name}</Link>
            <button onClick={async () => {await editTask({id:task.id, assigned_to: null});  fetchTask(task.id)}}>Unassign</button>
            </div>
            : <div> No employee currently assigned </div>
          }

          <div> Other employees
          {otherEmployees.map(employee => {
            return (
            <div key={employee.id}>
                <Link to={`/employees/${employee.id}`}>
                  <h4>{employee.employee_first_name}</h4>
                </Link>
                <button onClick={async() => {await editTask({id:task.id, assigned_to: employee.id}); fetchTask(task.id)}}>Assign this employee</button>
            </div>
            )})
          }
          </div>
        </div>
        )
    }
}

const mapState = (state) => {
    return {
      task: state.task,
      allEmployees: state.allEmployees
    };
  };

const mapDispatch = (dispatch) => {
    return({
        editTask: (task) => dispatch(editTaskThunk(task)),
        fetchTask: (id) => dispatch(fetchTaskThunk(id)),
        fetchEmployee: () => dispatch(fetchAllEmployeesThunk()),

    })
}

export default connect(mapState, mapDispatch)(EditTaskContainer);