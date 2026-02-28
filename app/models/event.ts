
import mongoose from "mongoose";

const EventSchema = new mongoose.Schema({
    title: { type: String, required: true },
    location: { type: String, required: true },
    imageUrl: { type: String, required: true },
    eventDate: { type: Date, required: true },
    startTime: { type: Date, required: true },
    endTime: { type: Date, required: true }
});

export default mongoose.models.Event || mongoose.model("Event", EventSchema);