import { Link } from "react-router-dom";

const Navigation = () => {
  // Navigation bar with a link to the dashboard
  return (
    <nav className="flex justify-between items-center p-4 bg-blue-500 text-white">
      <div>
        <Link to="/" className="text-xl font-bold">
          <button className="border border-white px-4 py-2 rounded bg-transparent text-white hover:bg-white hover:text-blue-500 focus:outline-none">
            DASHBOARD
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
