import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="home-container">
      <h1>GitHub User Search App</h1>
      <Link to="/search" className="p-2 bg-green-500 text-white">Start Searching</Link>
    </div>
  );
};

export default HomePage;
