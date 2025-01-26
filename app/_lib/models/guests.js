import mongoose from "mongoose";

const guestSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"],
  },
  nationality: { type: String, required: false },
  nationalID: { type: String, required: false },
});

const Guest = mongoose.models?.Guest || mongoose.model("Guest", guestSchema);

export default Guest;
