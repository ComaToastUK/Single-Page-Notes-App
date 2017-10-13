var httpServer = require("http-server");
var path = require("path");

var pathToHtmlAndJsFiles = path.join(__dirname, ".");
var server = httpServer.createServer({ root: . });
server.listen(3000);
