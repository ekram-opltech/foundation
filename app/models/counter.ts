
import mongoose from "mongoose";

const CounterSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        end: { type: Number, required: true },
        suffix: { type: String },
        icon: { type: String, required: true },
    },
    { timestamps: true }
);

export default mongoose.models.Counter || mongoose.model("Counter", CounterSchema);