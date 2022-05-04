const {readFileSync, writeFileSync} = require('fs')

const first = readFileSync('./folder/first.txt', 'utf8')
const second = readFileSync('./second.txt', 'utf8')

console.log(first, second)

writeFileSync('./folder/third.txt', `This is the third text file:  ${first}`)

writeFileSync('./folder/result.txt', `This is the third text file:  ${second}`, {flag: 'a'})

