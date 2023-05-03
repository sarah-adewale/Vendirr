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

  getVendor: async (req, res) => {
    try {
      const vendor = await Vendor.findById(req.params.id);
      res.render("vendor.ejs", { vendor: vendor, user: req.user});
    } catch (err) {
      console.log(err);
    }
  },

  createVendor: async (req, res) => {
    try {
      // Upload image to cloudinary
      const result = await cloudinary.uploader.upload(req.file.path);

      await Vendor.create({
        image: result.secure_url,
        cloudinaryId: result.public_id,
        businessName: req.body.businessName,
        businessEmail: req.body.businessEmail,
        phoneNumber: req.body.phoneNumber,
        websiteLink: req.body.websiteLink,
        streetAddress: req.body.streetAddress,
        state: req.body.state,
        city: req.body.city,
        businessCategory: req.body.businessCategory,
        subCategory: req.body.subCategory,
        businessDetail: req.body.businessDetail,
        workDays: req.body.workDays,
        openTime: req.body.openTime,
        closeTime: req.body.closeTime,
        user: req.user.id,
      });

      console.log("Vendor has been added!");
      res.redirect("/welcomepage");
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

getWelcomepage: async (req, res) => {
  try{
    res.render("welcomepage.ejs");
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
