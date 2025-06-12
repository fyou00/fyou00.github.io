---
layout: post
title: "Cara Membuat Blog dengan Jekyll"
author: "Muhammad Fathurrahman"
---

Penjelasan tentang link dan list pada HTML.

---

## Cara Membuat Blog dengan Jekyll

- Buat file baru `post.html` didalam folder `_layouts`

```
.
├── _layouts
|   |   default.html
│   └── post.html
```

- Dan isi file `post.html` dengan kode berikut
{% raw %}
```html
---
layout: default
---

<h1>{{ page.title }}</h1>
<p>{{ page.date | date_to_string }} - {{ page.author }}</p>

{{ content }}
```
{% endraw %}

- Di folder root buat file `blog.html` dan isi dengan kode berikut

```html
{% raw %}
---
layout: default
title: BLog
---

<h1>Blog</h1>

<ul>
  {% for post in site.posts %}
  <li>
    <a href="{{ post.url }}">{{ post.title }}</a>
    <p>{{ post.date | date_to_string }}</p>
    <p>{{ post.excerpt }}</p>
  </li>
  {% endfor %}
</ul>
{% endraw %}
```

Di dalam folder `_posts`, buat file baru dengan nama `2025-03-21-html-link-dan-list.md` dan isi dengan kode berikut:

```html
--
layout: post
title: "html link dan list"
---

Penjelasan tentang link dan list pada HTML.

## Apa itu HTML Link dan List?
```

---

## Apa itu HTML Link dan List?

### 1. Link (Tautan) pada HTML
Tag yang digunakan untuk membuat link adalah <a> <br>
```bash
<a href="#">Teks atau elemen yang bisa diklik</a>
```

### 2. Lists (Daftar) pada HTML
Lists digunakan untuk menyusun konten secara terstruktur dalam format daftar. HTML menyediakan tiga jenis utama daftar:
#### A. Ordered List (```<ol>```)
Ordered List digunakan untuk membuat daftar terurut. Daftar berurutan dimulai dengan tag <ol> dan diakhiri dengan tag </ol>. Setiap daftar item dimulai dengan tag <li> dan diakhir dengan tag </li>. Secara default daftar setiap item ditampilkan dalam bentuk angka. 

Sintaks Dasar: <br>
```bash
<ol>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ol>
```

#### B. Unordered List (```<ul>```)
Unordered List digunakan untuk membuat daftar tidak terurut. Daftar tak berurutan dimulai dengan tag <ul> dan diakhiri dengan tag </ul>. Setiap daftar item dimulai dengan tag <li> dan diakhiri dengan tag </li> sama dengan daftar berurutan. Secara default daftar tak berurutan ditampilkan dalam bentuk bullet (peluru). Contoh penggunaan daftar tak berurutan adalah sebagai berikut.

Sintaks Dasar: <br>
```bash
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
```

#### C. Definition List (```<dl>```)
Definition List digunakan untuk membuat daftar definisi. Daftar definisi dimulai dengan tag <dl> dan diakhiri dengan tag </dl>. Setiap istilah dimulai dengan tag <dt> dan diakhiri dengan tag </dt>, sedangkan deskripsi istilah dimulai dengan tag <dd> dan diakhiri dengan tag </dd>. Contoh penggunaan daftar definisi adalah sebagai berikut.
Sintaks Dasar: <br>
```bash
<dl>
  <dt>Kopi</dt>
  <dd>- Kopi hitam manis.</dd>
  <dt>Susu </dt>
  <dd>- Susi coklat dingin.</dd>
</dl>
```

