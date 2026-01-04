<div align="center">

**UJIAN AKHIR SEMESTER GANJIL (UAS) TAHUN AKADEMIK 2025/2026**

</div>

| Keterangan | Deskripsi |
|---|---|
| Mata Ujian | Pemrograman Berorientasi Objek |
| Hari/tanggal | Senin /20 Oktober 2025 |
| Kelas / Ruang | TI 2 A,C,D |
| Waktu Ujian | 12 Hari (terakhir dikumpulkan 9 Januari 2026) |
| Sifat Ujian | Daring |

Soal UAS (Pemrograman Berorientasi Objek)
1. Apa perbedan OOP dan Pemrograman Prosedural?
   Jawaban:
   Berikut perbedaan OOP dan Procedural Programming yang akan saya jabarkan dalam bentuk tabel
   | OOP | Procedural Programming |
   |---|---|
   | Lorem ipsum dolor sit amet | Langkah demi langkah |
   | Lorem ipsum dolor sit amet | Bekerja secara berurutan untuk menyelesaikan blok code |
2. Sebutkan 4 pilar dari OOP, kemudian jelaskan kegunaannya dan berikan 1 contoh penerapannya.
   Jawaban:
   1. Abstraction
        Menyederhanakan suatu proses rumit dan hanya menampilkan interface yang simpel ke user. Singkatnya user hanya perlu tau "apa" yang dilakuin sesuatu bukan "gimana". Kegunaannya untuk membuat sesuatu yang rumit menjadi lebih gampang dipahami.
        Contoh:
        Saat kita ingin membuka suatu website, kita hanya perlu mengetik url nya saja contoh google.com, tanpa perlu tau apa yang sebenarnya terjadi seperti DNS Lookup, HTTP Request/Response, dll.
        &nbsp;
   2. Enkapsulation
        Merahasiakan atribut atau fungsi ke dalam sebuah class. Kegunaannya untuk membatasi akses atribut pada suatu class agar tidak bisa diakses oleh class lain.
        Contoh:
        Pada game Minecraft, terdapat status kelaparan kita sebut sebagai hungerLevel. Atribut hungerLevel dibuat sebagai private. Jadi, player hanya dapat mengubah nilai dari hungerLevel dengan cara mentrigger method eat() untuk menambah atau method run() untuk mengurangi.
        &nbsp;
    3. Inheritance
        Mekanisme dimana sebuah class dapat mewarisi atribut dan method ke class lain. Jadi itu seperti membuat class baru menggunakan blueprint berdasarkan class yang udah ada. Kegunaannya untuk menghemat baris kode, membuat kode jadi efisien, dan mudah dibaca.
        Contohnya:
        Class Mob memiliki atribut health, speed. Dan memiliki method bawaan walk().
        a. Class Creeper
         - mewarisi `health` dan `speed`
         - atribut tambahan yaitu `explodeRadius`
         - method baru: `explode()`

        b. Class Sheep
        - mewarisi `health` dan `speed`
        - atribut tambahan: `warnaBulu`
        - method baru: `dicukur()`
        &nbsp;
    4. Polymorphism
        blom ada jawaban
        &nbsp;
3. Sebagai Software Engineer, kita dituntut untuk bisa memodelkan aplikasi yang akan dikembangkan agar tidak keluar dari perencanaan dan kebutuhan. Modelkanlah suatu aplikasi sederhana dengan konsep OOP (minimal mengaplikasikan 2 konsep OOP) dalam bentuk class diagram. Kemudian jelaskanlah diagram tersebut dengan menyebutkan bagian mana yang menggunakan konsep apa dari OOP.
   Jawaban:
   blom juga
    &nbsp;
4. Tuliskan apa yang kalian dapatkan selama perkuliahan Pemrograman berorientasi Objek.
   Jawaban:
   Hal pertama yang saya pelajari di mata kuliah ini yaitu tipe data ada 2 jenis 
   - Tipe Data Primitif &rarr; hanya bisa menampung 1 value, seperti: integer, float, char, boolean.
    int nilai = 90;
   - Tipe Data Non Primitf &rarr; bisa menampung lebih dari 1 value, seperti: array, string.
    int nilai_kelompok_A1 = [89, 90, 89, 94]; 
    
    &nbsp;
    Nah selain tipe ada ada juga materi tentang Enumeration
    Enumeration adalah kumpulan nilai tetap (konstanta, tidak dapat diubah). Contohnya seperti hari = {"senin", "selasa", "rabu", "kamis", "jumat", "sabtu", "minggu"} nilainya tetap ga bakal ada hari selain yang ada dalam daftar.
    &nbsp;
    Di pertemuan berikutnya saya mempelajari tentang Konsep OOP
    Sistem dirancang dengan membungkusnya (encapsulate) menjadi kelompok data atau method. Yang dimana dapat mewarisi (inheritance) atribut dan method komponen lain. Sifatnya saling berinteraksi. 
    &nbsp;
    4 Pilar OOP
    - Abstraction &rarr; fokus ke hal penting, informasi disembunyikan. contoh: kemudi mobil
    - Encapsulation &rarr; data hiding. contoh: nama ibu kandung dibuku rekening
    - Inheritance &rarr; pewarisan sifat. contoh: spiderman
    - Polymorphism &rarr; object yang berbeda dapat memiliki interpretasi yang berbeda terhadap behavior (method) yang sama. contoh: hewan bersuara

