---
layout: post
title: "Cara Ganti Branch Default di GitHub"
author: "Muhammad Fathurrahman"
---

# Cara Mengubah Branch Default di Repository GitHub

Branch default adalah branch yang pertama kali ditampilkan ketika seseorang membuka repository Anda di GitHub. Branch ini juga menjadi branch dasar untuk pull request baru. Pada tutorial ini, kita akan belajar cara mengubah branch default di repository GitHub.

---

## Mengapa Mengubah Branch Default?

Ada beberapa alasan mengapa Anda mungkin ingin mengubah branch default:
1. Anda ingin mengganti dari `master` ke `main` untuk mengikuti konvensi baru
2. Anda memiliki branch development yang ingin dijadikan default
3. Anda ingin mengorganisir workflow tim dengan lebih baik

---

## Langkah-Langkah Mengubah Branch Default

### Melalui GitHub Web Interface

Berikut adalah langkah-langkah untuk mengubah branch default melalui website GitHub:

1. **Buka Repository Anda di GitHub**
   - Login ke akun GitHub Anda
   - Navigasi ke repository yang ingin Anda ubah branch defaultnya
   - Contoh: `https://github.com/fyou00/fyou00.github.io`

2. **Masuk ke Settings**
   - Klik tab **Settings** di bagian atas halaman repository
   - Settings biasanya berada di sebelah kanan tab "Insights"

3. **Navigasi ke Branches**
   - Di menu sidebar sebelah kiri, cari dan klik **Branches**
   - Atau bisa langsung akses: `https://github.com/USERNAME/REPO/settings/branches`

4. **Ubah Default Branch**
   - Di bagian "Default branch", Anda akan melihat branch yang saat ini aktif
   - Klik tombol **Switch to another branch** (ikon panah berputar) atau tombol dengan simbol pensil
   - Pilih branch baru yang ingin dijadikan default dari dropdown menu
   - Contoh: pilih `main` jika sebelumnya `master`

5. **Konfirmasi Perubahan**
   - GitHub akan menampilkan dialog konfirmasi
   - Baca peringatan yang diberikan (karena ini akan mempengaruhi pull request dan workflow)
   - Klik **Update** atau **I understand, update the default branch** untuk mengonfirmasi

6. **Verifikasi Perubahan**
   - Setelah berhasil, Anda akan melihat branch baru sebagai default
   - Badge "default" akan muncul di samping nama branch yang baru

---

## Tips dan Catatan Penting

### ⚠️ Hal yang Perlu Diperhatikan:
- Mengubah branch default **tidak akan menghapus** branch lama
- Pull request yang sudah ada tetap akan menggunakan branch target yang sama
- Jika ada CI/CD atau GitHub Actions yang mengacu ke branch tertentu, pastikan untuk update konfigurasinya

### 📝 Best Practices:
- Sebelum mengubah default branch, pastikan branch baru sudah up-to-date
- Informasikan tim Anda jika bekerja dalam tim
- Update dokumentasi lokal yang mungkin mereferensi branch lama

---

## Mengubah Branch Default Lokal

Setelah mengubah default branch di GitHub, Anda mungkin juga ingin update reference lokal:

```bash
# Update remote references
git fetch origin

# Set upstream tracking untuk branch baru
git checkout main
git branch --set-upstream-to=origin/main main

# (Opsional) Hapus branch lokal yang lama jika sudah tidak diperlukan
git branch -d master
```

---

## Untuk GitHub Pages

Jika repository Anda adalah GitHub Pages (seperti `username.github.io`), perhatikan hal berikut:
- GitHub Pages bisa deploy dari branch `main`, `master`, atau branch lain yang Anda tentukan
- Setelah mengubah default branch, cek Settings → Pages untuk memastikan source branch sudah benar
- Biasanya GitHub akan otomatis mendeteksi perubahan

---

## Troubleshooting

### Branch yang diinginkan tidak muncul di dropdown?
- Pastikan branch tersebut sudah di-push ke remote repository
- Refresh halaman browser Anda
- Gunakan perintah: `git push -u origin nama-branch` untuk push branch baru

### Tidak bisa akses Settings?
- Pastikan Anda memiliki permission sebagai admin/owner repository
- Jika ini adalah repository organisasi, minta akses admin dari owner

---

## Kesimpulan

Mengubah branch default di GitHub adalah proses yang mudah dan dapat dilakukan dalam beberapa klik. Pastikan untuk:
1. Backup atau pastikan branch baru sudah berisi kode yang benar
2. Informasikan perubahan ke tim (jika ada)
3. Update konfigurasi CI/CD jika diperlukan

Selamat mencoba! 🚀
