var slugify = require('slugify')
// import slugify from 'slugify'

const text1 = slugify('This is a simple text...')
const text2 = slugify('This is a simple text...', '**')

console.log(text1)
console.log(text2)