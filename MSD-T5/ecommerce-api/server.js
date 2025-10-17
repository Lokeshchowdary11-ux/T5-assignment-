// server.js
const express = require('express');
const cors = require('cors');
const os = require('os');
const http = require('http');
const productsRoute = require('./routes/products');

const app = express();
const PORT = 4000;

// Middleware
app.use(cors());
app.use(express.json());

// Log every request using http module
const server = http.createServer(app);
server.on('request', (req, res) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
});

// Routes
app.use('/products', productsRoute);

// Print system info using os module
const systemInfo = {
  platform: os.platform(),
  architecture: os.arch(),
  cpuCores: os.cpus().length,
  totalMemory: `${(os.totalmem() / (1024 ** 3)).toFixed(2)} GB`,
  freeMemory: `${(os.freemem() / (1024 ** 3)).toFixed(2)} GB`,
};
console.log('System Info:', systemInfo);

// Start server
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
