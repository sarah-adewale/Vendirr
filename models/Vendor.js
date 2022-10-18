const mongoose = require("mongoose");

const VendorSchema = new mongoose.Schema({
  vendorName: {
    type: String,
    required: true,
  },
  // tags:{
  //   type: String,
  //   required: true,
  // },
  image: {
    type: String,
    require: true,
  },
  cloudinaryId: {
    type: String,
    require: true,
  },
  about: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  closingTime: {
    type: String,
    required: true,
  },
  websiteLink: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: Number,
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
