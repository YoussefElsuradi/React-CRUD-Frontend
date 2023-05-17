import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';

import NewTaskView from '../views/NewTaskView';
import { addTaskThunk, fetchEmployeeThunk } from '../../store/thunks';

const NewTaskContainer = ({ addTask, fetchEmployee }) => {
  const [state, setState] = useState({
    description: '',
    priority_level: '',
    assigned_to: null,
    completion_status: false,
    redirect: false,
    redirectId: null,
    error: ''
  });

  const handleChange = event => {
    setState({
      ...state,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = async event => {
    event.preventDefault();
    if (state.description === '') {
      setState({ ...state, error: 'Description field is required' });
      return;
    }

    let task = {
      description: state.description,
      priority_level: state.priority_level,
      completion_status: state.completion_status,
      assigned_to: state.assigned_to
    };

    let newTask = await addTask(task);

    setState({
      ...state,
      redirect: true,
      redirectId: newTask.id,
      error: ''
    });
  };

  useEffect(() => {
    return () => {
      setState({ redirect: false, redirectId: null });
    };
  }, []);

  if (state.redirect) {
    return <Navigate to={`/tasks/${state.redirectId}`} />;
  }

  return (
    <NewTaskView
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      error={state.error}
    />
  );
};

const mapDispatch = (dispatch) => {
  return {
    addTask: (task) => dispatch(addTaskThunk(task)),
    fetchEmployee: (id) => dispatch(fetchEmployeeThunk(id))
  };
};

export default connect(null, mapDispatch)(NewTaskContainer);