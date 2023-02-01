#!/usr/bin/env node
const log = console.log;
const http = require('http');
const url = require("url");

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  const pathname = url.parse(req.url).pathname;

  const module_name = process.env.PWD + pathname;
  try {
    const a = require(module_name);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(pathname);
  } catch {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end("such file does not exists");
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
