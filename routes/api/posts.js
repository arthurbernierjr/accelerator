const {getPost, getPosts, getModPosts, getTypePosts} = require('../../controllers/api/posts')
const router = require('express').Router()


router.get('/lesson/:post', getPost)
router.get('/type/:type', getTypePosts)
router.get('/', getPosts)
router.get('/:mod', getModPosts)

module.exports = router
