const express = require("express");
const routerArtikel = require("./routers/artikel");
const app = express();
const port = 4000;

// untuk menerima req body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routerArtikel);
app.listen(port, () => {
  console.log("server berjalan pada port" + port);
});
