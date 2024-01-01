// Import necessary modules and models
import { connect } from "@/dbConfig/dbConfig";
import Ambulance from "@/models/ambulanceModel";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import { getDataFromToken } from "@/helpers/getDataFromToken";

// Connect to the database
connect();


export async function POST(request: NextRequest) {
    try {
        const adminId = await getDataFromToken(request);
        const admin = await User.findOne({ _id: adminId }).select("-password");

        if (admin.role !== 'admin') {
            // Deny access if the user is not an admin
            return NextResponse.json({ error: "Access Denied" }, { status: 403 });
        }

        const reqBody = await request.json();

        // Create a new ambulance instance with the request data
        const newAmbulance = new Ambulance(reqBody);

        // Save the ambulance to the database
        const savedAmbulance = await newAmbulance.save();

        // Create a JSON response with the added ambulance details and success message
        const response = NextResponse.json({
            ambulance: savedAmbulance,
            message: "Ambulance added successfully",
            success: true,
        });

        return response;
    } catch (error: any) {
        // Handle any errors and return an appropriate response
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
