const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url == '/') {
    res.end()
  }
  if (req.url === '/about') {
    res.end("Welcome to our short history")
  }
  res.end(`
    <h1>Oops!</h1>
    <p>We cannot see the page</p>
    <a href="/">back home</a>
  `)
  // res.write('Welcome to our home page')
  // res.end()
})

server.listen(5000)