const liveServer = require("live-server");

const params = {
  port: 8080,
  host: "localhost",
  root: "docs",
  open: true,
  file: "index.html",
  logLevel: 2, // 0 = errors only, 1 = some, 2 = lots
};

liveServer.start(params);
