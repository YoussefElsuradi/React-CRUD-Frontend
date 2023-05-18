import { Link } from 'react-router-dom';
import logo from '../img/logo192.png';

const AllTasksView = (props) => {
    let {tasks, deleteTask} = props;

    if (!tasks.length){
        return (
            <div>
                <p>There are no Tasks</p>
                <Link to={`/newtask`}>
                    <button>Add New Task</button>
                </Link>
            </div>
        );
    }

    return (
        <div>
      <nav className="navbar">
        <div className="navbar-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="navbar-links">
        <Link to={`/newtask`}>
            <button className="button2">Add New Task</button>
        </Link>
        <Link to="/">
            <button className="button2">Go to Home Page</button>
        </Link>
        </div>
      </nav>
        <div>
            {tasks.map((task) => {
                let description = task.description;
                return (
                    <div key={task.id}>
                        <Link to={`/tasks/${task.id}`} className="link">
                            {description}
                        </Link>
                        <button onClick={() => deleteTask(task.id)} className="button1">Delete</button>
                    </div>
                );
            }
            )}
            <br></br>
        </div>
        </div>
    );
};

export default AllTasksView;