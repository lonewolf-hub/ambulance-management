// Import necessary modules and models
import { connect } from "@/dbConfig/dbConfig";
import AmbulanceBooking from "@/models/bookingmodel";
import Ambulance from "@/models/ambulanceModel";
import { NextRequest, NextResponse } from "next/server";
import { getDataFromToken } from "@/helpers/getDataFromToken";

// Connect to the database
connect();

export async function POST(request: NextRequest) {
    try {
        // Get the user ID from the request (you need to handle user authentication)
        const userId = await getDataFromToken(request);

        // Extract the required information from the request body
        const { ambulanceId, pickupLocation, destination, patientName, patientAge, medicalCondition, additionalNotes } = await request.json();

        // Check if the user has the necessary information to book an ambulance
        if (!ambulanceId || !pickupLocation || !destination || !patientName || !patientAge || !medicalCondition) {
            return NextResponse.json({ error: "Incomplete information for ambulance booking" }, { status: 400 });
        }

        // Check if the ambulance exists and is available
        const ambulance = await Ambulance.findById(ambulanceId);

        if (!ambulance || !ambulance.isAvailable) {
            return NextResponse.json({ error: "Ambulance not available for booking" }, { status: 400 });
        }

        // Create a new ambulance booking instance with the request data
        const newAmbulanceBooking = new AmbulanceBooking({
            userId,
            ambulanceId,
            pickupLocation,
            destination,
            patientName,
            patientAge,
            medicalCondition,
            additionalNotes,
        });

        // Save the ambulance booking to the database
        const savedAmbulanceBooking = await newAmbulanceBooking.save();

        // Update the ambulance status to 'booked'
        ambulance.isAvailable = false;
        await ambulance.save();

        // Create a JSON response with the added ambulance booking details and success message
        const response = NextResponse.json({
            ambulanceBooking: savedAmbulanceBooking,
            message: "Ambulance booked successfully",
            success: true,
        });

        return response;
    } catch (error: any) {
        // Handle any errors and return an appropriate response
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
