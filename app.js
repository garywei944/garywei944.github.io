const express = require('express');
const favicon = require('serve-favicon')
const path = require('path');
const PORT = process.env.PORT || 5000;

global.appRoot = path.resolve(__dirname);

express()
    .use(express.static(path.join(__dirname, 'public')))
    .use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'ejs')
    .use(express.urlencoded())
    .listen(PORT, () => console.log(`Listening on ${PORT}`));
