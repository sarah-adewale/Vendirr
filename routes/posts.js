// const express = require("express");
// const router = express.Router();
// const upload = require("../middleware/multer");
// const postsController = require("../controllers/posts");
// const { ensureAuth, ensureGuest } = require("../middleware/auth");

// //Post Routes - simplified for now
// router.get("/:id", ensureAuth, postsController.getPost); // /:id query param that enables grab values out of the url
// router.post("/createPost", upload.single("file"), postsController.createPost);
// module.exports = router;