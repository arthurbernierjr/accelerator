const fs = require('fs')
const path = require('path')
const json = path.resolve('./json')
const pillar = json + '_pillar'
const matter = require('gray-matter')
const showdown = require('showdown')
const converter = new showdown.Converter()


const getPost = async (req, res, next) => {
    fs.readFile(`${json}/${req.params.post}.json`, 'utf8', (err, file) => {
        if(err){
            console.error(err)
            res.status(400).json({msg: err.message })
        } else {
            res.status(200).json(JSON.parse(file))
        }
    })
}

exports.getPost = getPost

/* router.get('/:post', getPost)
router.get('/', getPosts)
router.get('/:mod', getModPosts)*/


const getPosts = async (req, res, next) => {
    fs.readFile(`${json}/all.json`, 'utf8', (err, file) => {
        if(err){
            console.error(err)
            res.status(400).json({msg: err.message })
        } else {
            res.status(200).json(JSON.parse(file))
        }
    })
}

exports.getPosts = getPosts

const getModPosts = async (req, res, next) => {
    fs.readFile(`${json}/all.json`, 'utf8', (err, file) => {
        if(err){
            console.error(err)
            res.status(400).json({msg: err.message })
        } else {
            const data = JSON.parse(file).filter((item) => {
                return item.data.mod.trim() === req.params.mod.trim()
            })
            res.status(200).json(data)
        }
    })
}
exports.getModPosts = getModPosts
