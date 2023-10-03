import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav className="bg-blue-500 h-14 py-2 flex justify-around items-center text-white sticky z-10">
        <div className="brand">
          <h1 className="text-2xl font-semibold">
            <Link to="/">Host</Link>
          </h1>
        </div>
        <div>
          <ul className="flex space-x-5">
            <li>
              <Link to="/remote1" className="hover:text-blue-200 text-sm">
                React App
              </Link>
            </li>
            <li>
              <Link to="/remote2" className="hover:text-blue-200 text-sm">
                Vue App
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <ul className="flex space-x-5">
            <li>
              <Link to="/" className="hover:text-blue-200 text-sm">
                Login
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-blue-200 text-sm">
                Register
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;
