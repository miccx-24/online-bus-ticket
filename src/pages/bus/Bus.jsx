import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaSearch, FaBus, FaUsers } from 'react-icons/fa'
import { motion } from 'framer-motion'
import Bus1 from "../../assets/bus1.png"
import Bus2 from "../../assets/bus.png"
import Bus3 from "../../assets/bus5.png"
import Bus4 from "../../assets/bus4.png"
import Bus5 from "../../assets/bus7.png"
import Bus6 from "../../assets/bus6.png"

const BusCard = ({ image, title, description, passengers }) => (
  <motion.div 
    className="bg-white dark:bg-neutral-800 rounded-lg shadow-md overflow-hidden"
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.3 }}
  >
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">{description}</p>
      <div className="flex items-center text-sm text-violet-600 dark:text-violet-400 mb-4">
        <FaUsers className="mr-2" />
        <span>{passengers} passengers</span>
      </div>
      <Link to="#" className="inline-block bg-violet-500 text-white px-4 py-2 rounded-full text-sm hover:bg-violet-600 transition duration-300">
        Book Now
      </Link>
    </div>
  </motion.div>
)

const Bus = () => {
  const [isFocused, setIsFocused] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')

  const buses = [
    { image: Bus1, title: "Luxury Coach", description: "Comfortable long-distance travel", passengers: 80 },
    { image: Bus2, title: "City Shuttle", description: "Efficient urban transportation", passengers: 50 },
    { image: Bus3, title: "Tour Bus", description: "Scenic routes for sightseeing", passengers: 48 },
    { image: Bus4, title: "Deluxe Bus", description: "Safe transport for the people", passengers: 60 },
    { image: Bus5, title: "Cross Border", description: "Iconic border-to-border explorer", passengers: 60 },
    { image: Bus6, title: "Budgetliner", description: "A semi-luxurious option making coach travel even more affordable for everyone.", passengers: 52 },
  ]

  const filteredBuses = buses.filter(bus => 
    bus.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    bus.description.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Our Bus Fleet</h1>
      
      <div className="w-full max-w-md mx-auto mb-12">
        <motion.div 
          className={`relative bg-white dark:bg-neutral-800 rounded-full shadow-lg transition-all duration-300 ease-in-out ${isFocused ? 'ring-2 ring-violet-500' : ''}`}
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FaBus className="h-5 w-5 text-neutral-400" />
          </div>
          <input
            type="text"
            placeholder="Search Bus"
            className="block w-full pl-10 pr-12 py-3 text-sm text-neutral-900 dark:text-neutral-100 placeholder-neutral-500 bg-transparent rounded-full focus:outline-none"
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="absolute inset-y-0 right-0 flex items-center">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 bg-violet-500 text-white rounded-full mr-1"
            >
              <FaSearch className="h-4 w-4" />
            </motion.button>
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredBuses.map((bus, index) => (
          <BusCard key={index} {...bus} />
        ))}
      </div>
    </div>
  )
}

export default Bus