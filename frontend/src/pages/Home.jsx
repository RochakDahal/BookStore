import { BookOpen, TrendingUp, Star, Clock, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const featuredBooks = [
    {
      id: 1,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      price: 450,
      image: "https://tse3.mm.bing.net/th/id/OIP.r-b4vXnfGGmug7f-1XfUlgHaF4?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
      rating: 4.8
    },
    {
      id: 2,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      price: 520,
      image: "https://tse2.mm.bing.net/th/id/OIP.hA532a11C61XjRzlgA0iDgHaGq?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
      rating: 4.9
    },
    {
      id: 3,
      title: "1984",
      author: "George Orwell",
      price: 480,
      image: "https://tse2.mm.bing.net/th/id/OIP.Zb1w5xvONhl2M33SP4_Y4QHaF7?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
      rating: 4.7
    }
  ];

  return (
    <div>
      
      <section className="bg-linear-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6 leading-tight">
                Discover Your Next Great Read
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Browse thousands of books, from bestsellers to rare finds. Buy, sell, and explore the world of literature.
              </p>
              <div className="flex space-x-4">
                <Link 
                  to="/products" 
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition shadow-lg"
                >
                  Shop Now
                </Link>
                <Link 
                  to="/about" 
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=600" 
                alt="Books" 
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <BookOpen className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2 text-gray-900">Wide Selection</h3>
              <p className="text-gray-600">Thousands of books across all genres</p>
            </div>
            <div className="text-center p-6">
              <TrendingUp className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2 text-gray-900">Best Prices</h3>
              <p className="text-gray-600">Competitive pricing on all books</p>
            </div>
            <div className="text-center p-6">
              <Star className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2 text-gray-900">Quality Guaranteed</h3>
              <p className="text-gray-600">Verified sellers and quality checks</p>
            </div>
            <div className="text-center p-6">
              <Clock className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2 text-gray-900">Fast Delivery</h3>
              <p className="text-gray-600">Quick shipping across Nepal</p>
            </div>
          </div>
        </div>
      </section>

      
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Featured Books</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredBooks.map((book) => (
              <div key={book.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
                <img src={book.image} alt={book.title} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{book.title}</h3>
                  <p className="text-gray-600 mb-2">{book.author}</p>
                  <div className="flex items-center mb-4">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="ml-2 text-gray-600">{book.rating}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-blue-600">Rs. {book.price}</span>
                    <Link 
                      to={`/products/${book.id}`}
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/products" className="text-blue-600 font-semibold hover:underline">
              View All Books →
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Browse by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['Fiction', 'Science', 'History', 'Biography', 'Technology', 'Business', 'Art', 'Philosophy'].map((category) => (
              <Link 
                key={category}
                to={`/products?category=${category}`}
                className="bg-gray-50 p-6 rounded-lg text-center hover:bg-blue-600 hover:text-white transition"
              >
                <h3 className="font-semibold text-gray-900">{category}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="mb-8 text-blue-100">Get updates on new arrivals, special offers, and book recommendations.</p>
          <form className="flex flex-col md:flex-row gap-4 justify-center">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="px-6 py-3 rounded-lg text-gray-1000 w-full md:w-96"
            />
            <button className="bg-orange-500 px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;