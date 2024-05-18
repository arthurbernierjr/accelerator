const fs = require('fs')
const path = require('path')
const json = path.resolve('./json')
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
        if (err) {
            console.error(err);
            res.status(400).json({ msg: err.message });
        } else {
            const data = JSON.parse(file).filter((item) => {
                return item.data.mod.trim() === req.params.mod.trim();
            }).sort((a,b) => {
                const orderA = parseInt(a.data.order);
                const orderB = parseInt(b.data.order);
                return orderA - orderB
            })

            const result = {
                lessons: data.filter(item => item.data.type.trim() === 'lesson'),
                assignments: data.filter(item => item.data.type.trim() === 'assignment'),
                cheatsheets: data.filter(item => item.data.type.trim() === 'cheatsheet'),
                projects: data.filter(item => item.data.type.trim() === 'project')
            };

            res.status(200).json(result);
        }
    });
};

exports.getModPosts = getModPosts

const getTypePosts = async (req, res, next) => {
    fs.readFile(`${json}/all.json`, 'utf8', (err, file) => {
        if (err) {
            console.error(err);
            res.status(400).json({ msg: err.message });
        } else {
            const data = JSON.parse(file)
                .filter((item) => {
                    return item.data.type.trim() === req.params.type.trim();
                })
                .sort((a, b) => {
                    const modA = parseInt(a.data.mod.replace('mod', ''));
                    const modB = parseInt(b.data.mod.replace('mod', ''));
                    return modA - modB;
                }).sort((a,b) => {
                    const orderA = parseInt(a.data.order);
                    const orderB = parseInt(b.data.order);
                    return orderA - orderB
                })
            res.status(200).json(data);
        }
    });
};

exports.getTypePosts = getTypePosts
