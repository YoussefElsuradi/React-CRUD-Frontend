import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import ErrorBoundary from './ErrorBoundary';

import {
  HomePageContainer,
  AllEmployeesContainer,
  EmployeeContainer,
  AllTasksContainer,
  TaskContainer,
  NewTaskContainer,
  EditTaskContainer,
  EditEmployeeContainer,
  NewEmployeeContainer
} from './components/containers';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="https://youssefelsuradi.github.io/React-CRUD-Frontend">
        <ErrorBoundary>
          <Routes>
            <Route path="/" element={<HomePageContainer />} />
            <Route path="/employees" element={<AllEmployeesContainer />} />
            <Route path="/employees/:id" element={<EmployeeContainer />} />
            <Route path="/tasks" element={<AllTasksContainer />} />
            <Route path="/newtask" element={<NewTaskContainer />} />
            <Route path="/tasks/:id" element={<TaskContainer />} />
            <Route path="/edittask/:id" element={<EditTaskContainer />} />
            <Route path="/editemployee/:id" element={<EditEmployeeContainer />} />
            <Route path="/newemployee" element={<NewEmployeeContainer />} />
          </Routes>
        </ErrorBoundary>
      </BrowserRouter>
    </div>
  );
}

export default App;


// function App() {
//   return (
//     <div className="App">
      
//         <ErrorBoundary>
//           <Routes>
//             <Route path="/" component={HomePageContainer} />
//             <Route path="/employees" component={AllEmployeesContainer} />
//             <Route path="/employees/:id" component={EmployeeContainer} />
//             <Route path="/tasks" component={AllTasksContainer} />
//             <Route path="/newtask" component={NewTaskContainer} />
//             <Route path="/tasks/:id" component={TaskContainer} />
//             <Route path="/edittask/:id" component={EditTaskContainer} />
//             <Route path="/editemployee/:id" component={EditEmployeeContainer} />
//             <Route path="/newemployee" component={NewEmployeeContainer} />
//           </Routes>
//         </ErrorBoundary>
      
//     </div>
//   );
// }

// export default App;

// function App() {
//   return (
//     <div className="App">
//        <BrowserRouter basename="https://youssefelsuradi.github.io/React-CRUD-Frontend" >
              
        
//       <ErrorBoundary>
     
//       <Routes>
//         <Route path="/" Component={HomePageContainer} />
//         <Route path="/employees" Component={AllEmployeesContainer} />
//         <Route path="/employees/:id" Component={EmployeeContainer} />
//         <Route path="/tasks" Component={AllTasksContainer} />
//         <Route path="/newtask" Component={NewTaskContainer} />
//         <Route path="/tasks/:id" Component={TaskContainer} />
//         <Route path="/edittask/:id" Component={EditTaskContainer} />
//         <Route path="/editemployee/:id" Component={EditEmployeeContainer} />
//         <Route path="/newemployee" Component={NewEmployeeContainer} />
//       </Routes>
//       </ErrorBoundary>

//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;

// ----------------------------------------------------------------