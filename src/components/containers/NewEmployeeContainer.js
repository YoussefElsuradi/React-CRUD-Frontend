import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';

import NewEmployeeView from '../views/NewEmployeeView';
import { addEmployeeThunk } from '../../store/thunks';

const NewEmployeeContainer = ({ addEmployee }) => {
  const [state, setState] = useState({
    id: '',
    employee_first_name: '',
    employee_last_name: '',
    department_name: '',
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
    if (state.employee_first_name === '') {
      setState({ ...state, error: 'First name field is required' });
      return;
    }
    if (state.employee_last_name === '') {
      setState({ ...state, error: 'Last name field is required' });
      return;
    }
    if (state.department_name === '') {
      setState({ ...state, error: 'Department field is required' });
      return;
    }
    let employee = {
      first_name: state.employee_first_name,
      last_name: state.employee_last_name,
      department: state.department_name
    };

    let newEmployee = await addEmployee(employee);

    setState({
      ...state,
      redirect: true,
      redirectId: newEmployee.id,
      error: ''
    });
  };

  useEffect(() => {
    return () => {
      setState({ redirect: false, redirectId: null });
    };
  }, []);

  if (state.redirect) {
    return <Navigate to={`/employees/${state.redirectId}`} />;
  }

  return (
    <NewEmployeeView
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      error={state.error}
    />
  );
};

const mapDispatch = (dispatch) => {
  return {
    addEmployee: (employee) => dispatch(addEmployeeThunk(employee))
  };
};

export default connect(null, mapDispatch)(NewEmployeeContainer);