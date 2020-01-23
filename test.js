const stylus = require('stylus');
const fs = require('fs');

fs.readFile('./src/style.styl', {encoding: 'utf-8'}, (err, data) => {
  if (err) throw err;
  console.log(__dirname);

  var paths = [
    __dirname + '/src'
  
];
const str= require('fs').readFileSync(__dirname + '/src/style.styl', 'utf8');

  stylus(str)
  .set('filename', __dirname + '/src/style.styl')
  .set('paths', paths)
  .render(function(err, css){
    if (err) throw err;
    console.log(css);
  })

  // const temp = stylus.render(data);
  // console.log(JSON.stringify(temp));
});