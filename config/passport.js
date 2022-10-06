const LocalStrategy = require("passport-local").Strategy;
const mongoose = require("mongoose");
const User = require("../models/User");
const Vendor = require("../models/Vendor");

module.exports = function (passport) {
  passport.use(
    new LocalStrategy({ usernameField: "email" }, (email, password, done) => {
      User.findOne({ email: email.toLowerCase() }, (err, user) => {
        if (err) {
          return done(err);
        }
        if (!user) {
          return done(null, false, { msg: `Email ${email} not found.` });
        }
        if (!user.password) {
          return done(null, false, {
            msg:
              "Your account was registered using a sign-in provider. To enable password login, sign in using a provider, and then set a password under your user profile.",
          });
        }
        user.comparePassword(password, (err, isMatch) => {
          if (err) {
            return done(err);
          }
          if (isMatch) {
            return done(null, user);
          }
          return done(null, false, { msg: "Invalid email or password." });
        });
      });

      passport.serializeUser((user, done) => {
        done(null, user.id);
      });

      passport.deserializeUser((id, done) => {
        User.findById(id, (err, user) => done(err, user));
      });

      // vendor
      Vendor.findOne({ email: email.toLowerCase() }, (err, vendor) => {
        if (err) {
          return done(err);
        }
        if (!vendor) {
          return done(null, false, { msg: `Email ${email} not found.` });
        }
        if (!vendor.password) {
          return done(null, false, {
            msg:
              "Your account was registered using a sign-in provider. To enable password login, sign in using a provider, and then set a password under your user profile.",
          });
        }
        vendor.comparePassword(password, (err, isMatch) => {
          if (err) {
            return done(err);
          }
          if (isMatch) {
            return done(null, vendor);
          }
          return done(null, false, { msg: "Invalid email or password." });
        });
      });
    })
  );
  passport.serializeUser((vendor, done) => {
    done(null, vendor.id);
  });

  passport.deserializeUser((id, done) => {
    Vendor.findById(id, (err, vendor) => done(err, vendor));
  });
};


// strategy for vendor
// module.exports = function (passport) {
//   passport.use(
//     new LocalStrategy({ usernameField: "email" }, (email, password, done) => {
//       Vendor.findOne({ email: email.toLowerCase() }, (err, user) => {
//         if (err) {
//           return done(err);
//         }
//         if (!user) {
//           return done(null, false, { msg: `Email ${email} not found.` });
//         }
//         if (!user.password) {
//           return done(null, false, {
//             msg:
//               "Your account was registered using a sign-in provider. To enable password login, sign in using a provider, and then set a password under your user profile.",
//           });
//         }
//         user.comparePassword(password, (err, isMatch) => {
//           if (err) {
//             return done(err);
//           }
//           if (isMatch) {
//             return done(null, user);
//           }
//           return done(null, false, { msg: "Invalid email or password." });
//         });
//       });
//     })
//   );

//   passport.serializeVendor((user, done) => {
//     done(null, user.id);
//   });

//   passport.deserializeVendor((id, done) => {
//     Vendor.findById(id, (err, user) => done(err, user));
//   });
// };