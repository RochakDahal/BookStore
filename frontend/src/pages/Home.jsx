import { BookOpen, TrendingUp, Star, Clock } from 'lucide-react'
import { Link } from 'react-router-dom'

const Home = () => {
  const featuredBooks = [
    {
      id: 1,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      price: 450,
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400",
      rating: 4.8
    },
    {
      id: 2,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      price: 520,
      image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400",
      rating: 4.9
    },
    {
      id: 3,
      title: "1984",
      author: "George Orwell",
      price: 480,
      image: "https://images.unsplash.com/photo-1535905557558-afc4877a26fc?w=400",
      rating: 4.7
    }
  ]

  return (
    <div>
      
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6">Discover Your Next Great Read</h1>
              <p className="text-xl mb-8 text-blue-100">Browse thousands of books, from bestsellers to rare finds. Buy, sell, and explore the world of literature.</p>
              <div className="flex space-x-4">
                <Link to="/products" className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                  Shop Now
                </Link>
                <Link to="/about" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition">
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
              <BookOpen className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Wide Selection</h3>
              <p className="text-gray-600">Thousands of books across all genres</p>
            </div>
            <div className="text-center p-6">
              <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Best Prices</h3>
              <p className="text-gray-600">Competitive pricing on all books</p>
            </div>
            <div className="text-center p-6">
              <Star className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Quality Guaranteed</h3>
              <p className="text-gray-600">Verified sellers and quality checks</p>
            </div>
            <div className="text-center p-6">
              <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Fast Delivery</h3>
              <p className="text-gray-600">Quick shipping across Nepal</p>
            </div>
          </div>
        </div>
      </section>

      
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Books</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredBooks.map((book) => (
              <div key={book.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
                <img src={book.image} alt={book.title} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{book.title}</h3>
                  <p className="text-gray-600 mb-2">{book.author}</p>
                  <div className="flex items-center mb-4">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="ml-2 text-gray-600">{book.rating}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-primary">Rs. {book.price}</span>
                    <Link 
                      to={`/products/${book.id}`}
                      className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-secondary transition"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/products" className="text-primary font-semibold hover:underline">
              View All Books →
            </Link>
          </div>
        </div>
      </section>

      
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Browse by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['Fiction', 'Science', 'History', 'Biography', 'Technology', 'Business', 'Art', 'Philosophy'].map((category) => (
              <Link 
                key={category}
                to={`/products?category=${category}`}
                className="bg-gray-50 p-6 rounded-lg text-center hover:bg-primary hover:text-white transition"
              >
                <h3 className="font-semibold">{category}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      
      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="mb-8">Get updates on new arrivals, special offers, and book recommendations.</p>
          <form className="flex flex-col md:flex-row gap-4 justify-center">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="px-6 py-3 rounded-lg text-gray-900 w-full md:w-96"
            />
            <button className="bg-accent px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition">
              Subscribe
            </button>
          </form>
        </div>
      </section>
            
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Best Selling Books</h2>
            <Link to="/products" className="text-primary font-semibold hover:underline">View All →</Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { id: 1, title: "Atomic Habits", author: "James Clear", price: 650, img: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=300" },
              { id: 2, title: "The Psychology of Money", author: "Morgan Housel", price: 550, img: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300" },
              { id: 3, title: "Rich Dad Poor Dad", author: "Robert Kiyosaki", price: 480, img: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=300" },
              { id: 4, title: "Sapiens", author: "Yuval Noah Harari", price: 720, img: "https://images.unsplash.com/photo-1535905557558-afc4877a26fc?w=300" }
            ].map((book) => (
              <div key={book.id} className="group bg-gray-50 rounded-xl p-4 hover:shadow-xl transition-all duration-300">
                <div className="overflow-hidden rounded-lg mb-4">
                  <img src={book.img} alt={book.title} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <h3 className="font-bold text-gray-900 truncate">{book.title}</h3>
                <p className="text-sm text-gray-500 mb-3">{book.author}</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-primary">Rs. {book.price}</span>
                  <button className="bg-gray-900 text-white p-2 rounded-lg hover:bg-primary transition">
                    <ShoppingCart className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Readers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Rochak Dahal", text: "Amazing collection of books! The delivery was super fast and the books were in pristine condition.", role: "Avid Reader" },
              { name: "Prashant Dahal", text: "I love the easy checkout process. eSewa integration works flawlessly. Highly recommended!", role: "Student" },
              { name: "Kailash Thapa", text: "Best platform to sell my old books. The UI is beautiful and very easy to navigate.", role: "Book Seller" }
            ].map((review, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-gray-600 mb-6 italic">"{review.text}"</p>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{review.name}</h4>
                    <p className="text-sm text-gray-500">{review.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home