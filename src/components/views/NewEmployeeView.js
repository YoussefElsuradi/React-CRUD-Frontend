import { Link } from 'react-router-dom';

const NewEmployeeView = (props) => {
    const {handleChange, handleSubmit, error } = props;
  
    return (
      <div className="root">
        <div className="formContainer">
          <div className="formDesciption">
            <h2 style={{fontWeight: 'bold', fontFamily: 'Courier, sans-serif', fontSize: '20px', color: '#11153e'}}>
              New Employee
            </h2>
          </div>
          <form style={{textAlign: 'center'}} onSubmit={(e) => handleSubmit(e)}>
            <label style= {{color:'#11153e', fontWeight: 'bold'}}>First Name: </label>
            <input type="text" name="firstName" onChange ={(e) => handleChange(e)} />
            <br/>
            <br/>

            <label style={{color:'#11153e', fontWeight: 'bold'}}>Last Name: </label>
            <input type="text" name="lastName" onChange={(e) => handleChange(e)} />
            <br/>
            <br/>
  
            <label style={{color:'#11153e', fontWeight: 'bold'}}>Department: </label>
            <input type="text" name="department" onChange={(e) => handleChange(e)} />
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
  
  export default NewEmployeeView;