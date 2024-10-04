import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Bus1 from "../../../assets/bus1.png"
import Bus2 from "../../../assets/bus.png"
import Bus3 from "../../../assets/bus3.png"

const CategoryItem = ({ image, title, link }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className='relative overflow-hidden rounded-2xl shadow-lg'
  >
    <Link to={link} className='block'>
      <motion.div
        className="relative h-80 bg-gradient-to-br from-violet-400 to-indigo-600 p-6"
        initial={{ opacity: 0.8 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <motion.img 
          src={image} 
          alt={`${title} image`} 
          className="w-full h-full object-contain"
          initial={{ y: 0 }}
          whileHover={{ y: -10 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
      <motion.div 
        className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <h2 className="text-3xl font-bold text-white text-center px-4">
          {title}
        </h2>
      </motion.div>
    </Link>
  </motion.div>
)

const Category = () => {
  const categories = [
    { image: Bus1, title: "Luxury Bus", link: "/bus/luxury" },
    { image: Bus2, title: "City Shuttle", link: "/bus/cityshuttle" },
    { image: Bus3, title: "Tour Bus", link: "/bus/tour" },
  ]

  return (
    <section className='w-full lg:px-28 md:px-16 sm:px-7 px-4 mb-16'>
      <motion.div 
        className="w-full flex items-center justify-between mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-neutral-800 dark:text-neutral-100">
          Explore Our <span className="text-violet-600">Categories</span>
        </h1>
        <Link 
          to="/bus" 
          className='text-violet-600 hover:text-violet-700 dark:text-violet-400 dark:hover:text-violet-300 transition duration-300 text-lg font-semibold'
        >
          View All →
        </Link>
      </motion.div>
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {categories.map((category, index) => (
          <CategoryItem key={index} {...category} />
        ))}
      </motion.div>
    </section>
  )
}

export default Category