import React from 'react'
import { FaMapPin, FaPhone, FaEnvelope, FaHeart, FaFireExtinguisher } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
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
              <Link to="#" className='hover:text-pink-500 dark:hover:text-pink-300 transition duration-300'>About Us</Link>
            </li>
            <li>
              <Link to="#" className='hover:text-pink-500 dark:hover:text-pink-300 transition duration-300'>Contact Us</Link>
            </li>
            <li>
              <Link to="#" className='hover:text-pink-500 dark:hover:text-pink-300 transition duration-300'>Privacy Policy</Link>
            </li>
            <li>
              <Link to="#" className='hover:text-pink-500 dark:hover:text-pink-300 transition duration-300'>Terms and Conditions</Link>
            </li>
          </ul>
        </div>

        <div className="space-y-5">
          <h3 className="text-lg font-medium text-purple-600 dark:text-purple-300">Our Services</h3>
          <ul className="space-y-2 text-neutral-600 dark:text-neutral-300 text-sm">
            <li>
              <Link to="#" className='hover:text-pink-500 dark:hover:text-pink-300 transition duration-300'>Safety Guarantee</Link>
            </li>
            <li>
              <Link to="#" className='hover:text-pink-500 dark:hover:text-pink-300 transition duration-300'>24/7 Support</Link>
            </li>
            <li>
              <Link to="#" className='hover:text-pink-500 dark:hover:text-pink-300 transition duration-300'>Luxury Buses</Link>
            </li>
            <li>
              <Link to="#" className='hover:text-pink-500 dark:hover:text-pink-300 transition duration-300'>Comfortable Facilities</Link>
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
                +263 786 033 933
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <FaEnvelope className='text-pink-500 dark:text-pink-300' />
              <p className="text-neutral-600 dark:text-neutral-300">
                support@macsairoscoaches.com
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 pt-8 border-t border-purple-200 dark:border-purple-700 text-center text-sm text-neutral-600 dark:text-neutral-300">
        © {new Date().getFullYear()} MS Coaches. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer