import React, { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevData => ({ ...prevData, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Implement actual form submission logic here
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-8">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <p className="text-gray-600 mb-4">
            We'd love to hear from you! Whether you have a question about our products, need help with an order, 
            or just want to say hello, we're here to help.
          </p>
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Our Address</h3>
            <p className="text-gray-600">
              123 EShop Street<br />
              Cityville, State 12345<br />
              United States
            </p>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Email Us</h3>
            <p className="text-gray-600">support@eshop.com</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Call Us</h3>
            <p className="text-gray-600">+1 (123) 456-7890</p>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Send Us a Message</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block mb-1">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border rounded-md px-3 py-2"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-1">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border rounded-md px-3 py-2"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block mb-1">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full border rounded-md px-3 py-2"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact