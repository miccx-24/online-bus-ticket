import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Search = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    date: '',
    time: '',
    seats: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleCheckAvailability = () => {
    // Validate form data
    if (!formData.from || !formData.to || !formData.date || !formData.time || !formData.seats) {
      alert('Please fill in all fields')
      return
    }

    if (formData.from === formData.to) {
      alert('Origin and destination cannot be the same')
      return
    }

    if (parseInt(formData.seats) <= 0) {
      alert('Please enter a valid number of seats')
      return
    }

    // If all validations pass, navigate to the results page with the search parameters
    navigate('/search-results', { state: formData })
  }

  return (
    <div className='w-full lg:px-28 md:px-16 sm:px-7 px-4 my-[8ch]'>
      <div className='w-full bg-neutral-100 rounded-md dark:bg-neutral-900/40 p-8'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12 items-end'>
          <div className=''>
            <label htmlFor="from" className='block mb-2 font-medium'>
              From
            </label>
            <select 
              name="from" 
              id="from" 
              value={formData.from}
              onChange={handleInputChange}
              className='w-full appearance-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 inline-block bg-neutral-200/60 dark:bg-neutral-900/60 px-3 h-12 border border-neutral-200 dark:border-neutral-900 rounded-md focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-700'
            >
              <option value="">Select Location</option>
              <option value="Harare">Harare</option>
              <option value="Bulawayo">Bulawayo</option>
              <option value="Hwange">Hwange</option>
              <option value="Victoria Falls">Victoria Falls</option>
              <option value="Harare,Zimbabwe">Harare,Zimbabwe</option>
              <option value="Cape Town,SA">Cape Town,SA</option>
            </select>
          </div>
          <div className=''>
            <label htmlFor="to" className='block mb-2 font-medium'>
              To
            </label>
            <select 
              name="to" 
              id="to" 
              value={formData.to}
              onChange={handleInputChange}
              className='w-full appearance-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 inline-block bg-neutral-200/60 dark:bg-neutral-900/60 px-3 h-12 border border-neutral-200 dark:border-neutral-900 rounded-md focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-700'
            >
              <option value="">Select Location</option>
              <option value="Harare">Harare</option>
              <option value="Bulawayo">Bulawayo</option>
              <option value="Hwange">Hwange</option>
              <option value="Victoria Falls">Victoria Falls</option>
              <option value="Harare,Zimbabwe">Harare,Zimbabwe</option>
              <option value="Cape Town,SA">Cape Town,SA</option>
            </select>
          </div>
          <div>
            <label htmlFor="date" className='block mb-2 font-medium'>
              Choose Date 
            </label>
            <input 
              type="date" 
              id='date' 
              name='date' 
              value={formData.date}
              onChange={handleInputChange}
              className='w-full appearance-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 inline-block bg-neutral-200/60 dark:bg-neutral-900/60 px-3 h-12 border border-neutral-200 dark:border-neutral-900 rounded-md focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-700' 
            />
          </div>
          <div>
            <label htmlFor="time" className='block mb-2 font-medium'>
              Choose Time
            </label>
            <input 
              type="time" 
              id='time' 
              name='time' 
              value={formData.time}
              onChange={handleInputChange}
              className='w-full appearance-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 inline-block bg-neutral-200/60 dark:bg-neutral-900/60 px-3 h-12 border border-neutral-200 dark:border-neutral-900 rounded-md focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-700' 
            />
          </div>
          <div>
            <label htmlFor="seats" className='block mb-2 font-medium'>
              Total Seats
            </label>
            <input 
              type="number" 
              id="seats" 
              name="seats"
              placeholder="Enter Seats" 
              value={formData.seats}
              onChange={handleInputChange}
              className="w-full appearance-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-600 dark:placeholder:text-neutral-300 inline-block bg-neutral-200/60 dark:bg-neutral-900/60 px-3 h-12 border border-neutral-200 dark:border-neutral-900 rounded-md focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-700"
            />
          </div>
          <div className=''> 
            <button 
              className="w-full px-4 h-12 bg-violet-600 text-neutral-50 text-base font-normal rounded-md hover:bg-violet-700 transition-colors duration-300"
              onClick={handleCheckAvailability}
            >
              Check Availability 
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search