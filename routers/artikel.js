const express = require("express");
const routerArtikel = express.Router();

const controllerArtikel = require("../controllers/artikel");

routerArtikel
  .route("/artikel")
  .get(controllerArtikel.getArtikel)
  .post(controllerArtikel.insert);

routerArtikel
  .route("/artikel/:judul")
  .get(controllerArtikel.getArtikelByJudul)
  .put(controllerArtikel.update)
  .delete(controllerArtikel.delete);

module.exports = routerArtikel;
