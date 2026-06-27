import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BookOpen, Menu, X } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
       
          <Link to="/" className="flex items-center space-x-2">
            <BookOpen className="w-8 h-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">BookStore</span>
          </Link>

          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium transition">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 font-medium transition">About</Link>
            <Link to="/products" className="text-gray-700 hover:text-blue-600 font-medium transition">Products</Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 font-medium transition">Contact</Link>
            
            <div className="flex items-center space-x-4 ml-4">
              {user ? (
                <>
                  <Link to="/my-orders" className="text-gray-700 hover:text-blue-600 font-medium">My Orders</Link>
                  <button onClick={logout} className="text-gray-700 hover:text-blue-600 font-medium">Logout</button>
                </>
              ) : (
                <>
                  <button onClick={() => navigate('/login')} className="text-gray-700 hover:text-blue-600 font-medium">Login</button>
                  <button onClick={() => navigate('/register')} className="text-gray-700 hover:text-blue-600 font-medium">Register</button>
                </>
              )}
            </div>
          </div>

         
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 bg-white border-t border-gray-100">
            <Link to="/" className="block py-2 px-4 text-gray-700 hover:bg-gray-50">Home</Link>
            <Link to="/about" className="block py-2 px-4 text-gray-700 hover:bg-gray-50">About</Link>
            <Link to="/products" className="block py-2 px-4 text-gray-700 hover:bg-gray-50">Products</Link>
            <Link to="/contact" className="block py-2 px-4 text-gray-700 hover:bg-gray-50">Contact</Link>
            {!user && (
              <>
                <Link to="/login" className="block py-2 px-4 text-gray-700 hover:bg-gray-50">Login</Link>
                <Link to="/register" className="block py-2 px-4 text-gray-700 hover:bg-gray-50">Register</Link>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;