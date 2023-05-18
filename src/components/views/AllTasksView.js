import { Link } from 'react-router-dom';

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
            {tasks.map((task) => {
                let description = task.description;
                return (
                    <div key={task.id}>
                        <Link to={`/tasks/${task.id}`}>
                            <h1>{description}</h1>
                        </Link>
                        <button onClick={() => deleteTask(task.id)}>Delete</button>
                    </div>
                );
            }
            )}
            <br></br>
            <Link to={`/newtask`}>
                <button>Add New Task</button>
            </Link>
            <Link to="/">
        <button>Go to Home Page</button>
      </Link>
        </div>
    );
};

export default AllTasksView;