const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
  res.end('Hello from AWS CodePipeline & CodeDeploy 🚀');
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
