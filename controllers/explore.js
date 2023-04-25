const Vendor = require("../models/Vendor");

module.exports = {

    getExplore: async (req, res) => {
        try {
        const vendors = await Vendor.find({ user: req.user.id });
        res.render("explore.ejs", { vendors: vendors, user: req.user});
        } catch (err) {
        console.log(err);
        }
    }

}

