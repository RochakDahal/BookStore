import { Link } from 'react-router-dom';
import { Star, ShoppingCart } from 'lucide-react';

const ProductCard = ({ book }) => {
  return (
    <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col h-full border border-gray-100 group">
   
      <div className="relative h-64 bg-gray-50 p-6 flex items-center justify-center">
        <img 
          src={book.coverImage} 
          alt={book.title} 
          className="h-full w-auto object-contain shadow-md group-hover:scale-105 transition-transform duration-300"
        />
        {book.stock === 0 && (
          <div className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
            Out of Stock
          </div>
        )}
      </div>
      
      <div className="p-6 flex flex-col grow text-center">
        <div className="mb-2">
          <span className="text-xs font-bold text-primary uppercase tracking-wide">
            {book.category?.name || 'Books'}
          </span>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-1 line-clamp-1">
          {book.title}
        </h3>
        <p className="text-sm text-gray-500 mb-4">by {book.author}</p>
        
        <div className="flex items-center justify-center mb-4">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              className={`w-4 h-4 ${i < Math.floor(book.rating || 0) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
            />
          ))}
        </div>

        <div className="mt-auto flex flex-col items-center space-y-3">
          <span className="text-2xl font-bold text-gray-900">Rs. {book.price}</span>
          <Link 
            to={`/products/${book._id}`}
            className="w-full flex items-center justify-center space-x-2 bg-primary text-white px-6 py-2 rounded-full hover:bg-primary-hover transition font-medium"
          >
            <ShoppingCart className="w-4 h-4" />
            <span>Order Now</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;