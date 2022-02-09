const fs = require("fs");
const http = require("http");

http
  .createServer((req, res) => {
    const htmlfile = fs.createReadStream("./static/index.html");
    res.writeHead(200, { "Content-Type": "text/html" });
    //res.writeHead(200, { "Content-Type": "application/json" });
    //res.writeHead(200, { "Content-Type": "image/png" });
    htmlfile.pipe(res);
  })
  .listen(3000);
