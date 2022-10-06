const passport = require("passport");
const validator = require("validator");
const User = require("../models/User");
const Vendor = require("../models/Vendor");

exports.getLogin = (req, res) => {
  if (req.user) {
    return res.redirect("/explore");
  }
  res.render("login", {
    title: "Login",
  });
};

exports.postLogin = (req, res, next) => {
  const validationErrors = [];
  if (!validator.isEmail(req.body.email))
    validationErrors.push({ msg: "Please enter a valid email address." });
  if (validator.isEmpty(req.body.password))
    validationErrors.push({ msg: "Password cannot be blank." });

  if (validationErrors.length) {
    req.flash("errors", validationErrors);
    return res.redirect("/login");
  }
  req.body.email = validator.normalizeEmail(req.body.email, {
    gmail_remove_dots: false,
  });

  passport.authenticate("local", (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      req.flash("errors", info);
      return res.redirect("/login");
    }
    req.logIn(user, (err) => {
      if (err) {
        return next(err);
      }
      req.flash("success", { msg: "Success! You are logged in." });
      res.redirect(req.session.returnTo || "/explore");
    });
  })(req, res, next);
};

exports.logout = (req, res) => {
  req.logout(() => {
    console.log('User has logged out.')
  })
  req.session.destroy((err) => {
    if (err)
      console.log("Error : Failed to destroy the session during logout.", err);
    req.user = null;
    res.redirect("/");
  });
};

exports.getSignup = (req, res) => {
  if (req.user) {
    return res.redirect("/profile");
  }
  res.render("signup", {
    title: "Create Account",
  });
};

exports.postSignup = (req, res, next) => {
  const validationErrors = [];
  if (!validator.isEmail(req.body.email))
    validationErrors.push({ msg: "Please enter a valid email address." });
  if (!validator.isLength(req.body.password, { min: 8 }))
    validationErrors.push({
      msg: "Password must be at least 8 characters long",
    });
  if (req.body.password !== req.body.confirmPassword)
    validationErrors.push({ msg: "Passwords do not match" });

  if (validationErrors.length) {
    req.flash("errors", validationErrors);
    return res.redirect("../signup");
  }
  req.body.email = validator.normalizeEmail(req.body.email, {
    gmail_remove_dots: false,
  });

  const user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
  });

  User.findOne(
    { $or: [{ email: req.body.email }, { firstName: req.body.firstName }, { lastName: req.body.lastName }] },
    (err, existingUser) => {
      if (err) {
        return next(err);
      }
      if (existingUser) {
        req.flash("errors", {
          msg: "Account with that email address or username already exists.",
        });
        return res.redirect("../signup");
      }
      user.save((err) => {
        if (err) {
          return next(err);
        }
        req.logIn(user, (err) => {
          if (err) {
            return next(err);
          }
          res.redirect("/profile");
        });
      });
    }
  );
};


// vendor login
exports.getVendorlogin = (req, res) => {
  if (req.vendor) {
    return res.redirect("/explore");
  }
  res.render("vendorlogin", {
    title: "Login",
  });
};

exports.postVendorlogin = (req, res, next) => {
  const validationErrors = [];
  if (!validator.isEmail(req.body.email))
    validationErrors.push({ msg: "Please enter a valid email address." });
  if (validator.isEmpty(req.body.password))
    validationErrors.push({ msg: "Password cannot be blank." });

  if (validationErrors.length) {
    req.flash("errors", validationErrors);
    return res.redirect("/vendorlogin");
  }
  req.body.email = validator.normalizeEmail(req.body.email, {
    gmail_remove_dots: false,
  });

  passport.authenticate("local", (err, vendor, info) => {
    if (err) {
      return next(err);
    }
    if (!vendor) {
      req.flash("errors", info);
      return res.redirect("/vendorlogin");
    }
    req.logIn(vendor, (err) => {
      if (err) {
        return next(err);
      }
      req.flash("success", { msg: "Success! You are logged in." });
      res.redirect(req.session.returnTo || "/explore");
    });
  })(req, res, next);
};


// vendor signup
exports.getVendorsignup = (req, res) => {
  if (req.vendor) {
    return res.redirect("/vendorprofile");
  }
  res.render("vendorsignup", {
    title: "Create Account",
  });
};

exports.postVendorsignup = (req, res, next) => {
  const validationErrors = [];
  if (!validator.isEmail(req.body.email))
    validationErrors.push({ msg: "Please enter a valid email address." });
  if (!validator.isLength(req.body.password, { min: 8 }))
    validationErrors.push({
      msg: "Password must be at least 8 characters long",
    });
  if (req.body.password !== req.body.confirmPassword)
    validationErrors.push({ msg: "Passwords do not match" });

  if (validationErrors.length) {
    req.flash("errors", validationErrors);
    return res.redirect("../vendorsignup");
  }
  req.body.email = validator.normalizeEmail(req.body.email, {
    gmail_remove_dots: false,
  });

  const vendor = new Vendor({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
  });

  Vendor.findOne(
    { $or: [{ email: req.body.email }, { firstName: req.body.firstName }, { lastName: req.body.lastName }] },
    (err, existingVendor) => {
      if (err) {
        return next(err);
      }
      if (existingVendor) {
        req.flash("errors", {
          msg: "Account with that email address or username already exists.",
        });
        return res.redirect("../vendorsignup");
      }
      vendor.save((err) => {
        if (err) {
          return next(err);
        }
        req.logIn(vendor, (err) => {
          if (err) {
            return next(err);
          }
          res.redirect("/vendorprofile");
        });
      });
    }
  );
};


