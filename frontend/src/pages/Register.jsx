import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { User, Mail, Lock, Phone, MapPin, Eye, EyeOff } from 'lucide-react';

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', address: '', phone: '', gender: '',
    username: '', email: '', password: '', confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    if (formData.password !== formData.confirmPassword) {
      return setError('Passwords do not match');
    }
    if (!/^(97|98)\d{8}$/.test(formData.phone)) {
      return setError('Phone must start with 97 or 98 and be exactly 10 digits');
    }

    setLoading(true);
    try {
      await register(formData);
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center py-12 px-4">
      <div className="max-w-2xl w-full space-y-8 bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Create Account</h2>
          <p className="mt-2 text-sm text-gray-500">Join our community of book lovers</p>
        </div>

        {error && (
          <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm text-center">
            {error}
          </div>
        )}

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {[
              { name: 'firstName', icon: User, placeholder: 'First Name', type: 'text' },
              { name: 'lastName', icon: User, placeholder: 'Last Name', type: 'text' },
              { name: 'email', icon: Mail, placeholder: 'Email', type: 'email' },
              { name: 'username', icon: User, placeholder: 'Username', type: 'text' },
              { name: 'phone', icon: Phone, placeholder: 'Phone (97/98XXXXXXXX)', type: 'tel' },
            ].map((field) => (
              <div key={field.name} className="relative">
                <field.icon className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                <input
                  name={field.name}
                  type={field.type}
                  required
                  onChange={handleChange}
                  className="pl-10 w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-600 outline-none bg-gray-50 text-gray-900 placeholder-gray-400"
                  placeholder={field.placeholder}
                />
              </div>
            ))}

            
            <div className="relative">
              <select name="gender" required onChange={handleChange} className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-600 outline-none bg-gray-50 text-gray-900">
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>

          
            <div className="relative md:col-span-2">
              <MapPin className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
              <input name="address" required onChange={handleChange} className="pl-10 w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-600 outline-none bg-gray-50 text-gray-900 placeholder-gray-400" placeholder="Address" />
            </div>

            
            <div className="relative">
              <Lock className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
              <input name="password" type={showPassword ? "text" : "password"} required onChange={handleChange} className="pl-10 w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-600 outline-none bg-gray-50 text-gray-900 placeholder-gray-400" placeholder="Password" />
            </div>
            <div className="relative">
              <Lock className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
              <input name="confirmPassword" type={showPassword ? "text" : "password"} required onChange={handleChange} className="pl-10 w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-600 outline-none bg-gray-50 text-gray-900 placeholder-gray-400" placeholder="Confirm Password" />
              <button type="button" className="absolute right-3 top-3.5 text-gray-400" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>
          </div>

       
          <button type="submit" disabled={loading} className="w-full py-3 px-4 rounded-xl shadow-md text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 transition disabled:opacity-50">
            {loading ? 'Creating Account...' : 'Create Account'}
          </button>

          <div className="text-center">
            <p className="text-sm text-gray-600">
              Already have an account? <Link to="/login" className="font-bold text-blue-600 hover:text-blue-700">Login here</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;