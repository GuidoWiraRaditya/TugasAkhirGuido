# Catatan!!

# Batasan masalah

  - Penggunaan Xpath pada penulisan script yang dirasa kurang tepat dan bukan best practice karena terlalu bergantung pada styling dari halaman sehingga jika ada perubahan dari design maka script tidak valid. Hal ini dikarenakan penulis tidak memiliki akses pada source code dari halaman web yang dibuat sehingga tidak dapat menentukan id dari tiap elemen yang diakses oleh cypress
  - Skenario pengujian tidak sampai melakukan pengiriman form bimbingan sehingga tidak mengganggu dosen yang bersangkutan
  - Penulis hanya membuat script yang mudah dipahami tanpa memerlukan terlalu banyak pengetahuan teknis

Mungkin ditambahkan di hasil penelitian:
  - Pada saat melakukan assertion, kecepatan internet maupun server dari halaman yang diakses dirasa cukup mempengaruhi proses penulisan script karena penulis perlu menentukan berapa lama Cypress perlu menunggu hingga halaman yang akan di assert berhasil diakses sebelum mengalami timeout. Penambahan fungsi untuk menunggu tidak mempengaruhi total waktu pengetesan karena segera setelah halaman berhasil diakses, script akan langsung berjalan
  - Assertion pada tiap halaman dilakukan oleh penulis dengan mencari bagian dari metadata yang menurut penulis unik jika dibandingkan dengan halaman lainnya