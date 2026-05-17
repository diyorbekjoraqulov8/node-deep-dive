const http = require("node:http");
const fs = require("node:fs");

const server = http.createServer();

function app(request, response) {
  const result = fs.readFileSync("./test.txt");

  response.setHeader("Content-Type", "text/plain");

  response.end(result);
}

server.on("request", app);

server.listen(4080, "127.0.0.1", () => {
  console.log("Server has started on: ", server.address());
});
