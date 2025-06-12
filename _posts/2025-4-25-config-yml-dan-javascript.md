---
layout: post
title: "Memahami Konfigurasi YAML dan JavaScript dalam Proyek Web"
author: "Muhammad Fathurrahman"
---

Config YML dan JavaScript

---

## 1. Config YML
Config YML adalah file konfigurasi yang digunakan oleh Jekyll untuk mengatur berbagai aspek dari situs web. File ini biasanya terletak di root direktori proyek Jekyll dan memiliki nama `_config.yml`. Di dalamnya, Anda dapat menentukan berbagai pengaturan seperti nama situs, deskripsi, URL, dan lainnya.
- Isi file `_config.yml` dengan kode berikut:
{% raw %}
```yaml
url: 'https://fyou00.github.io/'
plugins:
  - jekyll-feed
  - jekyll-sitemap
  - jekyll-seo-tag
```
{% endraw %}

## 2. JavaScript
JavaScript adalah bahasa pemrograman yang digunakan untuk membuat situs web interaktif. Dalam proyek Jekyll, Anda dapat menambahkan file JavaScript ke dalam folder `assets/js` dan menghubungkannya ke halaman HTML Anda.
- Buat folder `assets/js` di dalam direktori proyek Jekyll Anda.
- Buat file JavaScript baru di dalam folder tersebut, misalnya `script.js`, dan isi dengan kode berikut:
```javascript
function myFunction() {
    alert("dibilangin ngeyel siiiii");
}
```
