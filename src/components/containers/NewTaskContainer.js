import { Component } from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';

import NewTaskView from '../views/NewTaskView';
import { addTaskThunk } from '../../store/thunks';


class NewTaskContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
          id: "",
          description: "", 
          priority_level: "",
          assigned_to: "",
          completion_status: false, 
          employeeId: null, 
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
        if(this.state.description===""){
          this.setState({error:"Description field is required"});
          return;
        }
        if(this.state.priority_level===""){
          this.setState({error:"Priority level field is required"});
          return;
        }
        if(this.state.completion_status===""){
          this.setState({error:"completion status field is required"});
          return;
        }
        let task = {
            description: this.state.description,
            priority_level: this.state.priority_level,
            completion_status: this.state.completion_status,
            assigned_to: this.state.assigned_to
        };
        
        let newTask = await this.props.addTask(task);

        this.setState({
          redirect: true, 
          redirectId: newTask.id,
          error: ""
        });
    }

    componentWillUnmount() {
        this.setState({redirect: false, redirectId: null});
    }

    render() {
        if(this.state.redirect) {
          return (<Navigate to={`/task/${this.state.redirectId}`}/>)
        }
        return (
          <NewTaskView 
            handleChange={this.handleChange} 
            handleSubmit={this.handleSubmit}
            error={this.state.error}      
          />
        );
    }
}

const mapDispatch = (dispatch) => {
    return({
        addTask: (task) => dispatch(addTaskThunk(task)),
    })
}

export default connect(null, mapDispatch)(NewTaskContainer);