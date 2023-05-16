import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchTaskThunk } from "../../store/thunks";
import TaskView from "../views/TaskView";
import { useParams } from "react-router-dom";

const TaskContainer = (props) => {
  const { id } = useParams();

  useEffect(() => {
    props.fetchTask(id);
  }, [id, props.fetchTask]);

  return (
    <TaskView 
      task={props.task}
    />
  );
}

const mapState = (state) => {
  return {
    task: state.task,
  };
};

const mapDispatch = (dispatch) => {
  return {
    fetchTask: (id) => dispatch(fetchTaskThunk(id)),
  };
};

export default connect(mapState, mapDispatch)(TaskContainer);