const express = require('express');
const projectsRouter = require('./project/router');
const resourcesRouter = require('./resource/router');

const server = express();

server.use(express.json());
server.use('/api/projects', projectsRouter);
server.use('/api/resources', resourcesRouter);

//eslint-disable-next-line
server.use((err, req, res, next) => {
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
});

module.exports = server;
