import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ShoppingCart, User, Menu, X, LogOut } from 'lucide-react'
import { useAuth } from '../../context/AuthContext'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-3xl">📚</span>
              <span className="text-2xl font-bold text-primary">BookStore</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-primary transition font-medium">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-primary transition font-medium">About</Link>
            <Link to="/products" className="text-gray-700 hover:text-primary transition font-medium">Products</Link>
            <Link to="/contact" className="text-gray-700 hover:text-primary transition font-medium">Contact</Link>
            
            <div className="flex items-center space-x-4">
              <Link to="/cart" className="relative">
                <ShoppingCart className="w-6 h-6 text-gray-700 hover:text-primary transition" />
                <span className="absolute -top-2 -right-2 bg-accent text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">0</span>
              </Link>
              
              {user ? (
                <div className="flex items-center space-x-4">
                  <Link to="/my-orders" className="text-gray-700 hover:text-primary font-medium">My Orders</Link>
                  <div className="flex items-center space-x-2 bg-gray-100 px-3 py-1.5 rounded-full">
                    <User className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-gray-700">{user.firstName}</span>
                  </div>
                  <button onClick={handleLogout} className="flex items-center space-x-1 text-red-600 hover:text-red-700 font-medium transition">
                    <LogOut className="w-4 h-4" />
                    <span>Logout</span>
                  </button>
                </div>
              ) : (
                <>
                  <button onClick={() => navigate('/login')} className="text-gray-700 hover:text-primary font-medium transition">Login</button>
                  <button onClick={() => navigate('/register')} className="bg-primary text-white px-5 py-2 rounded-lg hover:bg-secondary transition font-medium shadow-md hover:shadow-lg">Register</button>
                </>
              )}
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link to="/" className="block py-2 text-gray-700 hover:text-primary">Home</Link>
            <Link to="/about" className="block py-2 text-gray-700 hover:text-primary">About</Link>
            <Link to="/products" className="block py-2 text-gray-700 hover:text-primary">Products</Link>
            <Link to="/contact" className="block py-2 text-gray-700 hover:text-primary">Contact</Link>
            <Link to="/cart" className="block py-2 text-gray-700 hover:text-primary">Cart</Link>
            {user ? (
              <>
                <Link to="/my-orders" className="block py-2 text-gray-700 hover:text-primary">My Orders</Link>
                <button onClick={handleLogout} className="block w-full text-left py-2 text-red-600">Logout</button>
              </>
            ) : (
              <>
                <Link to="/login" className="block py-2 text-gray-700 hover:text-primary">Login</Link>
                <Link to="/register" className="block py-2 text-primary font-semibold">Register</Link>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar