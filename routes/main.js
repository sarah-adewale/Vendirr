const express = require('express')
const router = express.Router()
const authController = require('../controllers/auth') 
const homeController = require('../controllers/home')
const postsController = require('../controllers/posts')
const exploreController = require('../controllers/explore')
const { ensureAuth, ensureGuest } = require('../middleware/auth')

router.get('/', homeController.getIndex)
router.get('/explore', exploreController.getExplore)
router.get('/profile', ensureAuth, postsController.getProfile)
router.get('/feed', ensureAuth, postsController.getFeed)
router.get('/login', authController.getLogin)
router.post('/login', authController.postLogin)
// router.get("/explore", ensureAuth, postsController.getProfile);
router.get('/logout', authController.logout) 
router.get('/signup', authController.getSignup)
router.post('/signup', authController.postSignup)

module.exports = router