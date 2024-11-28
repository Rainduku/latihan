
  new gridjs.Grid({
      search: true,//untuk menyertakan fitur searce data
      sort: true,//agar menyertakan fitur dalam pengurutan data
      pagination: {//membuat data agar ditampilkan sesuai dengan kebutuhan
        limit: 3//jumlah data yang ditampilkan dalam satu page
      },
      language: {//untuk merubah default bahasa yang ditampilkan agar sesuai dengan yang kita inginkan
        'search': {
          'placeholder': '🔍 masukan kata kunci...'
        },
        'pagination': {
          'previous': 'Sebelumnya',
          'next': 'Berikutnya',
          'showing': 'Menampilkan',
          'to': 'sampai',
          'of': 'dari',
          'results': 'Data'
        }
      },
      columns: ["Name", "Email", "Phone Number"],//column atau header dalam sebuah tabel
      data: [
        ["Jono", "nojo56@gmail.com", "0867286513"],//data dalam tabel yang urutan tata letaknya harus sama dengan column
        ["Alex", "koni1@gmail.com", "0879366899"],
        ["Jaka", "kino1@gmail.com", "08577392768"],
        ["Nadin", "dina23@gmail.com", "083890158832"],
        ["Nur", "Nursantuy1@gmail.com", "087778367792"]
      ]
    }).render(document.getElementById("table-gridjs"));//untuk menampilkan tabel grid dalam didalam elemen