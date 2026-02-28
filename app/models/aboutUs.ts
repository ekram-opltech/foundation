
import mongoose, { Schema } from "mongoose";

const AboutUsSchema = new Schema({
    title: { type: String, required: true, },
    subTitle: { type: String, required: true, },
    description: { type: String, required: true, },
    imageUrl: {
        type: String, required: true,
    }
});


export default mongoose.models.AboutUs || mongoose.model("AboutUs", AboutUsSchema);
