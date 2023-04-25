const mongoose = require("mongoose");

const VendorSchema = new mongoose.Schema({

  image: {
    type: String,
    require: true,
  },
  cloudinaryId: {
    type: String,
    require: true,
  },
  businessName: {
    type: String,
    required: true,
  },
  businessEmail: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
  },
  websiteLink: {
    type: String,
    required: true,
  },
  streetAddress: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  businessCategory: {
    type: String,
    required: true,
  },
  businessDetail: {
    type: String,
    required: true,
  },
  workDays: {
    type: String,
    required: true,
  },
  openTime: {
    type: String,
    required: true,
  },
  closeTime: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Vendor", VendorSchema);
