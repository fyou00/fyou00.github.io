---
layout: post
title: "Personal Web dengan Jekyll dan GitHub Page"
---

Personal Web dengan Jekyll dan GitHub Page

Untuk membuat personal web dengan Jekyll dan publish di GitHub Page ikuti langkahlangkah berikut ini:
- Buat akun di GitHub dengan username sesuai nama masing-masing.
- Buat repository baru dengan nama username dan github.io.
username github = fyou00, maka nama repositorinya fyou00.github.io.
- Clone repository tersebut ke lokal.
- Masuk ke dalam folder repository tersebut kemudian install Jekyll dengan perintah berikut melaui terminal
```bash
gem install jekyll bundler
```
- Jalankan perintah bundle init untuk inisialisasi folder terebut sebagai proyek
jekyll seperti perintah berikut ini. Hasil dari perintah tersebut adalah file baru
dengan nama Gemfile.
```bash
bundle init
```
- Edit file Gemfile dan tambahkan kode berikut pada baris paling bawah
```bash
gem "jekyll"
```

- Buat file baru dengan nama index.html, kemudian isi dengan struktur dasar HTML
- Jalankan jekyll build untuk build web yang telah dibuat sehingga menhasilkan
directory _site.
```bash
jekyll build
```
- Kemudian jalankan perintah jekyll serve untuk menjalankan web yang telah
dibuat di web browser dengan alamat http://localhost:4000 atau 127.0.0.1:4000
```bash
jekyll serve
```

> tsasdasdasd

- Jika web telah berhasil dibuka, edit file Gemfile.lock dengan menambahkan
platform linux pada bagian platform seperti pada gambar berikut.
```bash
PLATFORMS
  x86_64-linux
```

- Untuk push repositori ke GitHub ketik perintah-perintah berikut
```bash
git add .
git commit -m "pub: fist publish"
git push
```
