import React, { useState } from 'react'
import { FaMapPin, FaPhone, FaEnvelope, FaHeart, FaFireExtinguisher } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [status, setStatus] = useState('')

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    
    try {
      const response = await fetch('http://localhost:5000/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        const data = await response.json()
        setStatus(data.message)
        setFormData({ name: '', email: '', message: '' })
      } else {
        const error = await response.json()
        setStatus(error.message || 'Failed to send message. Please try again.')
      }
    } catch (error) {
      console.error('Error:', error)
      setStatus('An error occurred. Please try again.')
    }
  }

  return (
    <footer className="w-full lg:px-28 md:px-16 sm:px-7 px-4 py-12 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="space-y-5">
          <h2 className="text-2xl font-bold text-purple-600 dark:text-purple-300">MS Coaches</h2>
          <p className="text-neutral-600 dark:text-neutral-300 text-sm font-normal">
            Your go-to platform for hassle-free bus ticket booking. Travel with ease and comfort!
          </p>
          <div className="flex items-center space-x-2 text-pink-500 dark:text-pink-300">
            <FaFireExtinguisher className="animate-pulse" />
            <span className="text-sm">Made with love for travelers</span>
          </div>
        </div>

        <div className="space-y-5">
          <h3 className="text-lg font-medium text-purple-600 dark:text-purple-300">Quick Links</h3>
          <ul className="space-y-2 text-neutral-600 dark:text-neutral-300 text-sm">
            <li>
              <Link to="/about" className='hover:text-pink-500 dark:hover:text-pink-300 transition duration-300'>About Us</Link>
            </li>
            <li>
              <Link to="/contact" className='hover:text-pink-500 dark:hover:text-pink-300 transition duration-300'>Contact Us</Link>
            </li>
            <li>
              <Link to="/privacy-policy" className='hover:text-pink-500 dark:hover:text-pink-300 transition duration-300'>Privacy Policy</Link>
            </li>
            <li>
              <Link to="/terms-and-conditions" className='hover:text-pink-500 dark:hover:text-pink-300 transition duration-300'>Terms and Conditions</Link>
            </li>
          </ul>
        </div>

        <div className="space-y-5">
          <h3 className="text-lg font-medium text-purple-600 dark:text-purple-300">Our Services</h3>
          <ul className="space-y-2 text-neutral-600 dark:text-neutral-300 text-sm">
            <li>
              <Link to="/safety" className='hover:text-pink-500 dark:hover:text-pink-300 transition duration-300'>Safety Guarantee</Link>
            </li>
            <li>
              <Link to="/support" className='hover:text-pink-500 dark:hover:text-pink-300 transition duration-300'>24/7 Support</Link>
            </li>
            <li>
              <Link to="/luxury-buses" className='hover:text-pink-500 dark:hover:text-pink-300 transition duration-300'>Luxury Buses</Link>
            </li>
            <li>
              <Link to="/facilities" className='hover:text-pink-500 dark:hover:text-pink-300 transition duration-300'>Comfortable Facilities</Link>
            </li>
          </ul>
        </div>

        <div className="space-y-5">
          <h3 className="text-lg font-medium text-purple-600 dark:text-purple-300">Get In Touch</h3>
          <div className="space-y-4 text-sm">
            <div className="flex items-center space-x-2">
              <FaMapPin className='text-pink-500 dark:text-pink-300' />
              <p className="text-neutral-600 dark:text-neutral-300">
                17171, Roan Close, Borrowdale, Harare
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <FaPhone className='text-pink-500 dark:text-pink-300' />
              <p className="text-neutral-600 dark:text-neutral-300">
                <a href="tel:+263786033933">+263 786 033 933</a>
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <FaEnvelope className='text-pink-500 dark:text-pink-300' />
              <p className="text-neutral-600 dark:text-neutral-300">
                <a href="mailto:macdonaldsairos24@gmail.com" className="text-blue-500">support: macdonaldsairos24@gmail.com</a>
              </p>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="mt-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Your Name"
              className="w-full p-2 mb-2 text-sm text-gray-700 border rounded-md focus:outline-none focus:border-purple-500"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Your Email"
              className="w-full p-2 mb-2 text-sm text-gray-700 border rounded-md focus:outline-none focus:border-purple-500"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Your Message"
              className="w-full p-2 mb-2 text-sm text-gray-700 border rounded-md focus:outline-none focus:border-purple-500"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full p-2 text-sm text-white bg-purple-600 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
            >
              Send Message
            </button>
            {status && <p className="mt-2 text-sm text-center">{status}</p>}
          </form>
        </div>
      </div>
      <div className="mt-8 pt-8 border-t border-purple-200 dark:border-purple-700 text-center text-sm text-neutral-600 dark:text-neutral-300">
        © {new Date().getFullYear()} MS Coaches. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer