import { NextApiRequest, NextApiResponse } from 'next';
import { connect } from "@/dbConfig/dbConfig";
import Ambulance from '@/models/ambulanceModel';

connect();
export default async function addAmbulanceController(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { ambulanceType, ambulanceNumber, hospital, bedAvailability } = req.body;
    const newAmbulance = new Ambulance({
      ambulanceType,
      ambulanceNumber,
      hospital,
      bedAvailability,
      // Add other fields as needed
    });
    const savedAmbulance = await newAmbulance.save();
    res.status(200).json({ data: savedAmbulance, message: 'Ambulance added successfully' });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}
