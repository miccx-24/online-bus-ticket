import React, { useState, useEffect } from 'react'
import { useParams, useNavigate, useLocation } from 'react-router-dom'
import { FaChair, FaMoneyBillWave, FaArrowRight } from 'react-icons/fa'

const busLayouts = {
  small: { rows: 10, seatsPerRow: 8, aisleAfter: 2 },
  medium: { rows: 10, seatsPerRow: 5, aisleAfter: 2 },
  large: { rows: 12, seatsPerRow: 4, aisleAfter: 3 },
  xl: { rows: 10, seatsPerRow: 6, aisleAfter: 2 },
  xxl: { rows: 10, seatsPerRow: 6, aisleAfter: 2 },
  xxxl: { rows: 13, seatsPerRow: 4, aisleAfter: 3 },
  
}

const SeatSelection = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const location = useLocation()
  const [bus, setBus] = useState(null)
  const [selectedSeats, setSelectedSeats] = useState([])
  const [bookedSeats, setBookedSeats] = useState([])

  useEffect(() => {
    // In a real application, you would fetch the bus data from an API
    // For this example, we'll use mock data
    const mockBuses = [
      {
        id: 1,
        title: "Luxury Coach",
        totalSeats: 80,
        price: 50,
        route: ["Harare", "Bulawayo"],
        layout: 'small'
      },
      {
        id: 2,
        title: "City Shuttle",
        totalSeats: 50,
        price: 40,
        route: ["Harare", "Hwange"],
        layout: 'medium'
      },
      {
        id: 3,
        title: "Tour Bus",
        totalSeats: 48,
        price: 60,
        route: ["Victoria Falls", "Harare"],
        layout: 'large'
      },
      {
        id: 4,
        title: "Deluxe Bus",
        totalSeats: 60,
        price: 80,
        route: ["Victoria Falls", "Bulawayo"],
        layout: 'xl'
      },
      {
        id: 5,
        title: "Cross Border Bus",
        totalSeats: 60,
        price: 200,
        route: ["Capetown", "Harare"],
        layout: 'xxl'
      },
      {
        id: 6,
        title: "Budgetliner",
        totalSeats: 52,
        price: 40,
        route: ["Hwange", "Harare"],
        layout: 'xxxl'
      }

    ]

    const selectedBus = mockBuses.find(bus => bus.id === parseInt(id))
    setBus(selectedBus)

    // Check if there's a booking confirmation
    if (location.state?.bookingConfirmed) {
      setBookedSeats(prevBookedSeats => [
        ...prevBookedSeats,
        ...location.state.bookedSeats
      ])
      // Show a confirmation message to the user
      alert("Booking confirmed! Your seats have been reserved.")
    }
  }, [id, location.state])

  const handleSeatClick = (seatNumber) => {
    if (bookedSeats.includes(seatNumber)) {
      // Seat is already booked, don't allow selection
      return
    }

    if (selectedSeats.includes(seatNumber)) {
      setSelectedSeats(selectedSeats.filter(seat => seat !== seatNumber))
    } else {
      setSelectedSeats([...selectedSeats, seatNumber])
    }
  }

  const handleCheckout = () => {
    navigate('/checkout', { state: { bus, selectedSeats } })
  }

  if (!bus) return <div>Loading...</div>

  const layout = busLayouts[bus.layout]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">{bus.title} - Seat Selection</h1>
      <div className="flex justify-center items-center mb-4 text-lg">
        <span className="font-semibold">{bus.route[0]}</span>
        <FaArrowRight className="mx-2" />
        <span className="font-semibold">{bus.route[1]}</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="bg-gray-100 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Select Your Seats</h2>
          <div className="grid grid-cols-{layout.seatsPerRow + 1} gap-2">
            {[...Array(layout.rows)].map((_, rowIndex) => (
              <React.Fragment key={rowIndex}>
                {[...Array(layout.seatsPerRow)].map((_, seatIndex) => {
                  const seatNumber = rowIndex * layout.seatsPerRow + seatIndex + 1
                  const isBooked = bookedSeats.includes(seatNumber)
                  const isSelected = selectedSeats.includes(seatNumber)

                  return (
                    <React.Fragment key={seatIndex}>
                      {seatIndex === layout.aisleAfter && <div className="w-4"></div>}
                      <button
                        className={`p-2 rounded ${
                          isBooked
                            ? 'bg-red-500 text-white cursor-not-allowed'
                            : isSelected
                            ? 'bg-violet-500 text-white'
                            : 'bg-white text-gray-700 hover:bg-gray-200'
                        }`}
                        onClick={() => handleSeatClick(seatNumber)}
                        disabled={isBooked}
                      >
                        <FaChair className="mx-auto" />
                        <span className="text-xs">{seatNumber}</span>
                      </button>
                    </React.Fragment>
                  )
                })}
              </React.Fragment>
            ))}
          </div>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Booking Summary</h2>
          <p className="mb-2">Selected Seats: {selectedSeats.join(', ') || 'None'}</p>
          <p className="mb-4">
            <FaMoneyBillWave className="inline mr-2" />
            Total: ${selectedSeats.length * bus.price}
          </p>
          <button
            className="bg-violet-500 text-white px-6 py-3 rounded-full text-lg hover:bg-violet-600 transition duration-300 w-full"
            onClick={handleCheckout}
            disabled={selectedSeats.length === 0}
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
      <div className="text-center text-sm text-gray-500">
        <p>Blue: Available | Purple: Selected | Red: Booked</p>
      </div>
    </div>
  )
}

export default SeatSelection