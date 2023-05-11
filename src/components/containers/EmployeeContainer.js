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
    this.props.fetchEmployee(this.props.match.params.id);
    this.props.fetchTask();
  }

  render() {
    return (
      <EmployeeView 
        employee={this.props.employee}
        editTask={this.props.editTask}
        allTask={this.props.allTask}
      />
    );
  }
}

const mapState = (state) => {
  return {
    employee: state.employee,
    allTask: state.allTask,

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