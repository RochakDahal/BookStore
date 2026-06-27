import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import api from '../utils/api';
import { Star, ShoppingCart, Heart, CheckCircle } from 'lucide-react';

const ProductDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchBook = async () => {
      setLoading(true);
      try {
        const { data } = await api.get(`/books/${id}`);
        setBook(data);
      } catch (error) {
        console.error('Error fetching book:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchBook();
  }, [id]);

  if (loading) return <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div></div>;
  if (!book) return <div className="min-h-screen flex flex-col items-center justify-center"><h2 className="text-2xl font-bold">Book Not Found</h2><Link to="/products" className="text-primary mt-4">Back to Products</Link></div>;

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 p-8 md:p-12">
            
            <div className="flex justify-center bg-gray-50 rounded-2xl p-8">
              <img 
                src={book.coverImage} 
                alt={book.title} 
                className="max-h-500 w-auto object-contain shadow-lg rounded-lg"
              />
            </div>

            
            <div className="flex flex-col justify-center">
              <span className="text-primary font-bold uppercase tracking-wide mb-2">{book.category?.name}</span>
              <h1 className="text-4xl font-extrabold text-gray-900 mb-2">{book.title}</h1>
              <p className="text-xl text-gray-500 mb-6">by {book.author}</p>

              <div className="flex items-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-5 h-5 ${i < Math.floor(book.rating || 0) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                ))}
                <span className="ml-2 text-gray-600">({book.rating || 0} / 5)</span>
              </div>

              <p className="text-gray-600 mb-8 leading-relaxed">{book.description}</p>

              <div className="flex items-center mb-8">
                <span className="text-3xl font-bold text-gray-900">Rs. {book.price}</span>
                {book.stock > 0 ? (
                  <span className="ml-4 flex items-center text-green-600 text-sm font-medium bg-green-50 px-3 py-1 rounded-full">
                    <CheckCircle className="w-4 h-4 mr-1" /> In Stock
                  </span>
                ) : (
                  <span className="ml-4 text-red-600 text-sm font-medium bg-red-50 px-3 py-1 rounded-full">Out of Stock</span>
                )}
              </div>

           
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex items-center border border-gray-300 rounded-full px-4 py-2">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="text-gray-600 hover:text-primary px-2">-</button>
                  <span className="px-4 text-gray-900 font-medium">{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)} className="text-gray-600 hover:text-primary px-2">+</button>
                </div>

                <button disabled={book.stock === 0} className="flex-1 flex items-center justify-center space-x-2 bg-primary text-white px-8 py-3 rounded-full hover:bg-primary-hover transition font-bold disabled:opacity-50 shadow-lg">
                  <ShoppingCart className="w-5 h-5" />
                  <span>Add to Cart</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;