const express = require('express')
const router = express.Router()
const authController = require('../controllers/auth') 
const homeController = require('../controllers/home')
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
router.get('/vendorsignup', vendorsController.getVendorsignup)


module.exports = router