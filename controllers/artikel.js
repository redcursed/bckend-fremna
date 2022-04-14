
const modelArtikel = require("../models/artikel");


module.exports = {
  getArtikel: (req, res) => {
    artikel = modelArtikel.getArtikel;
    res.json(artikel);
  },

  insert: (req, res) => {
    //Ambil data request dari frontend
    newItem = modelArtikel.insert(req);
    res.status(201).json(newItem);
  },

  getArtikelByJudul: (req, res) => {
    dataArtikel = modelArtikel.getArtikelByJudul(req);
    if (dataArtikel != -1) {
      res.json(dataArtikel);
    } else {
      res.send("Judul: " + req.params.judul + "tidak ditemukan");
    }
  },

  update: (req, res) => {
    artikel = modelArtikel.update(req);
    if (artikel != -1) {
      res.json(artikel);
    }
    res.send("Data artikel tidak ditemukan");
  },

  delete: (req, res) => {
    ket = modelArtikel.delete(req);
    res.send(ket);
  },
};
