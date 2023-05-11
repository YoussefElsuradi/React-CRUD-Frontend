// import { Component } from 'react';
// import { connect } from 'react-redux';
// import { Redirect } from 'react-router-dom';

// import NewEmployeeView from '../views/NewEmployeeView';
// import { addEmployeeThunk } from '../../store/thunks';


// class NewEmployeeContainer extends Component {
//     constructor(props){
//         super(props);
//         this.state = {
//           first_name: "", 
//           last_name: "",
//           department: "", 
//           employeeId: null, 
//           redirect: false, 
//           redirectId: null,
//           error: ""
//         };
//     }

//     handleChange = event => {
//       this.setState({
//         [event.target.name]: event.target.value
//       });
//     }

//     handleSubmit = async event => {
//         event.preventDefault();
//         if(this.state.name===""){
//           this.setState({error:"Name field is required"});
//           return;
//         }
//         let task = {
//             description: this.state.description,
//             priority_level: this.state.priority_level,
//             completion_status: this.state.completion_status,
//             employeeId: this.state.employeeId
//         };
        
//         let newTask = await this.props.addTask(task);

//         this.setState({
//           redirect: true, 
//           redirectId: newTask.id,
//           error: ""
//         });
//     }

//     componentWillUnmount() {
//         this.setState({redirect: false, redirectId: null});
//     }

//     render() {
//         if(this.state.redirect) {
//           return (<Redirect to={`/task/${this.state.redirectId}`}/>)
//         }
//         return (
//           <NewTaskView 
//             handleChange={this.handleChange} 
//             handleSubmit={this.handleSubmit}
//             error={this.state.error}      
//           />
//         );
//     }
// }

// const mapDispatch = (dispatch) => {
//     return({
//         addTask: (task) => dispatch(addTaskThunk(task)),
//     })
// }

// export default connect(null, mapDispatch)(NewTaskContainer);