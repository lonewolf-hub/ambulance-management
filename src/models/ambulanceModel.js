import mongoose from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

const ambulanceSchema = new mongoose.Schema({
  _id: {
    type: String,
    default: uuidv4,
  },
  ambulanceType: {
    type: String,
    required: [true, 'Please provide an ambulance type'],
  },
  ambulanceNumber: {
    type: String,
    required: [true, 'Please provide an ambulance number'],
    unique: true,
  },
  hospital: {
    type: String,
    required: [true, 'Please provide the hospital name associated with the ambulance'],
  },
  bedAvailability: {
    type: Number,
    default: 0, // Assuming starting with 0 beds available
  },
  // Add other fields as needed
});

const Ambulance = mongoose.models.Ambulance || mongoose.model('Ambulance', ambulanceSchema);
export default Ambulance;
