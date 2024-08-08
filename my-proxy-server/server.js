const express = require("express");
const request = require("request");
const app = express();
const port = 3000;

// CORS設定
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// プロキシルートの設定
app.get("/proxy/brands", (req, res) => {
  const apiUrl = "https://muro.sakenowa.com/sakenowa-data/api/brands";
  request(apiUrl).pipe(res);
});

app.get("/proxy/flavor-charts", (req, res) => {
  const apiUrl = "https://muro.sakenowa.com/sakenowa-data/api/flavor-charts";
  request(apiUrl).pipe(res);
});

// サーバーの起動
app.listen(port, () => {
  console.log(`Proxy server listening at http://localhost:${port}`);
});