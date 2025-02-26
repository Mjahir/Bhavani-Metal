import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          Jay Bhavani Metal Corporation
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="hover:text-gray-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-gray-300">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gray-300">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        {/* Login & Signup Buttons */}
        <div className="flex space-x-4">
          <Link to="/login" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Login
          </Link>
          <Link to="/signup" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Signup
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
