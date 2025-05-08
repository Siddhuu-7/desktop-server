const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  if (req.url === '/avl') {
    const filePath = path.join(__dirname, 'avl.c');
    const fileName = 'avl.c';

    fs.access(filePath, fs.constants.F_OK, (err) => {
      if (err) {
        res.statusCode = 404;
        res.end('File not found');
      } else {
        res.setHeader('Content-Disposition', `attachment; filename="${fileName}"`);
        res.setHeader('Content-Type', 'application/octet-stream');

        const fileStream = fs.createReadStream(filePath);
        fileStream.pipe(res);
        fileStream.on('error', () => {
          res.statusCode = 500;
          res.end('Error reading file');
        });
      }
    });

  } else if (req.url === '/download') {
    const filePath = path.join(__dirname, 'desktop_share.zip');
    const fileName = 'downloaded_file.zip';

    fs.access(filePath, fs.constants.F_OK, (err) => {
      if (err) {
        res.statusCode = 404;
        res.end('File not found');
      } else {
        res.setHeader('Content-Disposition', `attachment; filename="${fileName}"`);
        res.setHeader('Content-Type', 'application/octet-stream');

        const fileStream = fs.createReadStream(filePath);
        fileStream.pipe(res);
        fileStream.on('error', () => {
          res.statusCode = 500;
          res.end('Error reading file');
        });
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
