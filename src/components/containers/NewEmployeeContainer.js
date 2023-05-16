import { Component } from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';

import NewEmployeeView from '../views/NewEmployeeView';
import { addEmployeeThunk } from '../../store/thunks';


class NewEmployeeContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
          id: "",
          employee_first_name: "", 
          employee_last_name: "",
          department_name: "", 
          redirect: false, 
          redirectId: null,
          error: ""
        };
    }

    handleChange = event => {
      this.setState({
        [event.target.name]: event.target.value
      });
    }

    handleSubmit = async event => {
        event.preventDefault();
        if(this.state.first_name===""){
          this.setState({error:"First name field is required"});
          return;
        }
        if(this.state.last_name===""){
            this.setState({error:"Last name field is required"});
            return;
        }
        if(this.state.department===""){
            this.setState({error:"department field is required"});
            return;
        }
        let employee = {
            id: this.state.id,
            first_name: this.state.employee_first_name,
            last_name: this.state.employee_last_name,
            department: this.state.department_name,
        };
        
        let newEmployee = await this.props.addEmployee(employee);

        this.setState({
          redirect: true, 
          redirectId: newEmployee.id,
          error: ""
        });
    }

    componentWillUnmount() {
        this.setState({redirect: false, redirectId: null});
    }

    render() {
        if(this.state.redirect) {
          return (<Navigate to={`/employees/${this.state.redirectId}`}/>)
        }
        return (
          <NewEmployeeView 
            handleChange={this.handleChange} 
            handleSubmit={this.handleSubmit}
            error={this.state.error}      
          />
        );
    }
}

const mapDispatch = (dispatch) => {
    return({
        addEmployee: (employee) => dispatch(addEmployeeThunk(employee)),
    })
}

export default connect(null, mapDispatch)(NewEmployeeContainer);