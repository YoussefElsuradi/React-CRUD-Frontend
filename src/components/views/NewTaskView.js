import { Link } from 'react-router-dom';

const NewTaskView = (props) => {
    const {handleChange, handleSubmit, handleCheckboxChange, error } = props;
  
    return (
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
            <input type="checkbox" checked={props.completionStatus} onChange={handleCheckboxChange} />
            <br/>
            <br/>
  
            <button type="submit">
              Submit
            </button>
            <br/>
            <br/>
          </form>

          <Link to="/">
        <button>Go to Home Page</button>
      </Link>
          {error!=="" && <p>{error}</p>}
          </div>
        </div>
    )
  }
  
  export default NewTaskView;