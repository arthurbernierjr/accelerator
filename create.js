const fs = require('fs');
const path = require('path');
const api = `${__dirname}/api`
const json = `${__dirname}/json`
const matter = require('gray-matter')
const showdown  = require('showdown')
const converter = new showdown.Converter()
converter.setOption('tables', true)
const Prism = require('prismjs');
const loadLanguages = require('prismjs/components/');
loadLanguages(['html', 'css', 'jsx', 'javascript', 'ruby', 'go', 'php', 'scss', 'sass', 'python']);
loadLanguages.silent = true

async function build (api, json, all) {
  const posts = []
  fs.readdir(api, (err, files) => {
    files.forEach(file => {
      console.log(file, typeof file)
      const processedFile = matter.read(`${api}/${file}`)
      processedFile.content = converter.makeHtml(processedFile.content)
      processedFile._id = file.split('.')[0]
      const jsonedFile = JSON.stringify(processedFile)
      fs.writeFile( `${json}/${file.split('.')[0]}.json`, jsonedFile, {}, (err, success) => {
          if(err){
            console.log(err)
          }else{
            console.log(success)
          }
      })
      posts.push(processedFile)
    });
    if(all){
      const jsonPosts = JSON.stringify(posts)
      fs.writeFile( `${json}/all.json`, jsonPosts, {}, (err, success) => {
          if(err){
            console.log(err)
          }else{
            console.log(success)
          }
      })
    }
  })
  return Promise.resolve('success')
}

build(api, json, true)
