import React, { useState } from 'react'

const Checkout = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    country: '',
    zipCode: '',
    cardName: '',
    cardNumber: '',
    expDate: '',
    cvv: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prevData => ({ ...prevData, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Order placed:', formData)
    // Implement actual order placement logic here
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-8">Checkout</h1>
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Shipping Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block mb-1">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full border rounded-md px-3 py-2"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block mb-1">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-full border rounded-md px-3 py-2"
              />
            </div>
            <div className="md:col-span-2">
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
            <div className="md:col-span-2">
              <label htmlFor="address" className="block mb-1">Address</label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                className="w-full border rounded-md px-3 py-2"
              />
            </div>
            <div>
              <label htmlFor="city" className="block mb-1">City</label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
                className="w-full border rounded-md px-3 py-2"
              />
            </div>
            <div>
              <label htmlFor="country" className="block mb-1">Country</label>
              <input
                type="text"
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                required
                className="w-full border rounded-md px-3 py-2"
              />
            </div>
            <div>
              <label htmlFor="zipCode" className="block mb-1">Zip Code</label>
              <input
                type="text"
                id="zipCode"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleChange}
                required
                className="w-full border rounded-md px-3 py-2"
              />
            </div>
          </div>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Payment Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:col-span-2">
              <label htmlFor="cardName" className="block mb-1">Name on Card</label>
              <input
                type="text"
                id="cardName"
                name="cardName"
                value={formData.cardName}
                onChange={handleChange}
                required
                className="w-full border rounded-md px-3 py-2"
              />
            </div>
            <div className="md:col-span-2">
              <label htmlFor="cardNumber" className="block mb-1">Card Number</label>
              <input
                type="text"
                id="cardNumber"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleChange}
                required
                className="w-full border rounded-md px-3 py-2"
              />
            </div>
            <div>
              <label htmlFor="expDate" className="block mb-1">Expiration Date</label>
              <input
                type="text"
                id="expDate"
                name="expDate"
                value={formData.expDate}
                onChange={handleChange}
                required
                placeholder="MM/YY"
                className="w-full border rounded-md px-3 py-2"
              />
            </div>
            <div>
              <label htmlFor="cvv" className="block mb-1">CVV</label>
              <input
                type="text"
                id="cvv"
                name="cvv"
                value={formData.cvv}
                onChange={handleChange}
                required
                className="w-full border rounded-md px-3 py-2"
              />
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-3 rounded-md hover:bg-indigo-700 transition duration-300"
        >
          Place Order
        </button>
      </form>
    </div>
  )
}

export default Checkout