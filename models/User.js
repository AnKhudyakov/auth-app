import { Schema, model } from "mongoose";

const User = new Schema({
  user_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  date_reg: { type: String },
  date_log: { type: String },
  status: { type: String },
});

export default model("User", User);
