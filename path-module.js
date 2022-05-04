const path = require('path')

console.log(path.sep)

const filePath = path.join('/content', 'subfolder', 'sample.txt')

console.log(filePath)
console.log(path.basename(filePath))

const absolute = path.resolve(__dirname, '/folder', 'sub-folder', 'sample.txt')
console.log(absolute)

const test = './content/uploads/names.pdf'
console.log(path.basename(test))