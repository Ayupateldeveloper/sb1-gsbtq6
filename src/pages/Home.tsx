import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-16">
        <div className="bg-indigo-600 text-white rounded-lg p-8 flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0 md:mr-8">
            <h1 className="text-4xl font-bold mb-4">Welcome to EShop</h1>
            <p className="text-xl mb-4">Discover amazing products at unbeatable prices!</p>
            <Link to="/shop" className="inline-flex items-center bg-white text-indigo-600 font-semibold px-6 py-3 rounded-md hover:bg-indigo-100 transition duration-300">
              Shop Now <ArrowRight className="ml-2" />
            </Link>
          </div>
          <img src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="Shopping" className="w-full md:w-1/2 rounded-lg" />
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8">Featured Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {['Electronics', 'Fashion', 'Home & Garden', 'Sports'].map((category) => (
            <div key={category} className="bg-gray-100 rounded-lg p-6 text-center hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-semibold mb-2">{category}</h3>
              <Link to="/shop" className="text-indigo-600 hover:underline">View Products</Link>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((product) => (
            <div key={product} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={`https://picsum.photos/seed/${product}/400/300`} alt={`Product ${product}`} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">Product {product}</h3>
                <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-indigo-600">$99.99</span>
                  <Link to={`/product/${product}`} className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition duration-300">View Details</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home