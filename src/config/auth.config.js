import * as dotenv from 'dotenv';

dotenv.config();


export const googleConfig = {
    google_client_Id: process.env.GOOGLE_CLIENT_ID,
    google_client_Secret: process.env.GOOGLE_CLIENT_SECRET,
    google_callback_URL: process.env.GOOGLE_CALLBACK_URL
};