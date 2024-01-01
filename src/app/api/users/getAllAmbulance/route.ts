// Import necessary modules and models
import { connect } from "@/dbConfig/dbConfig";
import Ambulance from "@/models/ambulanceModel";
import { NextRequest, NextResponse } from "next/server";
import { getDataFromToken } from "@/helpers/getDataFromToken";

// Connect to the database
connect();

export async function GET(request: NextRequest) {
    try {
        // Get the user ID from the request (you need to handle user authentication)
        const userId = await getDataFromToken(request);

        // Retrieve all ambulances from the database
        const ambulances = await Ambulance.find();

        // Create a JSON response with the list of ambulances
        const response = NextResponse.json({
            ambulances,
            message: "Ambulances retrieved successfully",
            success: true,
        });

        return response;
    } catch (error: any) {
        // Handle any errors and return an appropriate response
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
