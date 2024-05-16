const {getPost, getPosts, getModPosts} = require('../../controllers/api/posts')
const router = require('express').Router()


router.get('/lesson/:post', getPost)
router.get('/', getPosts)
router.get('/:mod', getModPosts)

module.exports = router
