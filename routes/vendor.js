const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const vendorsController = require("../controllers/vendor");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Post Routes - simplified for now
router.get("/:id", ensureAuth, vendorsController.getVendor); // /:id query param that enables grab values out of the url

router.post("/createVendor", upload.single("file"), vendorsController.createVendor);

// router.put("/likePost/:id", postsController.likePost);

// router.delete("/deletePost/:id", postsController.deletePost);




module.exports = router;