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
  pickupLocation: {
    type: String,
    required: [true, 'Please provide the pickup location'],
  },
  destination: {
    type: String,
    required: [true, 'Please provide the destination'],
  },
  patientName: {
    type: String,
    required: [true, 'Please provide the patient\'s name'],
  },
  patientAge: {
    type: Number,
    required: [true, 'Please provide the patient\'s age'],
  },
  medicalCondition: {
    type: String,
    required: [true, 'Please provide the patient\'s medical condition'],
  },
  additionalNotes: {
    type: String,
  },
  status: {
    type: String,
    enum: ['pending', 'approved', 'completed', 'cancelled'],
    default: 'pending',
  },
  // Add other fields as needed
});

const AmbulanceBooking = mongoose.models.AmbulanceBooking || mongoose.model('AmbulanceBooking', ambulanceBookingSchema);
export default AmbulanceBooking;
