# Hi, I'm Fathur! from TI 1C 👋

Selamat datang di repository saya
## Membuat web dengan jekyll

1. Buat repository dengan nama akun
```bash
contoh: fyou00.github.io
```
2. Clone repository ke lokal menggunakan SSH

3. Masuk ke dalam folder repo kemudian install jekyll 
```bash
gem install jekyll bundler
```
4. Jalankan perintah berikut agar file baru `Gemfile` muncul
```bash
bundle init
```
5. Edit file Gemfile dan tambahkan baris berikut pada line paling bawah
```bash
# frozen_string_literal: true

source "https://rubygems.org"

# gem "rails"

gem "jekyll"
```


6. Buat file baru dengan nama index.html
```bash
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
</head>
<body>
  <h1>Hello World!</h1>
</body>
</html>
```

7. Jalankan perintah berikut untuk build web yang telah dibuat sehingga menghasilkan folder _site
```bash
jekyll build
jekyll serve -livereload
```

Lalu akses web yang telah dibuat di web browser dengan alamat http://localhost:4000
## Authors

- [@fyou00](https://www.github.com/fyou00)

