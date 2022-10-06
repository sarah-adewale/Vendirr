const bcrypt = require("bcrypt");
const mongoose = require("mongoose");

const VendorSchema = new mongoose.Schema({
  firstName: { type: String, unique: true },
  lastName: { type: String, unique: true },
  email: { type: String, unique: true },
  password: String,
});

// Password hash middleware.

VendorSchema.pre("save", function save(next) {
  const vendor = this;
  if (!vendor.isModified("password")) {
    return next();
  }
  bcrypt.genSalt(10, (err, salt) => {
    if (err) {
      return next(err);
    }
    bcrypt.hash(vendor.password, salt, (err, hash) => {
      if (err) {
        return next(err);
      }
      vendor.password = hash;
      next();
    });
  });
});

// Helper method for validating user's password.

VendorSchema.methods.comparePassword = function comparePassword(
  candidatePassword,
  cb
) {
  bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
    cb(err, isMatch);
  });
};

module.exports = mongoose.model("Vendor", VendorSchema);
