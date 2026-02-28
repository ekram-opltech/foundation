
import mongoose, { Document, Model, Schema } from "mongoose";

export interface ISiteSetting extends Document {
    brandName: string;
    brandLogo: string;
    contactEmail: string;
    contactPhone: string;
    address: string;
}

const SiteSettingSchema: Schema<ISiteSetting> = new Schema({
    brandName: {
        type: String,
        required: true,
        trim: true,
    },
    brandLogo: {
        type: String,
        required: false,
        trim: true,
    },
    contactEmail: {
        type: String,
        required: true,
        trim: true,
    },
    contactPhone: {
        type: String,
        required: true,
        trim: true,
    },
    address: {
        type: String,
        required: true,
        trim: true,
    },
});

const SiteSetting: Model<ISiteSetting> =
    mongoose.models.SiteSetting || mongoose.model<ISiteSetting>("SiteSetting", SiteSettingSchema);

export default SiteSetting;