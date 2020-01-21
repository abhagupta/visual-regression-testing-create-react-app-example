const spawn = require('cross-spawn');
const stripIndent = require("common-tags/lib/stripIndent");
 
// Spawn NPM asynchronously
//const child = spawn('npm', ['list', '-g', '-depth', '0'], { stdio: 'inherit' });
 
// Spawn NPM synchronously
const verb = "gsvchsgv";



// console.log(stripIndent`
//      This is a multi-line string.
//   You'll ${verb} that it is indented.
//   We don't want to output this indentation.
//     But we do want to keep this line indented.
// `)

const result = spawn.sync('node', [
    "-e", 
    stripIndent`
     This is a multi-line string.
    You'll ${verb} that it is indented.
    We don't want to output this indentation.
      But we do want to keep this line indented.
    `
],  { stdio: 'inherit' });

