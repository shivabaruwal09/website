const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

const indexPath = path.join(__dirname, 'index.html');
const mywebPath = path.join(__dirname, 'myweb.html');
const genPath = path.join(__dirname, 'gen.html');
const cvPath = path.join(__dirname, 'cv.html');
const apiPath = path.join(__dirname, 'api.html');
const docsPath = path.join(__dirname, 'docs.html');  // Define docsPath

app.get('/', (req, res) => {
  res.sendFile(indexPath);
});

app.get('/myweb.html', (req, res) => {
  res.sendFile(mywebPath); 
});
app.get('/gen.html', (req, res) => {
  res.sendFile(genPath); 
});
app.get('/cv.html', (req, res) => {
  res.sendFile(cvPath); 
});
app.get('/api.html', (req, res) => {
  res.sendFile(apiPath); 
});
app.get('/docs.html', (req, res) => {
  res.sendFile(docsPath);  
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
