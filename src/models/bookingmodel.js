import mongoose from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

const ambulanceBookingSchema = new mongoose.Schema({
  _id: {
    type: String,
    default: uuidv4,
  },
  userId: {
    type: String,
    required: [true, 'Please provide the user ID'],
  },
  ambulanceId: {
    type: String,
    required: [true, 'Please provide the ambulance ID'],
  },
  bookingDate: {
    type: Date,
    default: Date.now,
  },
  // Add other fields as needed
});

const AmbulanceBooking = mongoose.models.AmbulanceBooking || mongoose.model('AmbulanceBooking', ambulanceBookingSchema);
export default AmbulanceBooking;
