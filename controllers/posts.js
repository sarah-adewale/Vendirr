const cloudinary = require("../middleware/cloudinary");
const Post = require("../models/Post");
// const Comment = require("../models/Comment");

module.exports = {
  getProfile: async (req, res) => {
    try {
      const posts = await Post.find({ user: req.user.id }); //grabs all the post of specified logged in user
      res.render("profile.ejs", { posts: posts, user: req.user });
    } catch (err) {
      console.log(err);
    }
  },
    getVendorprofile: async (req, res) => {
    try {
      const posts = await Post.find({ user: req.user.id }); //grabs all the post of specified logged in user
      res.render("vendorprofile.ejs", { posts: posts, user: req.user });
    } catch (err) {
      console.log(err);
    }
  },
  getFeed: async (req, res) => {
    try {
      const posts = await Post.find().sort({ createdAt: "asc" }).lean(); //find and sort in descending order. lean() structures data in a specific way
      res.render("feed.ejs", { posts: posts }); //posts is now called posts in our ejs
    } catch (err) {
      console.log(err);
    }
  },
  getPost: async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
    //   const comments = await Comment.find({post: req.params.id}).sort({ createdAt: "asc" }).lean(); //pjo (lean: pure javascript object)
      res.render("post.ejs", { post: post, user: req.user });
    } catch (err) {
      console.log(err);
    }
  },
  createPost: async (req, res) => {
    try {
      // Upload image to cloudinary
      const result = await cloudinary.uploader.upload(req.file.path);

      await Post.create({
        vendorName: req.body.vendorName,
        image: result.secure_url,
        cloudinaryId: result.public_id,
        about: req.body.about,
        address: req.body.address,
        closingTime: req.body.closingTime,
        websiteLink: req.body.websiteLink,
        phoneNumber: req.body.phoneNumber,
        // reviews: 0,
        user: req.user.id,
      });
      console.log("Post has been added!");
      res.redirect("/vendorprofile");
    } catch (err) {
      console.log(err);
    }
  },
//   likePost: async (req, res) => {
//     try {
//       await Post.findOneAndUpdate(
//         { _id: req.params.id },
//         {
//           $inc: { likes: 1 }, //increment by 1
//         }
//       );
//       console.log("Likes +1");
//       res.redirect(`/post/${req.params.id}`);
//     } catch (err) {
//       console.log(err);
//     }
//   },
//   deletePost: async (req, res) => {
//     try {
//       // Find post by id
//       let post = await Post.findById({ _id: req.params.id });
//       // Delete image from cloudinary
//       await cloudinary.uploader.destroy(post.cloudinaryId);
//       // Delete post from db
//       await Post.remove({ _id: req.params.id });
//       console.log("Deleted Post");
//       res.redirect("/profile");
//     } catch (err) {
//       res.redirect("/profile");
//     }
//   },
};
