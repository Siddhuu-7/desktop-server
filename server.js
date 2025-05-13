const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  if (req.url === '/lru') {
    const filePath = path.join(__dirname, 'LRU.txt');
    const code =fs.readFileSync(filePath)
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(code.toString())
    

    
  } else if (req.url === '/opt') {
    const filePath = path.join(__dirname, 'opt.txt');
    const code=fs.readFileSync(filePath)
    res.writeHead(200,{"content-type":"text/plain"})
    res.end(code.toString())

  } else if(req.url==="/bank"){
    const filePath=path.join(__dirname,"bank.txt")
    const code =fs.readFileSync(filePath)
    res.writeHead(200,{"content-type":"text/plain"})
    res.end(code.toString())
  }
});

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});
