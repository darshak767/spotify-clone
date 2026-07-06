const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  fs.readdir("files", (err, files) => {
    if (err) {
      res.statusCode = 500;
      res.end("Internal Server Error");
      return;
    } else if (req.url === "./files") {
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify({ files }));
    }
  });
});

server.listen(3000, () => {
  console.log("Server is started on port 3000");
});
