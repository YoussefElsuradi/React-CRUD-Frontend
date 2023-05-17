import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchTaskThunk, fetchEmployeeThunk } from "../../store/thunks";
import TaskView from "../views/TaskView";
import { useParams } from "react-router-dom";

const TaskContainer = (props) => {
  const { id } = useParams();

  useEffect(() => {
    props.fetchTask(id);
    if (props.task.assigned_to) {
      props.fetchEmployee(props.task.assigned_to);
    }
  }, [id, props.fetchTask, props.fetchEmployee, props.task.assigned_to]);

  return <TaskView task={props.task} employee={props.employee} />;
};

const mapState = (state) => {
  return {
    task: state.task,
    employee: state.employee,
  };
};

const mapDispatch = (dispatch) => {
  return {
    fetchTask: (id) => dispatch(fetchTaskThunk(id)),
    fetchEmployee: (assigned_to) => dispatch(fetchEmployeeThunk(assigned_to)),
  };
};

export default connect(mapState, mapDispatch)(TaskContainer);