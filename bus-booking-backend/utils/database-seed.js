const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const Bus = mongoose.model('Bus', busSchema);

const seedData = [
  {
    id: 1,
    title: "Luxury Coach",
    description: "Comfortable long-distance travel",
    totalSeats: 80,
    price: 50,
    route: ["Harare", "Bulawayo"],
    layout: 'small'
  },
  // Add the rest of your bus data here
];

async function seedDatabase() {
  try {
    await Bus.deleteMany({});
    await Bus.insertMany(seedData);
    console.log('Database seeded successfully');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    mongoose.disconnect();
  }
}

seedDatabase();