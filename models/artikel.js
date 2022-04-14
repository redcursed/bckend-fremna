let artikel = [
  {
    judul: "rekomendasi tempat wisata",
    author: "anonim",
    status : "selesai",
    create: new Date(),
  },
  {
    judul: "rekomendasi tempat makan",
    author: "anonim 1",
    status : "selesai",
    create: new Date(),
  },
  {
    judul: "rekomendasi tempat kemah",
    author: "anonim 2",
    status : "pending",
    create: new Date(),
  },
];

const cari = (arrData, judul) => {
  ketemu = -1;
  indeks = 0;
  while (ketemu == -1 && indeks < arrData.length) {
    if (arrData[indeks].tugas == judul) {
      ketemu = indeks;
      return indeks;
    }
    indeks++;
  }
  return -1;
};

module.exports = {
  getArtikel: artikel,

  insert: (req) => {
    const newItem = {
      judul: req.body.judul,
      author: req.body.author,
      status: req.body.status,
    };
    artikel.push(newItem);
    return newItem;
  },
  getArtikelByJudul: (req) => {
    judul = req.params.judul;
    indeks = cari(artikel, judul);
    if (indeks != -1) {
      const dataKegiatan = {
        judul: kegiatan[indeks].judul,
        author: kegiatan[indeks].author,
        status: kegiatan[indeks].status,
      };
      return dataKegiatan;
    }
    return indeks;
  },
  update: (req) => {
    judul = req.params.judul;
    indeks = cari(artikel, judul);
    if (indeks != -1) {
      artikel[indeks].judul = judul;
      artikel[indeks].author = req.body.author;
      artikel[indeks].status = req.body.status;
      
      return artikel[indeks];
    }
    return -1;
  },

  delete: (req) => {
    judul = req.params.judul;
    indeks = cari(artikel, judul);
    ket = "Judul tidak ditemukan";
    if (indeks != -1) {
      artikel.splice(indeks, 1);
      ket = "artikel" + judul + "telah dihapus";
    }
    return ket;
  },
};
