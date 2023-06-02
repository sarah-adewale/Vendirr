const Vendor = require("../models/Vendor");

module.exports = {

    getIndex: async (req, res) => {
        try {
        const vendors = await Vendor.find({ user: req.user.id });
        res.render("index.ejs", { vendors: vendors, user: req.user});
        } catch (err) {
        console.log(err);
        }
    }

}

