---
layout: post
title: "Belajar Jekyll: Halaman Default, Liquid, dan Front Matter"
author: "Muhammad Fathurrahman"
---

Penjelasan tentang Halaman Default pada Jekyll, Liquid, dan Front Matter.

---
## Membuat Halaman Default

Untuk membuat halaman default di Jekyll, Anda perlu membuat dua folder khusus: `_layouts` dan `_includes`.

### 1. Folder `_layouts`

Folder `_layouts` berisi template layout yang dapat digunakan oleh halaman atau post.

```
.
├── _layouts
│   └── default.html
```

Buatlah file `default.html` dan isi sebagai berikut:

{% raw %}
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>{{ page.title }}</title>
  </head>
  <body>
    {% include navigation.html %}
    {{ content }}
  </body>
</html>
``` 
{% endraw %}

### 2. Folder `_includes`

Folder `_includes` berisi potongan kode HTML yang dapat digunakan kembali, seperti navigation.

```
.
├── _includes
│   └── navigation.html
```

Buatlah file `navigation.html` dan ketik sebagai berikut:
{% raw %}
```html
<ul class="navbar">
  {% for item in site.data.navigation %}
  <li>
    <a href="{{ item.link }}" {% if page.url == item.link %} class="current"{% endif %}>
      {{ item.name }}
    </a>
  </li>
  {% endfor %}
</ul>
```
{% endraw %}

### 3. Menggunakan Layout di Post atau Halaman

Pada setiap post atau halaman, Anda dapat menentukan layout yang digunakan melalui Front Matter:

```yaml
---
layout: default
title: "Judul Halaman"
---
```

---

## Penjelasan Liquid

Liquid adalah bahasa template yang digunakan Jekyll untuk menampilkan data dinamis. Contoh sintaks Liquid:

{% raw %}
- {{ variable }} untuk menampilkan nilai variabel.

- {% tag %} untuk membuat percabangan atau logika, misalnya menampilkan sesuatu hanya jika kondisi tertentu terpenuhi.
{% endraw %}

Contoh:
{% raw %}
```liquid
{{ page.title }}
{% if page.author %}
  <p>Ditulis oleh {{ page.author }}</p>
{% endif %}
```
{% endraw %}

---

## Penjelasan Front Matter

Front Matter adalah blok YAML di bagian atas file Markdown atau HTML yang digunakan untuk mendefinisikan metadata, seperti layout, title, dan lainnya. Contoh:

```yaml
---
layout: post
title: "Judul Post"
author: "Nama Penulis"
---
```

Front Matter ini akan dibaca oleh Jekyll untuk mengatur bagaimana halaman tersebut dirender.