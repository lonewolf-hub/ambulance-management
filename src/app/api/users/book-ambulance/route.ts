import { NextApiRequest, NextApiResponse } from 'next';
import AmbulanceBooking from '@/models/bookingmodel';

export default async function bookAmbulanceController(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { userId, ambulanceId } = req.body;
    // You can add additional validation logic here, e.g., check if the ambulance is available for booking

    const newAmbulanceBooking = new AmbulanceBooking({
      userId,
      ambulanceId,
      // Add other fields as needed
    });

    const savedAmbulanceBooking = await newAmbulanceBooking.save();
    res.status(200).json({ data: savedAmbulanceBooking, message: 'Ambulance booked successfully' });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}
