const http = require('http');
const env = process.env.ENV || 'not-set';
const podIP = process.env.POD_IP || 'unknown';

const html = `
<!DOCTYPE html>
<html>
<head>
  <title>Hello from ${env}</title>
  <style>
    body {
      font-family: "Segoe UI", sans-serif;
      background: #f4f7fa;
      color: #333;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100vh;
      margin: 0;
    }
    .card {
      background: white;
      border-radius: 8px;
      padding: 30px 40px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.1);
      text-align: center;
    }
    h1 {
      color: #2b7de9;
    }
    p {
      font-size: 18px;
      margin: 10px 0;
    }
    .env {
      font-weight: bold;
      color: #ff6600;
    }
    .ip {
      font-weight: bold;
      color: #008c5f;
    }
  </style>
</head>
<body>
  <div class="card">
    <h1>Hello World 🌍</h1>
    <p>Environment: <span class="env">${env}</span></p>
    <p>Pod IP: <span class="ip">${podIP}</span></p>
  </div>
</body>
</html>
`;

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(html);
}).listen(80);
