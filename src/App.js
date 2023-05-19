



import './App.css';

function App() {
  return (
    <div className="App">

      <ErrorBoundary>
      <Routes>
        <Route path="/" Component={HomePageContainer} />
        <Route path="/employees" Component={AllEmployeesContainer} /> 

        <Route path="/employees/:id" Component={EmployeeContainer} />
        <Route path="/tasks" Component={AllTasksContainer} />

        <Route path="/newtask" Component={NewTaskContainer} />
        <Route path="/tasks/:id" Component={TaskContainer} />
        <Route path="/edittask/:id" Component={EditTaskContainer} />
        
        <Route path="/editemployee/:id" Component={EditEmployeeContainer} />
        <Route path="/newemployee" Component={NewEmployeeContainer} />
      </Routes>
      </ErrorBoundary>

    </div>
  );
}

export default App;
