import React, { useState } from 'react'
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
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
    <footer className="w-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">MS Coaches</h2>
            <p className="text-sm opacity-80">
              Elevating your journey with comfort, safety, and reliability.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {['About Us', 'Contact Us', 'Privacy Policy', 'Terms and Conditions'].map((item, index) => (
                <li key={index}>
                  <Link to={`/${item.toLowerCase().replace(/\s+/g, '-')}`} className="opacity-80 hover:opacity-100 transition duration-300">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm">
              {['Safety Guarantee', '24/7 Support', 'Luxury Buses', 'Comfortable Facilities'].map((item, index) => (
                <li key={index}>
                  <Link to={`/${item.toLowerCase().replace(/\s+/g, '-')}`} className="opacity-80 hover:opacity-100 transition duration-300">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <div className="space-y-3 text-sm">
              {[
                { icon: FaMapMarkerAlt, text: '17171, Roan Close, Borrowdale, Harare' },
                { icon: FaPhone, text: '+263 786 033 933', href: 'tel:+263786033933' },
                { icon: FaEnvelope, text: 'macdonaldsairos24@gmail.com', href: 'mailto:macdonaldsairos24@gmail.com' }
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <item.icon className="opacity-80 mt-1" />
                  <p className="opacity-80">
                    {item.href ? <a href={item.href} className="hover:opacity-100 transition duration-300">{item.text}</a> : item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white border-opacity-20">
          <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white bg-opacity-10 p-6 rounded-lg backdrop-filter backdrop-blur-lg">
            <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
            <div className="space-y-4">
              {['name', 'email'].map((field) => (
                <input
                  key={field}
                  type={field === 'email' ? 'email' : 'text'}
                  name={field}
                  value={formData[field]}
                  onChange={handleInputChange}
                  placeholder={`Your ${field.charAt(0).toUpperCase() + field.slice(1)}`}
                  className="w-full p-2 text-sm text-gray-800 bg-white bg-opacity-80 rounded-md focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-white"
                  required
                />
              ))}
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Your Message"
                className="w-full p-2 text-sm text-gray-800 bg-white bg-opacity-80 rounded-md focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-white"
                required
              ></textarea>
              <button
                type="submit"
                className="w-full p-2 text-sm text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-md hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-white transition duration-300"
              >
                Send Message
              </button>
            </div>
            {status && <p className="mt-3 text-sm text-center">{status}</p>}
          </form>
        </div>

        <div className="mt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm opacity-80">
            © {new Date().getFullYear()} MS Coaches. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, index) => (
              <a key={index} href="#" className="text-white opacity-80 hover:opacity-100 transition duration-300">
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer