import mongoose from "mongoose";
const Schema = mongoose.Schema;

const House = new Schema(
  {
    location: { type: String, required: true },
    price: { type: Number, required: true },
    year: { type: Number, max: 2040, min: 1800 },
    imgUrl: { type: String },
    description: { type: String, maxlength: 250 },
    sold: { type: Boolean, default: false }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default House;
