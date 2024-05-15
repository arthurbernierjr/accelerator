const fs = require('fs')
const path = require('path')
const json = `${__dirname}/json`
const pillar = json + '_pillar'
const matter = require('gray-matter')
const showdown = require('showdown')
const converter = new showdown.Converter()


const getPost = async (req, res, next) => {
    // fs.readFile "#{json}/#{req.params.post}.json", 'utf8', (err, file) ->
    // if err
    //   console.error(err)
    // else
    //   res.status(200).json(JSON.parse(file))
}

exports.getPost = getPost