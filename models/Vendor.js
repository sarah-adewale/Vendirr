// // const mongoose = require("mongoose");

const VendorSchema = new mongoose.Schema({
  vendorName: {
    type: String,
    required: true,
  },
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
// const VendorSchema = new mongoose.Schema({
//   firstName: { type: String, unique: true },
//   lastName: { type: String, unique: true },
//   email: { type: String, unique: true },
//   password: String,
// });

// // Password hash middleware.

// VendorSchema.pre("save", function save(next) {
//   const vendor = this;
//   if (!vendor.isModified("password")) {
//     return next();
//   }
//   bcrypt.genSalt(10, (err, salt) => {
//     if (err) {
//       return next(err);
//     }
//     bcrypt.hash(vendor.password, salt, (err, hash) => {
//       if (err) {
//         return next(err);
//       }
//       vendor.password = hash;
//       next();
//     });
//   });
// });

// // Helper method for validating user's password.

// VendorSchema.methods.comparePassword = function comparePassword(
//   candidatePassword,
//   cb
// ) {
//   bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
//     cb(err, isMatch);
//   });
// };

module.exports = mongoose.model("Vendor", VendorSchema);
