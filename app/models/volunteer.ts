import mongoose from "mongoose";

const VolunteerSchema = new mongoose.Schema({
    firstName: { type: String, required: true, lowercase: true, trim: true },
    lastName: { type: String, required: true, lowercase: true, trim: true },
    post: { type: String, required: true },
    imageUrl: { type: String, required: true },
    facebookUrl: { type: String },
    twitterUrl: { type: String },
    instaUrl: { type: String },
    youtubeUrl: { type: String },
});

export default mongoose.models.Volunteer || mongoose.model("Volunteer", VolunteerSchema);