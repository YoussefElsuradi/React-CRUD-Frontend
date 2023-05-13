import React, { Component } from "react";
import { connect } from "react-redux";
import { 
  fetchEmployeeThunk,
  fetchAllTasksThunk,
  editTaskThunk 
} from "../../store/thunks";

import { EmployeeView } from "../views";

class EmployeeContainer extends Component {
  componentDidMount() {
    this.props.fetchEmployee();
    this.props.fetchTask();
  }

  render() {
    return (
      <EmployeeView 
        employee={this.props.employee}
        editTask={this.props.editTask}
        allTasks={this.props.allTasks}
      />
    );
  }
}

const mapState = (state) => {
  return {
    employee: state.employee,
    allTasks: state.allTasks,

  };
};

const mapDispatch = (dispatch) => {
  return {
    fetchEmployee: (id) => dispatch(fetchEmployeeThunk(id)),
    editTask: (task) => dispatch(editTaskThunk(task)),
    fetchTask: () => dispatch(fetchAllTasksThunk()),

  };
};

export default connect(mapState, mapDispatch)(EmployeeContainer);