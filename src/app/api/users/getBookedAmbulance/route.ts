// Import necessary modules and models
import { connect } from "@/dbConfig/dbConfig";
import AmbulanceBooking from "@/models/bookingmodel";
import { NextRequest, NextResponse } from "next/server";
import { getDataFromToken } from "@/helpers/getDataFromToken";

// Connect to the database
connect();

export async function GET(request: NextRequest) {
    try {
        // Get the user ID from the request (you need to handle user authentication)
        const userId = await getDataFromToken(request);

        // Retrieve all booked ambulances for the user from the database
        const bookedAmbulances = await AmbulanceBooking.find({ userId });

        // Create a JSON response with the list of booked ambulances
        const response = NextResponse.json({
            bookedAmbulances,
            message: "Booked ambulances retrieved successfully",
            success: true,
        });

        return response;
    } catch (error: any) {
        // Handle any errors and return an appropriate response
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
