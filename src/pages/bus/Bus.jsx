import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaSearch, FaBus, FaUsers, FaStar as FullStar, FaMapMarkerAlt, FaMoneyBillWave, FaExchangeAlt } from 'react-icons/fa'
import { FaRegStar as EmptyStar } from 'react-icons/fa'
import { motion } from 'framer-motion'
import Bus1 from "../../assets/bus1.png"
import Bus2 from "../../assets/bus.png"
import Bus3 from "../../assets/bus5.png"
import Bus4 from "../../assets/bus4.png"
import Bus5 from "../../assets/bus7.png"
import Bus6 from "../../assets/bus6.png"

const StarRating = ({ rating }) => {
  return (
    <div className="flex items-center mb-2">
      {[1, 2, 3, 4, 5].map((star) => (
        <span key={star}>
          {star <= rating ? (
            <FullStar className="text-yellow-400" />
          ) : (
            <EmptyStar className="text-yellow-400" />
          )}
        </span>
      ))}
    </div>
  )
}

const BusCard = ({ image, title, description, passengers, rating, route, price, id }) => (
  <motion.div 
    className="bg-white dark:bg-neutral-800 rounded-lg shadow-md overflow-hidden"
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.3 }}
  >
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <StarRating rating={rating} />
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">{description}</p>
      <div className="flex items-center text-sm text-violet-600 dark:text-violet-400 mb-2">
        <FaUsers className="mr-2" />
        <span>{passengers} passengers</span>
      </div>
      <div className="flex items-center text-sm text-green-600 dark:text-green-400 mb-2">
        <FaMapMarkerAlt className="mr-2" />
        <span>{route[0]} <FaExchangeAlt className="mx-1" /> {route[1]}</span>
      </div>
      <div className="flex items-center text-sm text-orange-600 dark:text-orange-400 mb-4">
        <FaMoneyBillWave className="mr-2" />
        <span>${price}</span>
      </div>
      <Link to={`/select-seat/${id}`} className="inline-block bg-violet-500 text-white px-4 py-2 rounded-full text-sm hover:bg-violet-600 transition duration-300">
        Book Now
      </Link>
    </div>
  </motion.div>
)

const LocationSelect = ({ value, onChange, label }) => (
  <div className="mb-4">
    <label htmlFor={label} className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{label}</label>
    <select
      id={label}
      value={value}
      onChange={onChange}
      className="block w-full px-3 py-2 bg-white dark:bg-neutral-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-violet-500 focus:border-violet-500"
    >
      <option value="">Select {label}</option>
      <option value="Harare">Harare</option>
      <option value="Bulawayo">Bulawayo</option>
      <option value="Hwange">Hwange</option>
      <option value="Victoria Falls">Victoria Falls</option>
      <option value="Cape Town,SA">Cape Town,SA</option>
    </select>
  </div>
)

const Bus = () => {
  const [isFocused, setIsFocused] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedOrigin, setSelectedOrigin] = useState('')
  const [selectedDestination, setSelectedDestination] = useState('')

  const buses = [
    { id: 1, image: Bus1, title: "Luxury Coach", description: "Comfortable long-distance travel", passengers: 80, rating: 5, route: ["Harare", "Bulawayo"], price: 50 },
    { id: 2, image: Bus2, title: "City Shuttle", description: "Efficient urban transportation", passengers: 50, rating: 4, route: ["Harare", "Hwange"], price: 70 },
    { id: 3, image: Bus3, title: "Tour Bus", description: "Scenic routes for sightseeing", passengers: 48, rating: 4, route: ["Victoria Falls", "Harare"], price: 100 },
    { id: 4, image: Bus4, title: "Deluxe Bus", description: "Safe transport for the people", passengers: 60, rating: 5, route: ["Bulawayo", "Victoria Falls"], price: 80 },
    { id: 5, image: Bus5, title: "Cross Border", description: "Iconic border-to-border explorer", passengers: 60, rating: 4, route: ["Harare", "Cape Town,SA"], price: 200 },
    { id: 6, image: Bus6, title: "Budgetliner", description: "A semi-luxurious option making coach travel even more affordable for everyone.", passengers: 52, rating: 3, route: ["Hwange", "Harare"], price: 40 },
  ]

  const filteredBuses = buses.filter(bus => {
    const matchesSearch = bus.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      bus.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      bus.route.some(location => location.toLowerCase().includes(searchTerm.toLowerCase()))

    const matchesRoute = (selectedOrigin === '' && selectedDestination === '') ||
      (selectedOrigin === '' && bus.route.includes(selectedDestination)) ||
      (selectedDestination === '' && bus.route.includes(selectedOrigin)) ||
      (bus.route.includes(selectedOrigin) && bus.route.includes(selectedDestination))

    return matchesSearch && matchesRoute
  })

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Our Bus Fleet</h1>
      
      <div className="w-full max-w-md mx-auto mb-12">
        <motion.div 
          className={`relative bg-white dark:bg-neutral-800 rounded-lg shadow-lg transition-all duration-300 ease-in-out ${isFocused ? 'ring-2 ring-violet-500' : ''}`}
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FaBus className="h-5 w-5 text-neutral-400" />
          </div>
          <input
            type="text"
            placeholder="Search Bus, Origin or Destination"
            className="block w-full pl-10 pr-12 py-3 text-sm text-neutral-900 dark:text-neutral-100 placeholder-neutral-500 bg-transparent rounded-lg focus:outline-none"
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

        <div className="mt-4 flex gap-4">
          <LocationSelect
            value={selectedOrigin}
            onChange={(e) => setSelectedOrigin(e.target.value)}
            label="Origin"
          />
          <LocationSelect
            value={selectedDestination}
            onChange={(e) => setSelectedDestination(e.target.value)}
            label="Destination"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredBuses.map((bus) => (
          <BusCard key={bus.id} {...bus} />
        ))}
      </div>
    </div>
  )
}

export default Bus