import React from 'react'

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-8">About Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="text-gray-600 mb-4">
            EShop was founded in 2023 with a simple mission: to provide high-quality products at affordable prices. 
            We believe that everyone deserves access to great products without breaking the bank.
          </p>
          <p className="text-gray-600 mb-4">
            Our team of passionate individuals works tirelessly to curate a selection of products that meet our 
            strict quality standards. We partner with trusted suppliers and manufacturers to ensure that every 
            item in our store is something we'd be proud to use ourselves.
          </p>
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Our Team" className="w-full h-auto rounded-lg shadow-md" />
        </div>
      </div>
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2">Quality</h3>
            <p className="text-gray-600">We never compromise on the quality of our products. Each item is carefully selected and tested to meet our high standards.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2">Affordability</h3>
            <p className="text-gray-600">We believe that great products shouldn't come with a hefty price tag. We work hard to keep our prices competitive without sacrificing quality.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2">Customer Satisfaction</h3>
            <p className="text-gray-600">Our customers are at the heart of everything we do. We strive to provide excellent service and support at every step of your shopping journey.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About