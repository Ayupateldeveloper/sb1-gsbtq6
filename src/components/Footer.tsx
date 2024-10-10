import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-sm">EShop is your one-stop destination for all your shopping needs. We offer a wide range of products at competitive prices.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm hover:text-indigo-400">Home</Link></li>
              <li><Link to="/shop" className="text-sm hover:text-indigo-400">Shop</Link></li>
              <li><Link to="/about" className="text-sm hover:text-indigo-400">About</Link></li>
              <li><Link to="/contact" className="text-sm hover:text-indigo-400">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm hover:text-indigo-400">FAQ</a></li>
              <li><a href="#" className="text-sm hover:text-indigo-400">Shipping</a></li>
              <li><a href="#" className="text-sm hover:text-indigo-400">Returns</a></li>
              <li><a href="#" className="text-sm hover:text-indigo-400">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-sm mb-4">Subscribe to our newsletter for the latest updates and offers.</p>
            <form className="flex">
              <input type="email" placeholder="Your email" className="flex-grow px-3 py-2 text-gray-700 rounded-l-md focus:outline-none" />
              <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded-r-md hover:bg-indigo-700 focus:outline-none">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-sm">&copy; 2024 EShop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer