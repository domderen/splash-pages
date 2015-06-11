import path from 'path';
import http from 'http';

import express from 'express';
import locale from 'locale';

import compression from 'compression';
import devEnv from '../config/dev-environment';

import favicon from 'serve-favicon';

import { renderFromRequest } from './render';
import availableLocales from '../config/available-locales';

function normalisePort(val) {
  const portNum = parseInt(val, 10);

  // named pipe
  if (Number.isNaN(portNum)) { return val; }
  if (portNum >= 0) { return portNum; }

  return false;
}

const app = express();

app.use(locale(availableLocales));

app.use(favicon(path.join(__dirname, '..', 'public', 'favicon.ico')));
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.static(path.join(__dirname, '..', 'app')));

app.use(renderFromRequest);

app.use(compression());
app.set('port', normalisePort(process.env.PORT || devEnv.backendPort));

app.use(function(req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

function logErrors(err, req, res, next) {
  console.error(err.stack);
  next(err);
}

function clientErrorHandler(err, req, res, next) {
  if (req.xhr) {
    res.status(err.status || 500).send({ error: 'Something blew up!' });
  } else {
    next(err);
  }
}

function errorHandler(err, req, res) {
  res.status(err.status || 500).send(`
    <h1>${ err.message }</h1>
    <h2>${ err.status }</h2>
    <pre>${ err.stack }</pre>
  `);
}

app.use(logErrors);
app.use(clientErrorHandler);
app.use(errorHandler);

const server = http.createServer(app);

function portType(portPipe) {
  return typeof portPipe === 'string' ? 'Pipe ' + portPipe : 'Port ' + portPipe;
}

server.listen(app.get('port'));

server.on('error', function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = portType(app.get('port'));

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
});

server.on('listening', function onListening() {
  const addr = server.address();
  const bind = typeof addr === 'string' ? addr : addr.port;
  const type = portType(bind);
  console.log(`Listening on http:\/\/localhost:${bind} (${type})`);
});
