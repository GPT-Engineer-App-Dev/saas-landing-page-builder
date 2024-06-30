import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          SaaS Platform
        </Link>
        <div className="space-x-4">
          <Link to="/" className="text-gray-600 hover:text-gray-800">
            Home
          </Link>
          <Link to="/features" className="text-gray-600 hover:text-gray-800">
            Features
          </Link>
          <Link to="/pricing" className="text-gray-600 hover:text-gray-800">
            Pricing
          </Link>
          <Link to="/contact" className="text-gray-600 hover:text-gray-800">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

const NavbarLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default NavbarLayout;