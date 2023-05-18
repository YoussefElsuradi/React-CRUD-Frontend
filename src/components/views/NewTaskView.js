import { Link } from 'react-router-dom';
import logo from '../img/logo192.png';

const NewTaskView = (props) => {
    const {handleChange, handleSubmit, handleCheckboxChange, error } = props;
  
    return (
      <div>
      <nav className="navbar">
        <div className="navbar-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="navbar-links">
        <Link to="/">
            <button className="button2">Go to Home Page</button>
        </Link>
        </div>
      </nav>
      <div className="root">
        <div className="formContainer">
          <div className="formDesciption">
            <h2 style={{fontWeight: 'bold', fontFamily: 'Courier, sans-serif', fontSize: '20px', color: '#11153e'}}>
              New Task
            </h2>
          </div>
          <form style={{textAlign: 'center'}} onSubmit={(e) => handleSubmit(e)}>
            <label style= {{color:'#11153e', fontWeight: 'bold'}}>Description: </label>
            <input type="text" name="description" onChange ={(e) => handleChange(e)} />
            <br/>
            <br/>

            <label style={{color:'#11153e', fontWeight: 'bold'}}>Assigned To: </label>
            <input type="number" name="assigned_to" onChange={(e) => handleChange(e)} />
            <br/>
            <br/>
  
            <label style={{color:'#11153e', fontWeight: 'bold'}}>Priority Level: </label>
            <input type="number" name="priority_level" onChange={(e) => handleChange(e)} />
            <br/>
            <br/>
  
            <label style={{color:'#11153e', fontWeight: 'bold'}}>Completion Status:</label>
            <input type="checkbox" checked={props.completionStatus} onChange={handleCheckboxChange} className="checkbox"/>
            <br/>
            <br/>
  
            <button className="button1" type="submit">
              Submit
            </button>
            <br/>
            <br/>
          </form>
          {error!=="" && <p>{error}</p>}
          </div>
        </div>
        </div>
      
    )
  }
  
  export default NewTaskView;