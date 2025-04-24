const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  
  if (req.url === '/download') {
    const filePath = path.join(__dirname, 'desktop_share.exe');
    const fileName = 'downloaded_file.exe';
    
    fs.exists(filePath, (exists) => {
      if (exists) {
        res.setHeader('Content-Disposition', `attachment; filename="${fileName}"`);
        res.setHeader('Content-Type', 'application/octet-stream');
        
        const fileStream = fs.createReadStream(filePath);
        fileStream.pipe(res);
      } else {
        res.statusCode = 404;
        res.end('File not found');
      }
    });
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});
