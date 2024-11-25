    // conditional variabel
    // let hargaBaju = 95000;

    // let keterangan = hargaBaju < 70000 ? 'murah' : 'mahal';
    // console.log(keterangan);


    let tarifBus = [
        {
            kota : "pandeglang",
            daerah : "kadulisung",
            harga : 20000
        },
        {
            kota : "pandeglang",
            daerah : "tanjung lesung",
            harga : 30000
        },
        {
            kota : "pandeglang",
            daerah : "cibaliung",
            harga : 40000
        },
        {
            kota : "Serang",
            daerah : "kebon jahe",
            harga : 50000
        },
        {
            kota : "Serang",
            daerah : "pakupatan",
            harga : 60000
        }
    ];

    // let tarifHarga = tarifBus.map((tarif)=>tarif.harga+5000);
    // console.log(tarifHarga);
    // mapping variabel bisa digunakan untuk menambahkan nilai value yang sudah ada.

    let kotaTujuan = tarifBus.filter((tujuan)=> tujuan.harga < 50000)
    console.log(kotaTujuan); //untuk penggunaan filter, yang mana hanya menampilkan objek
                            // yang sesuai dengan kondisi yang dideklarasikan



