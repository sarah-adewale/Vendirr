const cloudinary = require("../middleware/cloudinary");
const Vendor = require("../models/Vendor");


module.exports = {
  getProfile: async (req, res) => {
    try {
      const vendors = await Vendor.find({ user: req.user.id }); //grabs all the post of specified logged in user
      res.render("profile.ejs", { vendors: vendors, user: req.user });
    } catch (err) {
      console.log(err);
    }
  },

  getBusinessprofile: async (req, res) => {
    try {
      const vendors = await Vendor.find({ user: req.user.id }); //grabs all the post of specified logged in user
      res.render("businessprofile.ejs", { vendors: vendors, user: req.user });
    } catch (err) {
      console.log(err);
    }
  },

  
  createVendor: async (req, res) => {
    try {
      // Upload image to cloudinary
      const result = await cloudinary.uploader.upload(req.file.path);

      await Vendor.create({
        vendorName: req.body.vendorName,
        image: result.secure_url,
        cloudinaryId: result.public_id,
        about: req.body.about,
        address: req.body.address,
        closingTime: req.body.closingTime,
        websiteLink: req.body.websiteLink,
        phoneNumber: req.body.phoneNumber,
        user: req.user.id,
      });
      console.log("Vendor has been added!");
      res.redirect("/vendorprofile");
    } catch (err) {
      console.log(err);
    }
  },

getVendorsignup: async (req, res) => {
  try{
    res.render("vendorsignup.ejs");
  }catch (err) {
      console.log(err);
    }
  
},

getSecurity: async (req, res) => {
    try {
      res.render('security.ejs')
    } catch (err) {
      console.log(err);
    }
  },
};
