import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Bus1 from "../../../assets/bus1.png"
import Bus2 from "../../../assets/bus.png"
import Bus3 from "../../../assets/bus3.png"

const CategoryItem = ({ image, title, link }) => (
  <Link to={link} className='bg-neutral-200/60 dark:bg-neutral-900/40 block rounded-xl relative overflow-hidden h-64'>
    <motion.div
      className="w-full h-full p-4"
      initial={{ x: 0 }}
      whileHover={{ x: "-20%" }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <img src={image} alt={`${title} image`} className="w-full h-full object-contain" />
    </motion.div>
    <motion.div 
      className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr dark:from-neutral-950/80 dark:to-neutral-950/60 from-neutral-400/80 to-neutral-400/60 flex items-center justify-center"
      initial={{ opacity: 0 }}
      whileHover={{ opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <h2 className="text-2xl font-bold text-center text-neutral-900 dark:text-neutral-50">
        {title}
      </h2>
    </motion.div>
  </Link>
)

const Category = () => {
  const categories = [
    { image: Bus1, title: "Private Bus", link: "/bus/private" },
    { image: Bus2, title: "Public Bus", link: "/bus/public" },
    { image: Bus3, title: "Tour Bus", link: "/bus/tour" },
  ]

  return (
    <section className='w-full lg:px-28 md:px-16 sm:px-7 px-4 mb-16'>
      <div className="w-full flex items-center justify-between mb-8">
        <h1 className="text-3xl font-semibold text-neutral-800 dark:text-neutral-100">
          Categories
        </h1>
        <Link to="/bus" className='text-violet-600 hover:text-violet-700 dark:text-violet-400 dark:hover:text-violet-300 transition duration-300'>
          View All
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category, index) => (
          <CategoryItem key={index} {...category} />
        ))}
      </div>
    </section>
  )
}

export default Category