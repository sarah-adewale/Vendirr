const express = require('express')
const router = express.Router()
const authController = require('../controllers/auth') 
const homeController = require('../controllers/home')
<<<<<<< HEAD
const postsController = require('../controllers/posts')
// const exploreController = require('../controllers/explore')
const { ensureAuth, ensureGuest } = require('../middleware/auth')

router.get('/', homeController.getIndex)
// router.get('/explore', exploreController.getExplore)
router.get('/profile', ensureAuth, postsController.getProfile)
// router.get('/security', ensureAuth, postsController.getSecurity)
// router.get('/vendorprofile', ensureAuth, postsController.getVendorprofile)
// router.get('/feed', ensureAuth, postsController.getFeed)
router.get('/login', authController.getLogin)
router.post('/login', authController.postLogin)
// router.get('/vendorlogin', authController.getVendorlogin)
// router.post('/vendorlogin', authController.postVendorlogin)
// router.get("/explore", ensureAuth, postsController.getProfile);
// router.get('/logout', authController.logout) 
router.get('/signup', authController.getSignup)
router.post('/signup', authController.postSignup)
// router.get('/vendorsignup', authController.getVendorsignup)
// router.post('/vendorsignup', authController.postVendorsignup)
=======
const vendorsController = require('../controllers/vendor')
const exploreController = require('../controllers/explore')
const { ensureAuth, ensureGuest } = require('../middleware/auth')

router.get('/', homeController.getIndex)
router.get('/explore', ensureAuth, exploreController.getExplore)
router.get('/profile', ensureAuth, vendorsController.getProfile)
router.get('/businessprofile', ensureAuth, vendorsController.getBusinessprofile)
router.get('/security', ensureAuth, vendorsController.getSecurity)

// auth controller
router.get('/login', authController.getLogin)
router.post('/login', authController.postLogin)
router.get('/logout', authController.logout) 
router.get('/signup', authController.getSignup)
router.post('/signup', authController.postSignup)
router.get('/vendorsignup', ensureAuth, vendorsController.getVendorsignup)

>>>>>>> 6d5ee92d0a3f09e257754aa81e221ca6a3a3f290

module.exports = router