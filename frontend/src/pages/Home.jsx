import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';

const Home = () => {
  const bestSellers = [
    { id: 1, title: "His Life", author: "Anonymous", price: 450, cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400", rating: 4 },
    { id: 2, title: "Who's there", author: "Author Name", price: 520, cover: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400", rating: 4 },
    { id: 3, title: "Lost Boy", author: "Writer Name", price: 480, cover: "https://images.unsplash.com/photo-1535905557558-afc4877a26fc?w=400", rating: 5 }
  ];

  return (
    <div className="bg-white min-h-screen">
      
      <section className="relative overflow-hidden pt-20 pb-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
                Discover Your Next Great Read
              </h1>
              <p className="text-xl text-blue-600 font-medium">by Best Selling Authors</p>
              <p className="text-gray-600 text-lg max-w-lg">
                Browse thousands of books, from bestsellers to rare finds. Buy, sell, and explore the world of literature.
              </p>
              <Link 
                to="/products" 
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 transition shadow-lg mt-4"
              >
                Order Now
              </Link>
            </div>
            
            <div className="relative h-96 flex justify-center items-center">
              <img 
                src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=600" 
                alt="Featured Book" 
                className="h-80 w-auto object-contain shadow-2xl rounded-lg transform hover:scale-105 transition duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-gray-900">Best Books</h2>
            <p className="mt-4 text-gray-500 max-w-2xl mx-auto">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {bestSellers.map((book) => (
              <div key={book.id} className="group relative bg-white rounded-3xl shadow-xl p-8 pt-24 hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col items-center text-center">
                
                {/* Floating Book Cover */}
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-32 h-48">
                  <img 
                    src={book.cover} 
                    alt={book.title} 
                    className="w-full h-full object-cover shadow-lg rounded-lg group-hover:scale-110 transition duration-300"
                  />
                </div>

                
                <div className="space-y-3 mt-4">
                  <div className="flex justify-center space-x-1">
                    {[...Array(book.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900">
                    {book.title}
                  </h3>
                  
                  <p className="text-gray-500 text-sm">by {book.author}</p>
                  
                  <p className="text-gray-600 line-clamp-2 text-sm">
                    lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...
                  </p>

                  <div className="text-xl font-bold text-blue-600 mt-2">
                    Rs. {book.price}
                  </div>

                  <Link 
                    to={`/products/${book.id}`}
                    className="inline-block bg-blue-600 text-white px-8 py-2 rounded-full font-medium hover:bg-blue-700 transition mt-4"
                  >
                    Order Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;