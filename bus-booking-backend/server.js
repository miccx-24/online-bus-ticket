require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Models
const busSchema = new mongoose.Schema({
  id: Number,
  title: String,
  description: String,
  totalSeats: Number,
  price: Number,
  route: [String],
  layout: String
});

const bookingSchema = new mongoose.Schema({
  busId: Number,
  seats: [Number],
  totalPrice: Number,
  paymentId: String,
  userId: String,
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'cancelled'],
    default: 'pending'
  },
  createdAt: { type: Date, default: Date.now }
});

const Bus = mongoose.model('Bus', busSchema);
const Booking = mongoose.model('Booking', bookingSchema);

// Routes

// Get all buses
app.get('/api/buses', async (req, res) => {
  try {
    const buses = await Bus.find();
    res.json(buses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a specific bus
app.get('/api/buses/:id', async (req, res) => {
  try {
    const bus = await Bus.findOne({ id: req.params.id });
    if (bus) {
      res.json(bus);
    } else {
      res.status(404).json({ message: 'Bus not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get booked seats for a bus
app.get('/api/buses/:id/booked-seats', async (req, res) => {
  try {
    const bookings = await Booking.find({ 
      busId: req.params.id,
      status: 'confirmed'
    });
    const bookedSeats = bookings.reduce((acc, booking) => [...acc, ...booking.seats], []);
    res.json(bookedSeats);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create payment intent
app.post('/api/create-payment-intent', async (req, res) => {
  try {
    const { amount } = req.body;
    
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100, // Stripe uses cents
      currency: 'usd'
    });

    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create booking
app.post('/api/bookings', async (req, res) => {
  try {
    const { busId, seats, totalPrice, paymentId, userId } = req.body;
    
    const booking = new Booking({
      busId,
      seats,
      totalPrice,
      paymentId,
      userId,
      status: 'confirmed'
    });

    const savedBooking = await booking.save();
    res.status(201).json(savedBooking);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get user's bookings
app.get('/api/users/:userId/bookings', async (req, res) => {
  try {
    const bookings = await Booking.find({ userId: req.params.userId });
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Webhook handler for Stripe events
app.post('/webhook', express.raw({type: 'application/json'}), async (req, res) => {
  const sig = req.headers['stripe-signature'];
  let event;

  try {
    event = stripe.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    res.status(400).send(`Webhook Error: ${err.message}`);
    return;
  }

  // Handle the event
  switch (event.type) {
    case 'payment_intent.succeeded':
      const paymentIntent = event.data.object;
      // Update booking status
      await Booking.findOneAndUpdate(
        { paymentId: paymentIntent.id },
        { status: 'confirmed' }
      );
      break;
    case 'payment_intent.payment_failed':
      const failedPayment = event.data.object;
      // Update booking status
      await Booking.findOneAndUpdate(
        { paymentId: failedPayment.id },
        { status: 'cancelled' }
      );
      break;
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  res.json({received: true});
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
