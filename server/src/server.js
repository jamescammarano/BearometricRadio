import express from "express"

const app = express();

app.use((req, res, next) => {
    logging.info(
      `METHOD: [${req.method}] - URL: [${req.url}] - STATUS: [${res.statusCode}] - IP: [${req.socket.remoteAddress}]`,
      SERVER_NAMESPACE
    );
  
    next();
});


app.listen(config.server.port, () => {
    logging.info(
      SERVER_NAMESPACE,
      `Server is running ${config.server.hostname}:${config.server.port}`
    );
  });
  