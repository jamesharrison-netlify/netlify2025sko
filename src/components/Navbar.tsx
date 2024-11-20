import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const isActive = (path: string) =>
    location.pathname === path ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600';

  return (
    <nav className="bg-white shadow-lg border-b-4 border-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              
            </Link>
          </div>
          <div className="flex items-center space-x-8">
            <Link
              to="/"
              className={`${isActive('/')} transition-colors duration-200 font-medium`}
            >
              Home
            </Link>
            <Link
              to="/registration"
              className={`${isActive('/registration')} transition-colors duration-200 font-medium`}
            >
              Registration
            </Link>
            <Link
              to="/agenda"
              className={`${isActive('/agenda')} transition-colors duration-200 font-medium`}
            >
              Agenda
            </Link>
            <Link
              to="/travel"
              className={`${isActive('/travel')} transition-colors duration-200 font-medium`}
            >
              Travel
            </Link>
            <Link
              to="/faq"
              className={`${isActive('/faq')} transition-colors duration-200 font-medium`}
            >
              FAQ
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;