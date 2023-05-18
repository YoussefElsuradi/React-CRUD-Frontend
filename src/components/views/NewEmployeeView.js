import { Link } from 'react-router-dom';
import logo from '../img/logo192.png';

const NewEmployeeView = (props) => {
    const {handleChange, handleSubmit, error } = props;
  
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
  
  export default NewEmployeeView;