import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Job = new Schema(
  {
    jobTitle: { type: String, required: true },
    requirements: { type: String, required: true },
    description: { type: String, maxlength: 250 },
    wage: { type: Number },
    jobImg: { type: String },
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Job;

