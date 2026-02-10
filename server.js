const http = require('http');
const fs = require('fs');
const path = require('path');

const port = process.env.PORT || 3000;
const indexPath = path.join(__dirname, 'public', 'index.html');

const server = http.createServer((req, res) => {
  if (req.url === '/' || req.url === '/index.html') {
    const html = fs.readFileSync(indexPath, 'utf8');
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(html);
    return;
  }

  res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
  res.end('Not found');
});

server.listen(port, '0.0.0.0', () => {
  console.log(`Presenting_ME app running at http://127.0.0.1:${port}`);
});
