import { Link } from 'react-router-dom';

const HomePageView = () => {
    return (
        <div>
            <h1>Employee Management app</h1>
            <Link to={'/employees'} > All Employees </Link>
            <Link to={'/tasks'} > All Tasks </Link>
        </div>
    );
};

export default HomePageView;