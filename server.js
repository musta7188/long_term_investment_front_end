
import path from 'path'
import express from 'express'
import serveStatic from 'serve-static'

// const app = express()
// const PORT = process.env.PORT || 8080


// // app.get('*', (req, res) =>{ res.sendFile(path.join(__dirname, '..build/index.html')))

// app.listen(PORT,() => console.log(`listening on port ${PORT}`))


var express = require('express');
var app = express();
app.use(express.static(__dirname + '/'));
app.listen(process.env.PORT || 8080);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('build'));
  app.get('*', (req, res) =>{ res.sendFile(path.join(__dirname, '..build/index.html'))
  app.use(serveStatic('build/'))
  });
}

module.exports = app