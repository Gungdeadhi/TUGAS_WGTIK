function kenaRazia(date, data) {
    const ruteGanjilGenap = ["Gajah Mada", "Hayam Wuruk", "Sisingamangaraja", "Panglima Polim", "Fatmawati", "Tomang Raya"];
    
    let hasil = [];

    for (let i = 0; i < data.length; i++) {
        let kendaraan = data[i];

        if (kendaraan.type === "Mobil") {
        
            let nomorPlat = kendaraan.plat.split(" ")[1];
            let digitTerakhir = parseInt(nomorPlat[nomorPlat.length - 1]);

           let tanggalGanjil = date % 2 !== 0;
            let platGanjil = digitTerakhir % 2 !== 0;

       
            let pelanggaran = 0;
            for (let j = 0; j < kendaraan.rute.length; j++) {
                let rute = kendaraan.rute[j];
                if (ruteGanjilGenap.indexOf(rute) !== -1) {
                    if (tanggalGanjil !== platGanjil) {
                        pelanggaran++;
                    }
                }
            }

          
            if (pelanggaran > 0) {
                hasil.push({
                    name: kendaraan.name,
                    tilang: pelanggaran
                });
            }
        }
    }

    return hasil;
}

console.log(
  kenaRazia(27, [
    {
      name: "Denver",
      plat: "B 2791 KDS",
      type: "Mobil",
      rute: ["TB Simatupang", "Panglima Polim", "Depok", "Senen Raya"]
    },
    {
      name: "Toni",
      plat: "B 1212 JBB",
      type: "Mobil",
      rute: [
        "Pintu Besar Selatan",
        "Panglima Polim",
        "Depok",
        "Senen Raya",
        "Kemang"
      ]
    },
    {
      name: "Stark",
      plat: "B 444 XSX",
      type: "Motor",
      rute: ["Pondok Indah", "Depok", "Senen Raya", "Kemang"]
    },
    {
      name: "Anna",
      plat: "B 678 DD",
      type: "Mobil",
      rute: [
        "Fatmawati",
        "Panglima Polim",
        "Depok",
        "Senen Raya",
        "Kemang",
        "Gajah Mada"
      ]
    }
  ])
);
