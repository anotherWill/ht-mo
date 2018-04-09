const path = require('path');// nodejs的path模块
const express = require('express');// express服务器
const compression = require('compression'); /* 开启Gzip */

const app = express();
app.use(compression());
app.use(express.static('./dist'));


var server = app.listen(8085, function () {
  var port = server.address().port
  console.log('Open http//localhost:%s', port)
})
