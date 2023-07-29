const http = require('http');
const url = require('url');
const path = require('path')
const admin = require('firebase-admin');
//const app = admin.initializeApp();

const serviceAccount = require(path.join(__dirname, './prost-db-firebase-adminsdk-idw1b-2b52d7340c.json')); // Firebase 콘솔에서 다운로드한 서비스 계정 키 JSON 파일 경로
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://prost-db-default-rtdb.firebaseio.com/', // Firebase 콘솔에서 가져온 데이터베이스 URL
});

const port = 8080;

const server = http.createServer((req, res) => {
  const { pathname, query } = url.parse(req.url, true);

  if (req.method === 'POST' && pathname === '/api/score') {
    let data = '';
    req.on('data', chunk => {
      data += chunk;
    });

    req.on('end', async () => {
      try {
        const { userId, score } = JSON.parse(data);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Score saved successfully!' }));
      } catch (error) {
        console.error('Error saving score:', error);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Failed to save score.' }));
      }
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
