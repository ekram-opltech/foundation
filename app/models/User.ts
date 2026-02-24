
import mongoose, { Document, Model, Schema } from "mongoose";

export enum UserRole {
    USER = "USER",
    ADMIN = "ADMIN",
}

export interface IUser extends Document {
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    avatar: string;
    designation: string;
    description: string;

    role: UserRole;

    isActive: boolean;

}


const UserSchema: Schema<IUser> = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
    firstName: {
        type: String,
        trim: true,
    },
    lastName: {
        type: String,
        trim: true,
    },
    avatar: {
        type: String,
    },
    designation: {
        type: String,
        trim: true,
    },
    description: {
        type: String,
        trim: true,
    },
    role: {
        type: String,
        enum: Object.values(UserRole),
        default: UserRole.ADMIN,
    },
    isActive: {
        type: Boolean,
        default: true,
    },
}, { timestamps: true });

const User: Model<IUser> = mongoose.models.User || mongoose.model<IUser>("User", UserSchema);

export default User;