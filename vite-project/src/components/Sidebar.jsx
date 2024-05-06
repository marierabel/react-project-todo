import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <>
      <div className="sidebar">
        <Link to="/">
          <p>DashBoard</p>
        </Link>
        <Link to="/about">
          <p>About</p>
        </Link>
        <Link to="/create">
          <p>create</p>
        </Link>
      </div>
    </>
  );
}

export default Sidebar;
